var hr,mn,sc
var hrAngle, mnAngle, scAngle;

function setup() {
  createCanvas(800,800);
  angleMode(DEGREES);
}

function draw() {
  background(0)

  translate(200,200)
  rotate(-90)

hr = hour();
mn = minute(); 
sc = second();

scAngle=map(sc,0,60,0,360);
mnAngle=map(mn,0,60,0,360);
hrAngle=map(hr, 0,60,0,360);

  push()
  rotate(scAngle)
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop()

 // translate(200,200[sc])
  //translate(200,200[hr])
  //translate(200,200[mn])

 // background(255,255,255);  
 stroke(255,0,0);
 point(0,0)


 strokeWeight(10)
 noFill();
 stroke(255,0,0);
 arc(0,0,300,300,0,scAngle);
  //drawSprites();
}

