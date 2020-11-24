// 最終課題を制作しよう
let x,y,vx,vy
function setup(){
  createCanvas(windowWidth, windowHeight);
  x=width/2
  y=height/2
  vx=8
  vy=8
}

function draw(){
  background(160, 192, 255);
  person(x,y,)
  x+=vx;
  y+=vy;

  if(x < 0 || x > width){ vx = -1 * vx; };
  if(y < 0 || y > height){ vy = -1 * vy; };
  x = constrain(x, 0, width);
  y = constrain(y, 0, height);
}
function person(a,b){
  noStroke()
  fill(255)
  ellipse(a,b,30)
  eu(a-30,b+15)
  fill(255)
  rect(a-90,b+15,60,15)
  rect(a+30,b+15,60,15)
  rect(a-30,b+115,20,100)
  rect(a+10,b+115,20,100)
}
function eu(s,t){
  fill(0,0,255)
  rect(s,t,60,100);
  noStroke();
  fill(255,204,0)
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let s = 100 + cos(theta) * 50;
    let t = 100 + sin(theta) * 50;
    star(s, t, 10);
  }
}
function star(cx, cy, r){
  beginShape();    // 点つなぎを始める
  for(let i = 0; i < 5; i++){
    const theta = TWO_PI * i * 2 / 5 - HALF_PI;
    const s = cx + cos(theta) * r;
    const t = cy + sin(theta) * r;
    vertex(s, t);  // 次につなぐ点を１つ増やす
  }
  endShape(CLOSE); // 点つなぎを終わる
}


function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}
