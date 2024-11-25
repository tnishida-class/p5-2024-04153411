//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup(){
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw(){
  background(160, 192, 255);
  for(let i = 0; i < balls.length; i++){//ball に保存されている全てのボールについて描画と更新
    let b = balls[i];
    ellipse(b.x, b.y, b.size);//各ボールの位置に楕円を描写し次のフレームに向けて位置を更新
    b.x += b.vx;
    b.y += b.vy;
  }
}

function mouseDragged(){//マウスをドラッグした時に実行される関数
  const dx = mouseX - pmouseX;//マウスの現在位置と直前の位置の差　ｘ方向の移動量
  const dy = mouseY - pmouseY;
  if(mag(dx, dy) > 5){//マウスの移動距離が５ピクセルを超えた場合
    const randomSize=random(10,100);
    const b = { x: mouseX, y: mouseY, size: randomSize, vx: dx, vy: dy };//x,yボールの書記位置(マウスの現在位置)　vx,vy マウスの移動距離に基づく速度
    balls.push(b);//作成したボールを配列bに追加
  }
}

function windowResized(){//windows sizeが変更されるときに実行
  resizeCanvas(windowWidth, windowHeight);
}