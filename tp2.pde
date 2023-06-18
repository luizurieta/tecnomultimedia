
//Lucía Izurieta
//92630/2
//link: https://youtu.be/fSuJiJoGCJU
//el primer link tiene fallas de audio e imagen. 
//linkk 2:
PImage referencia; 
int i;
int x;
int o =000;
int ancho =400;
int p= 000;
int alto=400;
color negro;
color blanco;
int cant = 14;
int tam = 31;
int distancia =32;
boolean adentro = true; 
boolean afuera =false;
void setup() {
  size (800, 400);
  background (0);
  negro = color (0);
  blanco = color (255);
  referencia = loadImage ("referencia.jpg");
}

void draw () {
 
  image (referencia, 0, 0);
  cuadrados ( blanco, negro, cant, tam);
  lineas ( distancia);
  println (adentro );
  println (afuera);

  if (click (o, p, ancho, alto)) {
    blanco = 255;
    negro =0;
  }
}




void keyPressed() {
  if (key == 'c' ) {
    blanco = color (0, 255, 0);
    negro = color(255, 0, 0);
  } else if (key == 'v' ) {
    blanco =color (255, 165, 0);
    negro = color(0, 0, 255);
  } else if (key == 'x' ) {
    blanco =color (148, 0, 211);
    negro =color(255, 255, 0);
  }

  if (key == 'b') {
    blanco = color(random(255), random(34), random(199));
    negro = color(random(255), random(34), random(0));
  }
}
