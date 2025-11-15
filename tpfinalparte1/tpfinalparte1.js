//https://youtu.be/mX7-xGhwrBA
let pm = []; // arreglo para las imágenes
let textosNarrativos = []; // arreglo para los textos
let tiposDePantalla = []; // arreglo para saber qué tipo de pantalla es 
let estado = 0;
let respuestaUsuario = "";
let soundClick; // sonido de los botones
let intro; //intro de la serie y music fondo
//cargamos nuestras imagenes
function preload() {
  pm[0] = loadImage('assets/pm00.png');
  pm[1] = loadImage('assets/pm01.png');
  pm[2] = loadImage('assets/pm02.png');
  pm[3] = loadImage('assets/pm03.png');
  pm[4] = loadImage('assets/pm04.png');
  pm[5] = loadImage('assets/pm05.png');
  pm[6] = loadImage('assets/pm06.png');
  pm[7] = loadImage('assets/pm07.png');
  pm[8] = loadImage('assets/pm08.png');
  pm[9] = loadImage('assets/pm09.png');
  pm[10] = loadImage('assets/pm010.png');
  pm[11] = loadImage('assets/pm011.png');
  pm[12] = loadImage('assets/pm012.png');
  pm[13] = loadImage('assets/pm013.png');
  pm[14] = loadImage('assets/pm014.png');
  pm[15] = loadImage('assets/pm015.png');
  pm[16] = loadImage('assets/pm016.png');
  pm[17] = loadImage('assets/pm017.png');
  pm[18] = loadImage('assets/pm018.png');
  pm[19] = loadImage('assets/pm019.png');
  pm[21] = loadImage('assets/pm021.png'); 
  pm[22] = loadImage('assets/pm022.png'); 
  pm[23] = loadImage('assets/pm023.png'); 
  pm[24] = loadImage('assets/pm024.png'); 
  pm[25] = loadImage('assets/pm025.png'); 
  pm[27] = loadImage('assets/pm027.png'); 
  pm[28] = loadImage('assets/pm028.png'); 
  pm[29] = loadImage('assets/pm029.jpg'); 
  soundClick = loadSound ('data/clickmouse.mp3');
  intro = loadSound ('data/intro.mp3');
}
function setup() {
  createCanvas(640, 480);
  textFont('Comic Sans MS');
  //textos que usamos en la parte de arriba
  textosNarrativos[0] = "¡Los Padrinos Mágicos!";
  textosNarrativos[1] = "Era un día tranquilo en la casa de los Turnner";
  textosNarrativos[2] = "Timmy estaba haciendo la tarea";
  textosNarrativos[3] = "Pero algo no estaba saliendo bien... y justo entra el papá";
  textosNarrativos[4] = "";
  textosNarrativos[5] = "Su papá tampoco pudo resolver la tarea y llora";
  textosNarrativos[6] = "Timmy desea que su papá sea super inteligente";
  textosNarrativos[7] = "¡Aparecen los padrinos mágicos para cumplir su deseo!";
  textosNarrativos[8] = "Comienza la transformación";
  textosNarrativos[9] = "Aparece el super papá";
  textosNarrativos[10] = "Ahora sí logra ayudarlo con la tarea";
  textosNarrativos[11] = "El papá quiere analizar los peces de Timmy";
  textosNarrativos[12] = "El papá descubre que hablan";
  textosNarrativos[13] = "Su papá quiere exponer su descubrimiento";
  textosNarrativos[14] = "Su papá da una conferencia";
  textosNarrativos[15] = "Por favor papá, no lo hagas...";
  textosNarrativos[16] = "Su papá accede y lo abraza";
  textosNarrativos[17] = "Cosmo y Wanda lo acompañan, la magia esta sucediendo";
  textosNarrativos[18] = "Timmy desea que vuelva a la normalidad";
  textosNarrativos[19] = "Lograste mantener el secreto";
  textosNarrativos[21] = "Timmy hace su tarea solo y se saca una super F";
  textosNarrativos[22] = "Su niñera se entera y lo amenaza";
  textosNarrativos[23] = "Timmy obedece a la niñera y limpia toda la casa";
  textosNarrativos[24] = "La niñera le conto a los padres de la F";
  textosNarrativos[25] = "Lograste que sus padres no se enteren";
  textosNarrativos[27] = "Timmy se desmayó del miedo";
  textosNarrativos[28] = "Son considerados peligrosos y van presos";
  textosNarrativos[29] = "¿Fue real o magia? Solo su almohada conoce la verdad";

//definimos que pantallas son es decir, cinematica o con decision 
  tiposDePantalla[0] = 'inicio';
  tiposDePantalla[1] = 'narrativa';
  tiposDePantalla[2] = 'narrativa';
  tiposDePantalla[3] = 'narrativa';
  tiposDePantalla[4] = 'decision';
  tiposDePantalla[5] = 'narrativa';
  tiposDePantalla[6] = 'narrativa';
  tiposDePantalla[7] = 'narrativa';
  tiposDePantalla[8] = 'narrativa';
  tiposDePantalla[9] = 'narrativa';
  tiposDePantalla[10] = 'narrativa';
  tiposDePantalla[11] = 'decision';
  tiposDePantalla[12] = 'narrativa';
  tiposDePantalla[13] = 'narrativa';
  tiposDePantalla[14] = 'decision';
  tiposDePantalla[15] = 'narrativa';
  tiposDePantalla[16] = 'narrativa';
  tiposDePantalla[17] = 'narrativa';
  tiposDePantalla[18] = 'narrativa';
  tiposDePantalla[19] = 'final';
  tiposDePantalla[21] = 'narrativa';
  tiposDePantalla[22] = 'decision';
  tiposDePantalla[23] = 'narrativa';
  tiposDePantalla[24] = 'final';
  tiposDePantalla[25] = 'final';
  tiposDePantalla[27] = 'narrativa';
  tiposDePantalla[28] = 'final';
  tiposDePantalla[29] = 'final';
}
function draw() {
  background(0);
  if (pm[estado]) {
    image(pm[estado], 0, 0, width, height);
  } else {
    background(0);
    fill(255, 0, 0);
    textSize(20);
    textAlign(CENTER, CENTER);
    text("Error: Imagen no encontrada para el estado " + estado, width / 2, height / 2);
    return;
  }
  let tipo = tiposDePantalla[estado];
  if (tipo === 'inicio') {
    dibujarPantallaInicio();
  } else if (tipo === 'narrativa') {
    dibujarTexto(textosNarrativos[estado]);
  } else if (tipo === 'decision') {
    dibujarTexto(textosNarrativos[estado]);
    if (estado === 4) {
      dibujarDecision("¿Lo dejas ayudar?", "Sí", "No");
    } else if (estado === 11) {
      dibujarDecision("¿Qué sucede?", "Se desmaya", "Se opone");
    } else if (estado === 14) {
      dibujarDecision("¿Qué hace?", "Se queda callado", "Le pide que no lo haga");
    } else if (estado === 22) {
      dibujarDecision("¿Hace lo que le pide?", "Sí", "No");
    }
  } else if (tipo === 'final') {
    dibujarTexto(textosNarrativos[estado]);
    dibujarBotonReiniciar();
  }
}
function dibujarTexto(contexto) {
  if (contexto && contexto.length > 0) {
    noStroke();
    fill(0);
    rect(0, 0, width, 60);
    textSize(24);
    fill(255, 255, 0);
    stroke(128, 0, 128);
    strokeWeight(2);
    textAlign(CENTER, TOP);
    text(contexto, width / 2, 15);
  }
}
function dibujarPantallaInicio() {
  textSize(32);
  fill(255, 255, 0);
  stroke(128, 0, 128);
  strokeWeight(3);
  textAlign(CENTER, TOP);
  text("¡Los Padrinos Mágicos!", width / 2, 10);
  let botonX = width - 150;
  let botonY = height - 60;
  let botonW = 130;
  let botonH = 40;
  stroke(128, 0, 128);
  strokeWeight(3);
  fill(0);
  rect(botonX, botonY, botonW, botonH, 10);
  fill(255, 255, 0);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Comenzar", botonX + botonW / 2, botonY + botonH / 2);
}
function dibujarDecision(pregunta, textoBoton1, textoBoton2){
  noStroke();
  fill(0);
  rect(0, height - 100, width, 100);
  textFont('Georgia');
  textSize(20);
  fill(255);
  textAlign(CENTER, TOP);
  text(pregunta, width / 2, height - 90);
  //le damos parametros para donde tocar los botones
  let boton1W = textWidth(textoBoton1) + 40;
  let boton2W = textWidth(textoBoton2) + 40;
  let botonH = 40;
  let espacio = 20;
  let boton1CenterX = width/2 - boton1W/2 - espacio/2;
  let boton2CenterX = width/2 + boton2W/2 + espacio/2;
  let botonCenterY = height - 40;
//dibujamos los botones
  rectMode(CENTER);
  textAlign(CENTER, CENTER);
  //boton decision 1
  fill(255, 105, 180);
  rect(boton1CenterX, botonCenterY, boton1W, botonH, 10);
  fill(255);
  text(textoBoton1, boton1CenterX, botonCenterY);
//boton decision 2
  fill(0, 255, 127);
  rect(boton2CenterX, botonCenterY, boton2W, botonH, 10);
  fill(255);
  text(textoBoton2, boton2CenterX, botonCenterY);
  //vuelven a su estado norml 
  rectMode(CORNER);
  textFont('Comic Sans MS');
}
//lo que dice la funcion 
function dibujarBotonReiniciar() {
  let botonX = width - 150;
  let botonY = height - 60;
  let botonW = 130;
  let botonH = 40;
  stroke(128, 0, 128);
  strokeWeight(3);
  fill(0);
  rect(botonX, botonY, botonW, botonH, 10);
  fill(255, 255, 0);
  noStroke();
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Reiniciar", botonX + botonW / 2, botonY + botonH / 2);
}
//manejamos los eventos 
function mousePressed() {
  let tipo = tiposDePantalla[estado];
  if (tipo === 'inicio') {
    let botonX = width - 150; let botonY = height - 60; let botonW = 130; let botonH = 40;
    if (mouseX > botonX && mouseX < botonX + botonW && mouseY > botonY && mouseY < botonY + botonH) {
      estado = 1;
    }
  } else if (tipo === 'decision') {
    // Calculamos las coordenadas de los botones
    let boton1W, boton2W, textoBoton1, textoBoton2;
    // Asignamos los textos para medir su ancho
    if (estado === 4) { textoBoton1 = "Sí"; textoBoton2 = "No"; }
    else if (estado === 11) { textoBoton1 = "Se desmaya"; textoBoton2 = "Se opone"; }
    else if (estado === 14) { textoBoton1 = "Se queda callado"; textoBoton2 = "Le pide que no lo haga"; }
    else if (estado === 22) { textoBoton1 = "Sí"; textoBoton2 = "No"; }
    boton1W = textWidth(textoBoton1) + 40;
    boton2W = textWidth(textoBoton2) + 40;
    let botonH = 40;
    let espacio = 20;
    // Coordenadas del área de cada botón 
    let boton1CenterX = width/2 - boton1W/2 - espacio/2;
    let boton2CenterX = width/2 + boton2W/2 + espacio/2;
    let botonCenterY = height - 40;

    let boton1X = boton1CenterX - boton1W/2;
    let boton1Y = botonCenterY - botonH/2;
    let boton2X = boton2CenterX - boton2W/2;
    let boton2Y = botonCenterY - botonH/2;
  
    // decisiones del boton izquierdo
    if (mouseX > boton1X && mouseX < boton1X + boton1W && mouseY > boton1Y && mouseY < boton1Y + botonH) {
      if (soundClick && soundClick.isLoaded()) soundClick.play(); {
        if (estado === 4) { respuestaUsuario = "si"; estado = 5; }
        else if (estado === 11) { estado = 27; }
        else if (estado === 14) { estado = 28; }
        else if (estado === 22) { estado = 23; }
    }
    }  
    // decisiones del boton derecho 
    if (mouseX > boton2X && mouseX < boton2X + boton2W && mouseY > boton2Y && mouseY < boton2Y + botonH) {
      if (soundClick && soundClick.isLoaded()) soundClick.play(); {
        if (estado === 4) { respuestaUsuario = "no"; estado = 21; }
        else if (estado === 11) { estado = 18; }
        else if (estado === 14) { estado = 15; }
        else if (estado === 22) { estado = 24; }
    }
    }
  } else if (tipo === 'final') {
    let botonX = width - 150; let botonY = height - 60; let botonW = 130; let botonH = 40;
    if (mouseX > botonX && mouseX < botonX + botonW && mouseY > botonY && mouseY < botonY + botonH) {
      estado = 0;
      respuestaUsuario = "";
    }
  }
}
function keyPressed() {
//solo puede moverse en el caso que la pantalla sea narrativa, con las felchas 
  if (keyCode === RIGHT_ARROW && tiposDePantalla[estado] === 'narrativa') {
    if (estado === 5) { estado = 6; } 
    else if (estado === 21) { estado = 22; } 
    else if (estado === 27) { estado = 12; } 
    else if (estado === 17) { estado = 29; } 
    else if (estado === 12) { estado = 13; } 
    else if (estado === 23) { estado = 25; } 
    else { estado++; }
  }
 if (key === 'h' || key === 'H') {
   intro.play();
 } else if (key === 's' || key === 'S'){
   intro.stop();
 }
}
