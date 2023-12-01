//claseprincipaljuego
class Juego {
  constructor() {
    this.fondoselva = loadImage('data/fondoselva.jpg');
    this.imginstrucciones = loadImage('data/instrucciones.png');
    this.imgpersonaje = loadImage('data/soldado.png');
    this.imgcafe = loadImage('data/cafe.png');
    this.imgcupula = loadImage('data/cupula.png');
    this.objlaberinto = new Laberinto();
    this.objjugador = new Personaje(10, 80, 30, this.objlaberinto, this.imgpersonaje);
    this.elementosComida = [
      new Comida(90, 185, this.imgcafe),
      new Comida(180, 310, this.imgcafe),
      new Comida(430, 180, this.imgcafe),
      new Comida(200, 550, this.imgcafe),
      new Comida(670, 550, this.imgcafe),
      new Comida(560, 670, this.imgcafe)
    ];
    this.cupula = new Cupula(750, 210, this.imgcupula);
    this.jugadorGano = false;

    this.tiempo = 0;
    this.estadoJuego = "INSTRUCCIONES";
  }


  iniciarJuego() {
    // empieza el juego
    this.cuadrosTranscurridos = 0;
    this.jugadorGano = false;
    this.objjugador.x = 10;
    this.objjugador.y = 80;
    this.cupula.recolectado = false;
    this.estadoJuego = "JUEGO";


    for (let i = 0; i < this.elementosComida.length; i++) {
      this.elementosComida[i].recolectado = false;
    }
    if (this.estadoJuego === "JUEGO") {
      loop();
    }
  }

  actualizar() {

    this.objlaberinto.mostrar();
    image(this.fondoselva, 0, 0, width, height);
    this.objlaberinto.dibujarLaberintoConLineas();
    this.objjugador.mostrar();

    // Mostrar comida
    for (let i = 0; i < this.elementosComida.length; i++) {
      let comida = this.elementosComida[i];
      if (!comida.recolectado) {
        comida.mostrar();
        if (comida.colision(this.objjugador.x, this.objjugador.y, this.objjugador.tamano)) {
          comida.recolectado = true;
        }
      }
    }

    // Cúpula
    this.cupula.mostrar();
    let comidaRecolectada = this.elementosComida.filter(comida => comida.recolectado).length;

    //condicion derrota
    if (comidaRecolectada === this.elementosComida.length && !this.jugadorGano &&
      this.cupula.colision(this.objjugador.x, this.objjugador.y, this.objjugador.tamano)) {
      this.jugadorGano = true;
      this.cupula.recolectado = true;
      // muestra msj victoria
      textSize(40);
      fill(255);
      textAlign(CENTER, CENTER);
      text("¡Has ganado!", width / 2, height / 2);
      textSize(29);
      text("¡Intenta mejorar tu tiempo, juga de nuevo presionando R!", width / 2, 500);
      noLoop();
    }

    // Contador de tiempo
 
 if (frameCount %60 == 0) {
      this.tiempo++;
    }
      textSize(20);
      fill(255);
      rect(540, 0, 250, 60);
      fill(0);
   text("TIEMPO: " + this.tiempo + " SEGUNDOS", 420, 20,500);
      // Condición de derrota por tiempo
      if (this.tiempo >= 60) {
        this.estadoJuego = "DERROTA";
        noStroke();
        background (220);
        textSize(32);
 fill(27, 167, 108);
 text("¡TIEMPO AGOTADO! PERDISTE.", width / 2, 200);
  
      }
    }
      //  text("¡Inténtalo de nuevo!, Presionando R", width / 2, 500);
      //  noLoop();

  

  reiniciarJuego() {
    this.cuadrosTranscurridos = 0;
    this.jugadorGano = false;
    this.objjugador.x = 10;
    this.objjugador.y = 80;
    this.cupula.recolectado = false;
    this.tiempoLimite = 60;
    this.estadoJuego = "JUEGO";

    for (let i = 0; i < this.elementosComida.length; i++) {
      this.elementosComida[i].recolectado = false;
    }
    loop();
  }

  dibujarjuego() {
    if (this.estadoJuego === "INSTRUCCIONES") {
      this.mostrarInstrucciones();
    } else if (this.estadoJuego === "JUEGO") {
      background(255);
      translate(width / 2 - this.objlaberinto.columnas * this.objlaberinto.tamCelda / 2, height / 2 - this.objlaberinto.filas * this.objlaberinto.tamCelda / 2);
      this.actualizar(this.fondoselva);
     
    }
  }

