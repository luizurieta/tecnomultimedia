//tp1 comisión 1
//Izurieta Lucía 92630/2
int tiempo;
int tam;
int posY ;
int posX;
PImage torre1;
PImage gustave;
PImage construccion;
PImage noche;
PFont t;
int ubix;
int ubiy;
int ancho;
int alto ;
void setup () {
  size (640, 480);
  t = loadFont ("font.vlw");
  torre1 = loadImage ("torre1.png");
  gustave = loadImage ("gustave.jpg");
  noche = loadImage ("noche.jpg");
  construccion = loadImage ("construccion.jpg");
  posY =50;
  posX = 500;
  tam =5;
  ubix=450;
  ubiy=380;  
  ancho = 100;
  alto= 60;
}

void draw () {
  //println (tiempo);

  if (frameCount %60==0) {
    tiempo ++;
  }
  if (tiempo >=0)
  {  
    background (196, 212, 252);

    noStroke();
    fill (255);
    rectMode(CENTER);
    rect (340, 250, 320, 280, 30);
    fill (0);
    textAlign (LEFT, CENTER);
    textFont (t, 50);
    text ("LA TORRE EIFFEL\n FRANCIA, PARIS.", 224, posY);
    image (torre1, 80, 20);
    if (posY<200 ) {
      posY++;
    }

    //estado 2
    if (tiempo >3) {
      background (219, 213, 222);
      fill (0, 0, 0, 40);
      rect (202, 220, 160, 210);
      rect(130, 380, 150, 185);
      image(gustave, 135, 134);
      image (construccion, 70, 305);
      fill (0);
      textAlign (LEFT, CENTER);
      textSize (50);
      text("EL MONUMENTO FUE\n CONSTRUIDO EN 1889\n POR EL INGENIERO\n GUSTAVE\n EIFFEL.", posX, 200);
      if (posX >280
        ) {
        posX --;
      }
    }
    //llave if

    //estado 3
    if (tiempo > 7) {     
      background (106, 106, 152);
      fill (0, 0, 0, 20);
      noStroke ();
      rect (40, 145, 240, 160);
      image (noche, -100, 74);
      rect (325, 140, 270, 156);
      image (noche, 200, 70);
      rect (590, 145, 200, 160);
      image (noche, 500, 74);

      fill(0);
      textAlign (CENTER);
      textSize(tam);
      if (tam<40) {
        tam++;
      }
      text ("UBICADO EN EL CAMPO DE MARTE, LA \n TORRE PARISINA ES EL MONUMENTO PAGO \nMAS VISITADO DEL MUNDO. ", 310, 280);
      if (tiempo>8) {
        fill (0, 0, 0, 5);

        rect (540, 420, 150, 60, 10);
        textSize(45);
        fill(0, 0, 0, 100);
        text("REINICIAR", 475, 422);
      }
    }
  }
} //llave draw

void mousePressed ( ) {
  if (mouseX>=ubix &&  mouseX<ubix+ancho && mouseY>=ubiy  && mouseY<ubiy+alto)
  {
    tiempo=0;
    posY =50;
    tam =5;
    posX=500;
  }
}
