
 class Diario {
 constructor(fila, columna, tam) {
    this.fila = fila;
    this.columna = columna;
    this.tam = tam;
    this.recolectado = false;
  }

  mostrar() {
    fill(0, 0, 255);
    ellipse(
      (this.columna + 0.5) * juego.laberinto.tam,
      (this.fila + 0.5) * juego.laberinto.tam,
      this.tam / 2,
      this.tam / 2
    );
  }

  colision(x, y, tam) {
    let distancia = dist(
      this.columna * juego.laberinto.tam + juego.laberinto.tam / 2,
      this.fila * juego.laberinto.tam + juego.laberinto.tam / 2,
      x + tam / 2,
      y + tam / 2
    );
    return distancia < (tam + this.tam) / 2;
  }
}
