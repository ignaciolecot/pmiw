class Main {
constructor() {
 this.juego = new Juego();
this.pantallaInicio = new PantallaInicio();
this.pantallaCreditos = new PantallaCreditos();
this.pantallaGanaste = new PantallaGanaste();
 this.pantallaPerdiste = new PantallaPerdiste();
  }
 mostrar() {
 if (estado === "inicio") {
 if (musicaIntro.isPlaying() === false) {
   musicaIntro.loop();
}
 if (musicaJuego.isPlaying() === true) {
      musicaJuego.stop();
}
    this.pantallaInicio.mostrar();
} else if (estado === "jugando") {
 if (musicaIntro.isPlaying() === true) {
 musicaIntro.stop(); 
}
 if (musicaJuego.isPlaying() === false) {
 musicaJuego.loop();
}
 this.juego.mostrar();
}else if (estado === "ganaste") {
 if (musicaIntro.isPlaying() === true) {
musicaIntro.stop();
}
 if (musicaJuego.isPlaying() === true) {
   musicaJuego.stop();
}
 this.pantallaGanaste.mostrar();
} else if (estado === "perdiste") {
 if (musicaIntro.isPlaying() === true) {
 musicaIntro.stop();
}
 if (musicaJuego.isPlaying() === true) {
musicaJuego.stop();
}
 this.pantallaPerdiste.mostrar();
} else if (estado === "creditos") {
 if (musicaIntro.isPlaying() === true) {
 musicaIntro.stop();
 }
 if (musicaJuego.isPlaying() === true) {
  musicaJuego.stop();
  } 
this.pantallaCreditos.mostrar();
  }
}

manejarClicks() {
if (estado === "inicio") {
 if (mouseX > 10 && mouseX < 10 + 100 && mouseY > 10 && mouseY < 10 + 30 && mouseIsPressed === true) {
estado = "creditos";
sonidoClick.play();
 }
 let botonComenzarX = width - 150;
 let botonComenzarY = height - 60;
 let botonComenzarW = 130;
 let botonComenzarH = 40;
    
if (mouseX > botonComenzarX && mouseX < botonComenzarX + botonComenzarW &&
 mouseY > botonComenzarY && mouseY < botonComenzarY + botonComenzarH &&
 mouseIsPressed === true) {
  estado = "jugando";
  sonidoClick.play();
   }
  }
}
manejoTeclas() {
 if (estado === "creditos") {
  if (key === '0') estado = "inicio";
 } else if (estado === "perdiste" || estado === "ganaste") {
  if (key === 'r') {
    this.reiniciarJuego();
  }
} else if (estado === "jugando" && keyCode === 32) {
  this.juego.dispararJugador();
  }
}
reiniciarJuego() {
this.juego = new Juego();
estado = "inicio";
  }
}
