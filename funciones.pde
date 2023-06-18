void cuadrados (color blanco, color negro, int cant, int tam) {

  translate (400, 0);
  for (int i = cant; i > 0; i--)
  {

    rectMode (CENTER);
    if (i % 2 == 0) {
      fill (blanco);
    } else {
      fill (negro);
    }

    noStroke ();
    rect (width/4, height/2, i*tam, i*tam); 
    fill (blanco);
    noStroke();
    rect( 200, 200, 400, 72);
    rect (200, 0, 72, 800);


    fill (negro);
    rect (width/4, height/2, 70, 70); 
    fill (blanco);
    rect (width/4, height/2, 40, 40); 
    fill (negro);
    rect (width/4, height/2, 20, 20);
  }
}

void lineas (int distancia) {  for ( int y = 19; y < 150; y+=distancia)
    for (int a=251; a <500; a+=distancia)
      for (int g =21; g<150; g+=distancia)
        for (int f=251; f<400; f+=distancia)
        {  

          strokeCap(SQUARE);
          strokeWeight (16);
          stroke(negro);

          line (y, 163, y, 236);
          line(a, 163, a, 236);


          line (163, g, 236, g);
          line (163, f, 236, f);
        }
}
boolean click (int o, int p, int ancho, int alto) {
  if (mouseX >= o && mouseX <= o +ancho && mouseY >= p && mouseY <= p +alto)
  {
    return adentro; 
  }else {
    return afuera;
  }
}
