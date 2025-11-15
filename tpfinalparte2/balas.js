class Bala {
constructor(x, y, esEnemigo = false) {
this.x = x;
this.y = y;
this.tamaño = 20; 
this.esEnemigo = esEnemigo;
this.velocidadY = esEnemigo ? 4 : -7; 
this.velocidadX = 0; 
if (this.esEnemigo) {
 this.velocidadX = random(-1.5, 1.5);
}
if (this.esEnemigo) {
  this.daño = 25; 
} else {
this.daño = 10;
 }
  }
  actualizar() {
    this.y += this.velocidadY; 
    this.x += this.velocidadX; 
  }
  mostrar() {
 if (this.esEnemigo) {
 image(imgEstrellaRoja, this.x - this.tamaño / 2, this.y - this.tamaño / 2, this.tamaño, this.tamaño);
} else {
  image(imgEstrellaAmarilla, this.x - this.tamaño / 2, this.y - this.tamaño / 2, this.tamaño, this.tamaño);
    }
  }
impacta(objetivo) {
let d = dist(this.x, this.y, objetivo.x, objetivo.y);
return d < this.tamaño / 2 + objetivo.tamaño / 2;
  }
}
