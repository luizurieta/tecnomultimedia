let juego;
let imagen = [];
function preload() {
  for (let i = 0; i < 4; i++) {
    imagen[i] = loadImage("data/imagen" + i + ".jpg");
  }
}
function setup() {
createCanvas (400,400);
juego = new Juego ();
}


function draw() {
  juego.dibujar();
 
}
