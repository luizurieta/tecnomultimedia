class Personaje {
  constructor () {
    this.tam =  28;
    this.x = 0;
    this.y = 0;
  }

  mostrar () {
    fill (200);
    rect (this.x *juego.laberinto.tam, this.y*juego.laberinto.tam, this.tam, this.tam);
  }

  mover(dx, dy) {
    if (
      this.x + dx >= 0 &&
      this.x + dx < juego.laberinto.columna &&
      this.y + dy >= 0 &&
      this.y + dy < juego.laberinto.fila &&
      juego.laberinto.grilla[this.y + dy][this.x + dx] === 0
    ) {
      this.x += dx;
      this.y += dy;
    }
  }
}
