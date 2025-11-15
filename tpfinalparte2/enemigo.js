class Enemigo {
constructor() {
this.x = width / 2;
this.y = height / 6;
this.tamaño = 80;
this.vida = 100;
this.velocidad = 3; 
this.destinoX = random(this.tamaño / 2, width - this.tamaño / 2);
this.destinoY = random(this.tamaño / 2, height / 2 - this.tamaño / 2); 
this.movimientoTimer = 0;
this.tiempoParaMoverse = 180;
  }
actualizar() {
this.movimientoTimer++;
let distanciaAlObjetivo = dist(this.x, this.y, this.destinoX, this.destinoY);
if (this.movimientoTimer > this.tiempoParaMoverse || distanciaAlObjetivo < this.velocidad) {
this.destinoX = random(this.tamaño / 2, width - this.tamaño / 2);
this.destinoY = random(this.tamaño / 2, height / 2 - this.tamaño / 2);
this.movimientoTimer = 0;
}
if (this.x < this.destinoX) {
if (this.destinoX - this.x < this.velocidad) {
this.x = this.destinoX; 
} else {
this.x += this.velocidad; 
}
} else if (this.x > this.destinoX) {
 if (this.x - this.destinoX < this.velocidad) {
 this.x = this.destinoX; 
 } else {
this.x -= this.velocidad; 
}
}
if (this.y < this.destinoY) {
if (this.destinoY - this.y < this.velocidad) {
this.y = this.destinoY; 
} else {
this.y += this.velocidad; 
}
} else if (this.y > this.destinoY) {
if (this.y - this.destinoY < this.velocidad) {
this.y = this.destinoY; 
} else {
this.y -= this.velocidad; 
}
 }
}
mostrar() {
 image(imgenemigo, this.x - this.tamaño / 2, this.y - this.tamaño / 2, this.tamaño, this.tamaño);
  }
  impacta(jugador) {
    let d = dist(this.x, this.y, jugador.x, jugador.y);
    return d < this.tamaño / 2 + jugador.tamaño / 2;
  }
  recibirDaño(cantidad) {
    this.vida -= cantidad;
  }
}
