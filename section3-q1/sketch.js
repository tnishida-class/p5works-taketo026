// 練習問題：吹き出し
// 吹き出しの位置、背景色 etc. を関数 balloon の引数で指定できるようにしてみよう
// 吹き出しにしっぽを付けてみよう
function setup(){
  createCanvas(400, 400);
  background(255);
  balloon("プログラミング基礎演習",150,150,150,94,185,84,200,70,200,);
}

function balloon(t,x,y,s,a,b,c,d,e,f){
  let w = textWidth(t);
  let h = textAscent() + textDescent();
  let p = 5;
  noStroke();
  fill(a,b,c);
  rect(x, y, w + p * 2, h + p * 2);
  fill(d,e,f);
  text(t, x+p,y+h+p);
  fill(a,b,c);
  triangle(x+10,y+h+p*2,x+20,y+h+p*2,x+5,y+h+p*2+15);
}
