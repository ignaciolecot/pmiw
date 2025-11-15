class PantallaInicio {
mostrar() {
image(imgintro, 0, 0, width, height);
//boton de creditos
strokeWeight(3);
stroke(128, 0, 128);
fill(0);
rect(10, 10, 100, 30, 10);
fill(255, 255, 0);
noStroke();
textSize(18);
textAlign(CENTER, CENTER);
text('Creditos', 10 + 100 / 2, 10 + 30 / 2);

//boton de comenzar
 let botonComenzarX = width - 150;
 let botonComenzarY = height - 60;
 let botonComenzarW = 130;
 let botonComenzarH = 40;
 strokeWeight(3);
 stroke(128, 0, 128);
 fill(0);
 rect(botonComenzarX, botonComenzarY, botonComenzarW, botonComenzarH, 10);
 fill(255, 255, 0);
 noStroke();
 textSize(20);
 textAlign(CENTER, CENTER);
text('Comenzar', botonComenzarX + botonComenzarW / 2, botonComenzarY + botonComenzarH / 2);

 //instrucciones juego
fill(255, 255, 0); 
stroke(0);         
strokeWeight(3);
textSize(18);
textAlign(LEFT, BOTTOM); 
text("Controles:", 15, height - 55);
text("Flechas:Moverse", 15, height - 35);
text("Espacio:Disparar", 15, height - 15);
  }
}
