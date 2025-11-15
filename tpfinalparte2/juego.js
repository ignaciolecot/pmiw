class Juego {
 constructor() {
this.jugador = new Jugador();
this.enemigo = new Enemigo();
this.balas = []; 
 this.perdiste = false;
 this.victoria = false;
 this.barraDeVidaEnemigo = new BarraDeVida(this.enemigo, "Cientifico", 20);
 this.barraDeVidaJugador = new BarraDeVida(this.jugador, "Timmy", height - 40);
  // Temporizador del enemigo
this.tiempoDisparo = 60; 
this.contadorDisparo = 0;
    // Temporizador del jugador
this.cooldownJugador = 25;
this.temporizadorDisparoJugador = this.cooldownJugador;
}
mostrar() {
image(fondo, 0, 0, width, height);
this.barraDeVidaEnemigo.mostrar();
this.barraDeVidaJugador.mostrar();
this.jugador.actualizar();
this.jugador.mostrar();
this.enemigo.actualizar();
this.enemigo.mostrar();
this.actualizarBalas(); 
this.verificarPerdida();
this.verificarGanada();
  }
// Cooldown del jugador para que no pueda spamear y sea dificl :)
dispararJugador() {
 if (this.temporizadorDisparoJugador >= this.cooldownJugador) {
this.balas.push(new Bala(this.jugador.x, this.jugador.y, false)); 
this.temporizadorDisparoJugador = 0;
}
  }
 actualizarBalas() {
this.temporizadorDisparoJugador++;
this.contadorDisparo++;
//tiempo que tiene que esperar el enemigo para disparar
let tiempoDeEsperaActual;
if (this.enemigo.vida > 50) {
  tiempoDeEsperaActual = this.tiempoDisparo; 
    } else {
tiempoDeEsperaActual = 27; 
}
 if (this.contadorDisparo >= tiempoDeEsperaActual) { 
  let x = this.enemigo.x;
let y = this.enemigo.y + this.enemigo.tamaño / 2;
this.balas.push(new Bala(x, y, true)); 
this.contadorDisparo = 0; // Antes decía 'temporizadorDisparo'
    }
for (let i = this.balas.length - 1; i >= 0; i--) {
let bala = this.balas[i];
bala.actualizar();
bala.mostrar();
 if (bala.esEnemigo) {
 //bala del enemigo 
if (bala.impacta(this.jugador)) {
  this.jugador.recibirDaño(bala.daño);
this.balas.splice(i, 1);
}
 } else {
 //bala del jugador
if (bala.impacta(this.enemigo)) {
this.enemigo.recibirDaño(bala.daño);
this.balas.splice(i, 1);
     }
   }
 }
}
verificarPerdida() {
if (this.jugador.vida <= 0) {
  estado = "perdiste";
  }
}
verificarGanada() {
if (this.enemigo.vida <= 0) {
 estado = "ganaste";
    }
  }
}