  mostrarInstrucciones() {
    background(255);
    image(this.imginstrucciones, width / 2 - this.imginstrucciones.width / 2, height / 2 - this.imginstrucciones.height / 2);
  }
  teclas() {

    if (keyCode === LEFT_ARROW && this.objjugador.puedeMover(-1, 0)) {
      this.objjugador.mover(-1, 0);
    } else if (keyCode === RIGHT_ARROW && this.objjugador.puedeMover(1, 0)) {
      this.objjugador.mover(1, 0);
    } else if (keyCode === UP_ARROW && this.objjugador.puedeMover(0, -1)) {
      this.objjugador.mover(0, -1);
    } else if (keyCode === DOWN_ARROW && this.objjugador.puedeMover(0, 1)) {
      this.objjugador.mover(0, 1);
    } else if (keyCode === 82 && this.estadoJuego === 4) {
      this.reiniciarJuego();
    } else if (keyCode === 82 && this.jugadorGano) {
      this.reiniciarJuego();
    }
  }
}


class Cupula {
  constructor(x, y, imgcupula) {
    this.x = x;
    this.y = y;
    this.tamano = 70;
    this.recolectado = false;
    this.imgcupula=imgcupula;
  }

  establecerPosicion(x, y) {
    this.x = x;
    this.y = y;
  }

  mostrar() {
    if (!this.recolectado) {
      image(this.imgcupula, this.x - this.tamano / 2, this.y - this.tamano / 2, this.tamano, this.tamano);
    }
  }

  colision(personajeX, personajeY, personajeTamano) {
    let distancia = dist(this.x, this.y, personajeX, personajeY);
    return distancia < (this.tamano + personajeTamano) / 2;
  }
}

class Comida {
  constructor(x, y, imgcafe) {
    this.x = x;
    this.y = y;
    this.tamano = 40;
    this.recolectado = false;
    this.imgcafe = imgcafe;
  }

  establecerPosicion(x, y) {
    this.x = x;
    this.y = y;
  }
  mostrar() {
    if (!this.recolectado) {
      image(this.imgcafe, this.x - this.tamano / 2, this.y - this.tamano / 2, this.tamano * 2, this.tamano * 2);
    }
  }

  colision(personajeX, personajeY, personajeTamano) {
    let distancia = dist(this.x, this.y, personajeX, personajeY);
    return distancia < (this.tamano + personajeTamano) / 2;
  }
}


let celda = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1],
  [1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

class Laberinto {
  constructor() {
    this.columnas = celda[0].length;
    this.filas = celda.length;
    this.tamCelda = 60;
    this.grid = celda;
  }

  esPared(x, y) {
    return this.grid[y][x] === 1;
  }

  esCamino(x, y) {
    return this.grid[y][x] === 0;
  }

  dibujarLaberintoConLineas() {
    stroke(0, 255, 200);
    strokeWeight(3);


    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {

        if (celda[i][j] === 1) {
          // Dibujo paredes como líneas
          let x1 = j * this.tamCelda;
          let y1 = i * this.tamCelda;
          let x2 = (j + 1) * this.tamCelda;
          let y2 = (i + 1) * this.tamCelda;


          line(x1, y1, x2, y1);
          line(x1, y1, x1, y2);
          line(x1, y2, x2, y2);
          line(x2, y1, x2, y2);
        }
      }
    }
  }

  mostrar() {
    for (let i = 0; i < this.filas; i++) {
      for (let j = 0; j < this.columnas; j++) {
        if (celda[i][j] === 1) {
          fill(0); // Pared
        } else {
          fill(255); // Camino
        }
        rect(j * this.tamCelda, i * this.tamCelda, this.tamCelda, this.tamCelda);
      }
    }
  }
}


class Personaje {
  constructor(x, y, velocidad, objlaberinto, imgpersonaje) {
    this.x = x;
    this.y = y;
    this.tamano = 60; // Tam soldado
    this.velocidad = velocidad;
    this.objlaberinto = objlaberinto;
    this.imgpersonaje = imgpersonaje;
  }

  mostrar() {
    if (this.imgpersonaje) {
      image(this.imgpersonaje, this.x - this.tamano / 2, this.y - this.tamano / 2, this.tamano, this.tamano);
    }
  }
  puedeMover(dx, dy) {
    let nextX = this.x + dx * this.velocidad;
    let nextY = this.y + dy * this.velocidad;

    // Calculo coordenadas de la celda que sigue
    let col = floor(nextX / this.objlaberinto.tamCelda);
    let fila = floor(nextY / this.objlaberinto.tamCelda);

    //siguiente celda es camino y no pared
    if (col >= 0 && col < this.objlaberinto.columnas && fila >= 0 && fila < this.objlaberinto.filas) {
      if (this.objlaberinto.esCamino(col, fila) && !this.objlaberinto.esPared(col, fila)) {
        return true;
      }
    }
    return false;
  }

  mover(dx, dy) {
    if (this.puedeMover(dx, dy)) {
      this.x += dx * this.velocidad;
      this.y += dy * this.velocidad;
    }
  }
}
