// テキスト「練習：繰り返し」
// 太い線と細い線が交互に出てくるパターン
// 練習：以下の2パターンにプログラムを書き換えてみましょう
// (1) 細い、太い、すごく太い、の3本周期で太さが変わる
// (2) 最初の3本が細い、次の3本が太い、最後の3本がすごく太い

let x, y; // 小さな円の位置
let speed = 5; // 小さな円の移動速度
let radius = 200; // 星を配置する円の半径
let starSize = 30; // 星のサイズ
let stars = []; // 星の位置を保存する配列
let score = 0; // スコアを保存する変数

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width / 2; // 小さな円の初期位置
  y = height / 2;

  // 初期の星を配置
  generateStars();
}

function draw() {
  background(160, 192, 255); // 背景の設定
  
  // 小さな円を描く
  fill(255, 0, 0); // 赤色
  noStroke();
  ellipse(x, y, 50); // 直径50の円

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
    let angle = TWO_PI * i / 5 - HALF_PI; // 星の角度
    let x = cx + cos(angle) * r;
    let y = cy + sin(angle) * r;
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
    let angle = TWO_PI * i / starCount;
    let starX = width / 2 + cos(angle) * radius;
    let starY = height / 2 + sin(angle) * radius;
    stars.push({ x: starX, y: starY }); // 星の位置を保存
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
