class Jugador {
constructor() {
this.x = width / 2;
this.y = height - 80; 
this.tamaño = 60;
this.velocidad = 5;
this.vida = 100;
  }
actualizar() {
if (keyIsDown(LEFT_ARROW)) {
 this.x -= this.velocidad;
}
 if (keyIsDown(RIGHT_ARROW)) {
 this.x += this.velocidad;
 }
 if (keyIsDown(UP_ARROW)) {
  this.y -= this.velocidad;
}
 if (keyIsDown(DOWN_ARROW)) {
  this.y += this.velocidad;
}
//Limitamos en x los bordes de la pantalla
this.x = constrain(this.x, this.tamaño / 2, width - this.tamaño / 2);
//limitamos en y la pantalla para que el personaje no puede pasar hacia el otro lado 
let bordeSuperiorZona = height / 2 + this.tamaño / 2;
let bordeInferiorZona = height - this.tamaño / 2;
this.y = constrain(this.y, bordeSuperiorZona, bordeInferiorZona);
 }
  mostrar() {
  image(imgjugador, this.x - this.tamaño / 2, this.y - this.tamaño / 2, this.tamaño, this.tamaño);
 }
 recibirDaño(cantidad) {
   this.vida -= cantidad;
  }
}
