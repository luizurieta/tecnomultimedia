class Juego {
  constructor() {
    this.laberinto = new Laberinto();
    this.personaje = new Personaje();
    this.estado = '0';
    this.diarios = [
    new Diario (3,1,30),
    new Diario (5,11,30),
    new Diario (9,3,30),
    new Diario (5,0,30),
    new Diario (9,9,30),

    ];
  }
  dibujar() {
    if (this.estado === '0') { //inicio
      background (0);
      fill (100, 255, 100);
      textSize (28);
      textAlign (CENTER, CENTER);
      text ("LA FERIA DE LAS TINIEBLAS", width /2, 100);
      fill (255)
        textSize (18);
      text ("PRESS ENTER TO START", 250, 380);
    } else if (this.estado ==='1') { //instrucciones
      background (0);
      fill (100, 255, 100);
      textSize (20);
      textAlign (LEFT, CENTER);
      text ("WILL NECESITA ENCONTRAR", 50, 100);
      text ("LOS ARCHIVOS PARA SABER QUE ", 30, 140);
      text ("SECRETOS ESCONDE EL CIRCO", 40, 180);
      textSize (14);
      text ("CON LAS FLECHAS WILL COMENZARA A MOVERSE", 30, 220);
      text ("PERO DEBE APURARSE Y RECOLECTAR TODOS LOS ", 5, 240);
      text ("DIARIOS EN EL TIEMPO QUE TIENE ", 70, 260);
      fill (255)
        textSize (12);
      text ("PRESS ENTER TO START", 250, 380);
    } else if (this.estado === '2') { //juego
      this.laberinto.dibujar();
      this.personaje.mostrar ();
       for (let i = 0; i < this.diarios.length; i++) {
        const diario = this.diarios[i];
        if (!diario.recolectado) {
          diario.mostrar();
          if (diario.colision(juego.personaje)) {
            diario.recolectado = true;
               this.diarios.splice(i, 1);
          }
        }
       }
          } else if (this.estado === '3') { //ganaste
       background (0);
      fill (100, 255, 100);
      textSize (20);
      text ('HAS LOGRADO EL OBJETIVO',50,100)
      text ('GRACIAS POR AYUDAR A WILL', 50, 140);
      text ('AHORA SABE COMO ENFRENTAR AL', 20,180);
      text ( 'ENEMIGO', 150,220);
      textSize (12);
      text ("PRESS ENTER TO REINICIAR", 220, 380);
    } else if (this.estado === '4') { //perdiste
         background (0);
      fill (100, 255, 100);
      textSize (20);
      text ('NO HAS LOGRADO EL OBJETIVO', 50, 100);
       text ('WILL AGRADECE TU AYUDA', 70, 140);
        textSize (12);
      text ("PRESS ENTER TO REINICIAR", 220, 380);
  }
  }

}
function keyPressed () {
  if (keyCode === UP_ARROW) {
    juego.personaje.mover (0, -1);
  } else if (keyCode === DOWN_ARROW) {
    juego.personaje.mover (0, 1);
  } else if (keyCode === LEFT_ARROW) {
    juego.personaje.mover (-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    juego.personaje.mover (1, 0);
  }
  if (keyCode === ENTER && juego.estado === '0'){
juego.estado = '1';
  } else if (keyCode === ENTER && juego.estado === '1'){
    juego.estado='2';
  }  else if (keyCode === ENTER && juego.estado === '3'){
    juego.estado = '0';
  } else if (keyCode === ENTER && juego.estado === '4'){
  juego.estado = '0';
}
}
