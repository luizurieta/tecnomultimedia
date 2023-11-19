class Juego {
  constructor() {
    this.laberinto = new Laberinto();
    this.personaje = new Personaje();
    this.estado = '0';
    this.diarios = [
      new Diario (3, 1, 30),
      new Diario (5, 11, 30),
      new Diario (9, 3, 30),
      new Diario (5, 0, 30),
      new Diario (9, 9, 30),
    ];
    this.textos = [
      "LA FERIA DE LAS TINIEBLAS", "PRESS ENTER TO START", "WILL NECESITA ENCONTRAR", "LOS ARCHIVOS PARA SABER QUE ", "SECRETOS ESCONDE EL CIRCO", "CON LAS FLECHAS WILL COMENZARA A MOVERSE", "PERO DEBE APURARSE Y RECOLECTAR TODOS LOS ", "DIARIOS EN EL TIEMPO QUE TIENE ", "NO HAS LOGRADO EL OBJETIVO", "WILL AGRADECE TU AYUDA", "HAS VENCIDO", "WILL Y SUS AMIGOS LIBERARON"," SU CIUDAD", "PRESS ENTER TO REINICIAR"
    ];
      this.tiempoInicio = millis();

  }
  dibujar() {

    if (this.estado === '0') { //inicio

      image(imagen[0], 0, 0, 400, 400);

      fill (255);
      textSize (28);
      textAlign (CENTER, CENTER);
      text (this.textos[0], width /2, 300);
      fill (255)
        textSize (18);
      text (this.textos[1], 250, 380);
    } else if (this.estado ==='1') { //instrucciones
      noStroke();
      image(imagen[1], 0, 0, 400, 400);
      fill (0, 100);
      rect (20, 20, 360, 360);
      fill (255);
      textSize (20);
      textAlign (LEFT, CENTER);
      text (this.textos[2], 50, 100);
      text (this.textos[3], 30, 140);
      text (this.textos[4], 40, 180);
      textSize (14);
      text (this.textos [5], 30, 220);
      text (this.textos[6], 18, 240);
      text (this.textos[7], 70, 260);
      fill (255)
        textSize (12);
      text (this.textos [1], 250, 380);
    } else if (this.estado === '2') { //juego
      this.laberinto.dibujar();
      this.personaje.mostrar ();
      let todasRecolectadas = true;
      for (let i = this.diarios.length - 1; i >= 0; i--) {
        const diario = this.diarios[i];
        if (!diario.recolectado) {
          diario.mostrar();
          if (diario.colision(this.personaje.x * this.laberinto.tam, this.personaje.y * this.laberinto.tam, this.personaje.tam)) {
            diario.recolectado = true;
            this.diarios.splice(i, 1);
          } else {
                      todasRecolectadas = false;

          }
        }
      }
      // Si no, continúa mostrando el juego
      fill(255);
      text('TIEMPO: ' + floor((millis() - this.tiempoInicio) / 1000) + ' SEGUNDOS', 300, 50);

 if (floor(millis() / 1000) >= 29) {
  if (todasRecolectadas) {
    this.estado = '3'; // victoria
  } else {
    this.estado = '4'; // derrota
  }
}

    } else if (this.estado === '3') { //ganaste
      noStroke();
      image(imagen[2], 0, 0, 400, 400);
      fill (0, 100);
      rect (20, 20, 360, 360);
      fill (255);
      textSize (20);
      text (this.textos [10], 150, 100);
      text ( this.textos [11], 60, 140);
            text ( this.textos [12], 150, 180);

      textSize (12);
      text (this.textos [13], 220, 380);
    } else if (this.estado === '4') { //perdiste

      image (imagen [3], 0, 0, 400, 400);
      noStroke();
      fill (0, 100);
      rect (20, 20, 360, 360);
      fill (255);
      textSize (20);
      text (this.textos[8], 30, 100);
      text (this.textos[9], 50, 140);
      textSize (12);
      text (this.textos[13], 220, 380);
    }
  }
  reiniciarJuego() {
    this.laberinto = new Laberinto();
    this.personaje = new Personaje();
    this.estado = '0';
    this.diarios = [
      new Diario(3, 1, 30),
      new Diario(5, 11, 30),
      new Diario(9, 3, 30),
      new Diario(5, 0, 30),
      new Diario(9, 9, 30),
    ];
      this.tiempoInicio = millis();

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
  if (keyCode === ENTER && juego.estado === '0') {
    juego.estado = '1';
  } else if (keyCode === ENTER && juego.estado === '1') {
    juego.estado='2';
  } else if (keyCode === ENTER && juego.estado === '3') {
    juego.estado = '0';
  }   else if (juego.estado === '3' ) {
    juego.reiniciarJuego();
  } else if (  juego.estado === '4') {
    juego.reiniciarJuego();
}
}
