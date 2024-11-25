// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup(){
  createCanvas(400, 200);  // キャンバスを大きくして多角形が収まるようにする
  background(200);　//背景灰色
  fill(0);//塗りつぶし黒
  crossmark(10, 10, 90, 90);　//線の始点と終点の座標
  ngmark(150, 50, 80);
  regularPolygon(6, 100, 150, 40);  // 正6角形
  regularPolygon(8, 200, 150, 40);  // 正8角形
  regularPolygon(10, 300, 150, 40); // 正10角形

}

function crossmark(x1, y1, x2, y2){
  line(x1, y1, x2, y2);　//1本目の線
  line(x2, y1, x1, y2);　//2本目の線
}

function ngmark(cx, cy, r){ //円の中心座標　円の半径
  push();
  noFill();　
  strokeWeight(r * 0.1);　//線の太さを半径の１０％に設定
  let d = sqrt(r * r / 8);　//対角線の長さをの半分がｄ
  ellipse(cx, cy, r);　//円を描く
  line(cx - d, cy - d, cx + d, cy + d);　//斜め線を描くため、始点と終点を計算。中心からｄの距離
  pop();　//図形の設定が他の描写に影響しないように
}

function regularPolygon(n, cx, cy, r){　//nは頂点の数、中心座標、多角形の半径

  beginShape();//図形の描写開始
  for(let i = 0; i < n; i++){
    let theta = TWO_PI * i / n - HALF_PI; // 頂点の角度を計算　360度/頂点の頂点の数で、頂点の角度を均等にわける
   //１つの頂点が上向きになるように調整する
    let x = cx + cos(theta) * r;　//極座標の公式を使い各頂点のX座標とY座標を計算
    let y = cy + sin(theta) * r;
    vertex(x, y);　//頂点を設定
  }
  endShape(CLOSE);
}