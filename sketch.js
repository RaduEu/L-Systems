let startNo = 0;
let starters = ["A", "F", "GL", "Q-Q-Q-Q"];
let start = "GL";
let rules = [];
let comm;
let myText = "";
let len = 4;
let angle;
let divFactor = 1.2;
let col = 0;
let tran;

function setup() {
  createCanvas(700, 700);
  //translate(width/2,height);
  rules[0] = new rule('F', "FF+[+F-FF-F]-[-F+FF+F]");
  rules[1] = new rule('A', "A[/+A*][/-A*]");
  rules[2] = new rule('L', "GL-GR--GR+GL++GLGL+GR-");
  rules[3] = new rule('R', "+GL-GRGR--GR-GL++GL+GR");
  rules[4] = new rule('G', ">")
  rules[5] = new rule('Q', ">Q-Q+Q+Q+Q-Q-Q-Q+Q");
  //rules[1] = new rule('B', "A");
  comm = new command();
  keyPressed();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) startNo = (startNo + 3) % 4;
  else if (keyCode == RIGHT_ARROW) startNo = (startNo + 1) % 4;
  myText = starters[startNo];
  if (startNo == 0) {
    col = 124;
    len = 100;
    angle = PI / 6;
    tran = createVector(width / 2, height);
  } else if (startNo == 1) {
    col = 0;
    len = 5;
    angle = radians(25);
    tran = createVector(width / 2, height);
  } else if (startNo == 2) {
    col = 124;
    len = 5;
    angle = PI / 3;
    tran = createVector(width / 2, height / 2);
  } else if (startNo == 3) {
    col = 124;
    len = 5;
    angle = PI / 2;
    tran = createVector(width, height);
  }
  drawSystem();
}

function mousePressed() {
  myText = nextStep(myText, rules);
  drawSystem();
}

function draw() {
  //commands[0].c();
}

function drawSystem() {
  background(25);
  translate(tran.x, tran.y);
  let l = myText.length;
  for (let i = 0; i < l; i++) {
    comm.execute(myText[i]);
  }
}

function nextSteps(startString, rules, noSteps) {
  if (noSteps == 0) return startString;
  return nextStep(nextSteps(startString, rules, noSteps - 1), rules);
}

function nextStep(startString, rules) {
  let ret = "";
  let ls = startString.length;
  let no = rules.length;
  for (let i = 0; i < ls; i++) {
    let replaced = false; // if we do not replace this character by anything, add it unchanged
    for (let j = 0; j < no; j++) {
      if (startString[i] == rules[j].x) {
        replaced = true;
        ret = ret + rules[j].y;
      }
    }
    if (!replaced) ret += startString[i];
  }
  return ret;
}