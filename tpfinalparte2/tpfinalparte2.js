//https://youtu.be/438ewr-XQ4c
let fondo; 
let imgjugador; 
let imgenemigo; 
let imgintro
let imgganaste
let imgperdiste
let imgcreditos
let imgEstrellaRoja;
let imgEstrellaAmarilla;
let estado = "inicio"; 
let sonidoClick;
let musicaIntro;
let musicaJuego;

function preload() {
  fondo = loadImage('data/laboratorio.png'); 
  imgjugador = loadImage('data/timmy.png'); 
  imgenemigo = loadImage('data/papaCientifico.png'); 
  imgintro = loadImage('data/intro.png'); 
  imgganaste = loadImage('data/ganaste.png'); 
  imgperdiste = loadImage('data/perdiste.png');     
  imgcreditos = loadImage('data/casaTimmy.png'); 
  imgEstrellaRoja = loadImage("data/estrellas.png");
  imgEstrellaAmarilla = loadImage("data/amarilla.png");
  sonidoClick = loadSound("data/clickmouse.mp3");
  musicaIntro = loadSound("data/intro.mp3");
  musicaJuego=loadSound ("data/musicfondo.mp3");
}
function setup() {
  createCanvas(640, 480);
  main = new Main();
  main.mostrar();
}
function draw() { 
  main.mostrar();
}
function keyPressed() {    
  main.manejoTeclas();
}
function mousePressed() {
  main.manejarClicks();
}
