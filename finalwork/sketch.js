// 最終課題を制作しよう

let x, y; // 小さな円の位置
let speed = 5; // 小さな円の移動速度
let radius = 200; // 星を配置する円の半径
let starSize = 30; // 星のサイズ
let stars = []; // 星の位置を保存する配列
let score = 0; // スコアを保存する変数
let countdownTime = 20; // カウントダウンの時間（秒）
let countdownStartTime; // カウントダウン開始時刻

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; // 小さな円の初期位置
  y = height / 2;

  // 初期の星を配置
  generateStars();

  // カウントダウン開始時刻を設定
  countdownStartTime = millis();
}

function draw() {
  background(160, 192, 255); // 背景の設定
  
  // 小さな円を描く
  fill(255, 0, 0); // 赤色
  noStroke();
  ellipse(x, y, 30); // 直径30の円

  // 小さな円を移動させる
  if (keyIsDown(UP_ARROW)) { y -= speed; }
  if (keyIsDown(DOWN_ARROW)) { y += speed; }
  if (keyIsDown(RIGHT_ARROW)) { x += speed; }
  if (keyIsDown(LEFT_ARROW)) { x -= speed; }

  if (keyIsDown("W".charCodeAt(0))) { y -= speed; }
  if (keyIsDown("S".charCodeAt(0))) { y += speed; }
  if (keyIsDown("A".charCodeAt(0))) { x -= speed; }
  if (keyIsDown("D".charCodeAt(0))) { x += speed; }

  // 星を円周上に配置する
  drawStars();

  // 衝突判定
  checkCollisions();

  // 星が消えたら再生成する
  if (stars.length === 0) {
    generateStars(); // 星を再生成
  }

  // スコアを左上に表示
  fill(0); // 黒色
  textSize(32); // テキストのサイズ
  text("Score: " + score, 30, 40); // スコアを表示

  // カウントダウンの時間を計算
  let elapsedTime = (millis() - countdownStartTime) / 1000; // 経過時間（秒）
  let remainingTime = countdownTime - int(elapsedTime); // 残り時間

  // カウントダウンを右上に表示
  fill(255, 0, 0); // 赤色
  textSize(32); // テキストのサイズ
  textAlign(RIGHT, TOP); // 右上に配置
  text("Time: " + remainingTime, width - 30, 30); // 残り時間を表示

  // カウントダウンが終了した場合の処理
  if (remainingTime <= 0) {
    textSize(48);
    textAlign(CENTER, CENTER);
    fill(0); // 黒色
    text("Game Over!", width / 2, height / 2); // ゲームオーバーを表示
    noLoop(); // ゲームを停止（描画を止める）
  }
}

// 星を描く関数
function drawStars() {
  fill(255, 204, 0); // 星の色（黄色）
  noStroke();
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    drawStar(star.x, star.y, starSize); // 星を描画
  }
}

// 星を描くための関数
function drawStar(cx, cy, r) {
  beginShape();
  for (let i = 0; i < 5; i++) {
    let theta = TWO_PI * i / 5 - HALF_PI; // 星の角度
    let x = cx + cos(theta) * r;
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

// 衝突判定関数
function checkCollisions() {
  for (let i = 0; i < stars.length; i++) {
    let star = stars[i];
    let distance = dist(x, y, star.x, star.y); // ボールと星の距離を計算

    // 衝突判定: ボールが星にぶつかると
    if (distance < 50 / 2 + starSize / 2) { // 衝突したら
      stars.splice(i, 1); // 星を削除
      score++; // スコアを1増やす
      i--; // 配列のインデックス調整
    }
  }
}

// 星を再生成する関数
function generateStars() {
  let starCount = 12;
  for (let i = 0; i < starCount; i++) {
    let theta = TWO_PI * i / starCount;
    let starX = width / 2 + cos(theta) * radius;
    let starY = height / 2 + sin(theta) * radius;
    stars.push({ x: starX, y: starY }); // 星の位置を保存
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
