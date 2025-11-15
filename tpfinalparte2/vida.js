class BarraDeVida {
constructor(personaje, etiqueta, posY) {
 this.anchoBarra = 300;
 this.altoBarra = 20;
 this.xBarra = (width - this.anchoBarra) / 2;
 this.posY = posY;
 this.personaje = personaje;
 this.etiqueta = etiqueta;
 this.porcentajeDeVida = 100;
}
mostrar() {
 push();
 this.porcentajeDeVida = this.personaje.vida / 100;
 // Fondo de la barra
fill(100);
strokeWeight(2);
 stroke(0);
 rect(this.xBarra, this.posY, this.anchoBarra, this.altoBarra);
//barras
 if (this.etiqueta === "Timmy") {
  fill(0, 255, 0); 
} else if (this.etiqueta === "Cientifico") {
  fill(255, 105, 180);
}
 //Dibujamos la barra de vida con color 
 strokeWeight(2);
 stroke(0);
rect(this.xBarra, this.posY, this.anchoBarra * this.porcentajeDeVida, this.altoBarra);
 //texto
 fill(255);
 strokeWeight(4);
stroke(0);
textSize(16);
textAlign(CENTER, CENTER);
text(this.etiqueta + ": " + this.personaje.vida, this.xBarra + this.anchoBarra / 2, this.posY + this.altoBarra / 2);
 pop();
  }
}
