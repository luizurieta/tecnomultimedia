class Laberinto {
   constructor() {
    this.grilla =  [ 
 [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
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
  [1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

];
    this.fila = this.grilla.length;
    this.columna= this.grilla[0].length;
   
      if (width / this.columna < height / this.fila) {
      this.tam = width / this.columna;
    } else {
      this.tam = height / this.fila;
    }
  }
  
 dibujar (){
    for (let i = 0; i < this.fila; i++) {
      for (let j = 0; j < this.columna; j++) {
        if (this.grilla[i][j] === 1) {
          fill(217,6,44); 
        } else {
          fill(255);
        }
                noStroke();
        rect(j *this.tam, i * this.tam,this.tam, this.tam)
    }
  }
 }
}
