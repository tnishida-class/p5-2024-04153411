// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(60, 100); // 60以上100未満のランダムな数を代入
  }
  //console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){
    sum += scores[i];
  }
  //console.log(sum);

  // ここから平均・最大・最小を求めます
  let average, largest, smallest;
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）
  average=sum/scores.length;//score配列の要素数
  console.log(average);

  largest = 0;
  for(let i = 0; i < scores.length; i++){
    // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
   if(scores[i]>largest){
    largest=scores[i]
   }
  }
 //console.log(largest);

  smallest = 100;
  for(let i = 0; i < scores.length; i++){
    // BLANK[3]　ヒント：最小値とだいたい同じ
   if(scores[i]<smallest){
    smallest=scores[i]
   }
  }
  //console.log(smallest);

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }//heightがキャンバスの高さ　キャンバスのどのくらいの割合にくるかを求め１０分割する横線書く
  
  noStroke();

  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length;//各棒グラフの横幅　各棒が占めるスペースの幅を均等に割り出す
    const h = height * scores[i] / 100;//各棒グラフの高さ　
    // BLANK[4] ヒント: 条件分岐を使って色を変更します
    if(scores[i]==largest){
      fill(255,0,0);
    }
    else if(scores[i]==smallest){
      fill(0,0,255)
    }
    else{
      fill(122)
    }
    rect(i * dx + 2, height - h, dx - 4, h);//hはバーの高さ(スコアに基づき計算される)　四角形の左上のx,四角形の左上のy,四角形の幅,四角形の高さ
    fill(0);//黒
    text(scores[i].toPrecision(3), i * dx, height - h);//指定した位置に文字列valueを表示　少数第二位までの数値が表示
  }

  // BLANK[5] 平均点の線を引きます
stroke(0,200,100);
strokeWeight(2);
const avgLineY=height-(height*average/100);
line(0,avgLineY,width,avgLineY);

}