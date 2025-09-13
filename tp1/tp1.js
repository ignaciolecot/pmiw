//https://youtu.be/t4WXVrkE57A
let referencia;
let fondoColor;
let circulosColor;
let tamaño = 1;
let rotacion = 0;
let botonX = 20;
let botonY = 350;
let botonAncho = 120;
let botonAlto = 40;

function preload() {
  referencia = loadImage("circulos1.png"); 
}

function setup() {
  createCanvas(800, 400);
  fondoColor = color(144, 238, 144);
  circulosColor = color(255, 50, 50);
}

function draw() {
  background(fondoColor);
  image(referencia, 0, 0);

  if (mouseX > width / 2) {
    if (mouseY < 200) {
      tamaño = map(mouseY, 0, 200, 2, 1);
    } else {
      tamaño = map(mouseY, 200, height, 1, 0.5);
    }
  }

  rotacion += 0.017; 

  push();
  translate(600, 200);
  rotate(rotacion);

  for (let i = 1; i <= 22; i++) {
    let base = i * 17;
    let tamanoC = calcularTamaño(base, tamaño);

    noFill();
    stroke(circulosColor);
    strokeWeight(map(i, 1, 22, 5, 1));
    circle(0, 0, tamanoC);
  }

  pop();

  dibujarBoton(botonX, botonY, botonAncho, botonAlto);
}

function mousePressed() {
  if (mouseX > width / 2) {
    if (dist(mouseX, mouseY, 600, 200) < 200) {
      circulosColor = color(random(255), random(255), random(255));
    } else {
      fondoColor = color(random(255), random(255), random(255));
    }
  }

  if (
    mouseX > botonX && mouseX < botonX + botonAncho &&
    mouseY > botonY && mouseY < botonY + botonAlto
  ) {
    fondoColor = color(170, 220, 170);
    circulosColor = color(255, 50, 50);
    tamaño = 1;
    rotacion = 0;
  }
}

function keyPressed() {
  if (keyCode === ENTER) {
    fondoColor = color(170, 220, 170);
    circulosColor = color(255, 50, 50);
    tamaño = 1;
    rotacion = 0;
  } else if (key === 'c' || key === 'C') {
    circulosColor = color(random(255), random(255), random(255));
  } else if (key === 'f' || key === 'F') {
    fondoColor = color(random(255), random(255), random(255));
  }
}

function dibujarBoton(x, y, ancho, alto) {
  fill(200);
  stroke(50);
  rect(x, y, ancho, alto, 10);
  fill(0);
  textSize(16);
  textAlign(CENTER, CENTER);
  text("Reiniciar", x + ancho / 2, y + alto / 2);
}

function calcularTamaño(base, escala) {
  let resultado = base * escala;
  return constrain(resultado, 10, 400);
}
