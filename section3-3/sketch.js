// テキスト「キーボード操作に反応する」
let x, y;
let speed=5;
let boost=10;

let now=speed;


function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y =  height-25;
}

function draw(){
  background(160, 192, 255);
  ellipse(x, y , 50);

  if(keyIsDown(LEFT_ARROW)){ x -= now; }
  if(keyIsDown(RIGHT_ARROW)){ x += now; }

  if(keyIsDown("X".charCodeAt(0))){ x+= now; }
  if(keyIsDown("Z".charCodeAt(0))){ x-= now; }

 if(keyIsDown(32)){now=boost;}
 else{now=speed}

 }


// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}