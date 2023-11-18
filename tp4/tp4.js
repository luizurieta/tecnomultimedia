//Lucía Izurieta 92630/2
// recuperatorio tp4
// link video: 
let textos = [ "INICIAR", "CRÉDITOS", "INSTRUCCIONES", "EL SIMPÁTICO BUBBLE NECESITA ALIMENTARSE PARA ENFRENTARSE A SUS ENEMIGOS.", "PARA ESO, NECESITA RECOGER TODOS LOS ALIIMENTOS DE LAS PLATAFORMAS.", "TENDRÁ TREINTA SEGUNDOS PARA LOGRAR SU OBJETIVO.", "LAS FLECHAS DEL TECLADO PERMITEN CONTROLAR EL MOVIMIENTO DE BUBBLE.", "MUCHA SUERTE :)", "PUNTOS = ", "TIEMPO: ", "¡GANASTE!", "GRACIAS POR AYUDAR A BUBBLE BOBBLE", "REINICIAR", "PERDISTE", "BUBBLE SE ENCUENTRA\n AGRADECIDO POR TU COLABORACIÓN", "PRESS ENTER PARA REINICIAR", "TRABAJO PRACTICO N°4", "LUCIA IZURIETA", "BUBBLE BOBBLE", "FUKIO MITSUJI", "...........", ];
let bubble = [];
let estado =0;
let tiempo =0;
let puntos =0;

let tamBubble = 50;
let pxCortas = [190, 380, 80, 260, 430];
let pyCortas = [160, 160, 450, 450, 450];
let pxLargas = [160, 280];
let pyLargas = [250, 340];
let xbubble = 190;
let ybubble = 100;

let velocidadY;
let elipses = [ 410, 340, 470, 500, 150 ];
let elipsesY = [ 500, 180, 270, 390, 410];
function preload() {
  for (let i = 0; i < 3; i++) {
    bubble[i] = loadImage("data/bubble" + i + ".png");
  }
}
function setup() {
  createCanvas(640, 640);
  x = 0;
  y = 0;
  ancho = 110;
  alto = 40;
}


function draw() {
  misEstados (estado);
  if (keyCode === UP_ARROW && ybubble > 90 && !colision(tamBubble, xbubble, ybubble - 1, pxLargas, pxCortas, pyLargas, pyCortas)) {
    ybubble--;
  } else if (keyCode === DOWN_ARROW && ybubble < 500 && !colision(tamBubble, xbubble, ybubble + 1, pxLargas, pxCortas, pyLargas, pyCortas)) {
    ybubble++;
  } else if (keyCode === RIGHT_ARROW && xbubble <=550 && !colision(tamBubble, xbubble + 1, ybubble, pxLargas, pxCortas, pyLargas, pyCortas)) {
    xbubble++;
  } else if (keyCode === LEFT_ARROW  && xbubble >=40 && !colision (tamBubble, xbubble - 1, ybubble, pxLargas, pxCortas, pyLargas, pyCortas)) {
    xbubble--;
  }

  textSize(32);
  textAlign(CENTER, CENTER);

  if ( tiempo >=40 && puntos <50) {
    estado = 5;
  }
  if ( tiempo <=40 && puntos >49 ) {
    estado= 4;
  }
}
function misEstados(estado) {
  if (estado === 0) { //inicio
    background (255);
    image(bubble[0], 120, 50);
    image(bubble[1], 10, 280, 150, 150);
    noStroke();
    fill(247, 161, 0);
    rect(245, 420, 150, 50, 10);
    rect(225, 520, 190, 50, 10);
    fill(0);
    text(textos[0], width / 2, 450);
    text(textos[1], width / 2, 550);
  } else if (estado === 1) { //instrucciones
    background(0);
    noStroke();
    fill(251, 65, 154);
    rect(50, 50, 540, 540, 20);
    fill(255);
    textSize(50);
    textAlign(CENTER);
    text(textos[2], width / 2, 100);
    textAlign(LEFT);
    textSize(20);
    text(textos[3], 80, 100, 500, 170);
    text(textos[4], 80, 160, 500, 170);
    text(textos[5], 80, 220, 500, 170);
    text(textos[6], 80, 280, 500, 170);
    text(textos[7], width / 2, 510);
    fill(254, 238, 31);
    rect(225, 410, 190, 70, 10);
    fill(247, 161, 0);
    rect(235, 420, 170, 50, 10);
    textSize(30);
    fill(0);
    text(textos[0], 270, 450);
  } else if (estado === 2) {
    if (frameCount %60 == 0) {
      tiempo++;
    }
    background (0);//juego
    fill(255);
    textSize(20);
    text(textos[8] + puntos, 480, 30);
    text(textos[9] + tiempo + "SEGUNDOS", 120, 30);
    for (let i = 0; i < pxCortas.length; i++) {
      //dibujar plataformas
      plataformas(pxCortas[i], pyCortas[i], 120, 30);
      plataformasLargas(pxLargas[i], pyLargas[i], 220, 30);
    }
    fill(251, 65, 154);
    noStroke();
    rect(0, 50, width, 40); //bode superior dreceho- limites del juego
    rect(0, 50, 40, 540);
    rect(600, 50, 40, 540);
    rect(0, 550, 300, 40);
    rect(300, 550, 300, 40);
    image(bubble [2], xbubble, ybubble, tamBubble, tamBubble);
    fill (255);
    text(textos[9] + tiempo + "SEGUNDOS", 120, 30);

    fill(255, 0, 0);
    for (let i = elipses.length - 1; i >= 0; i--) {
      let x = elipses[i];
      let y = elipsesY[i];
      ellipse(x, y, 20, 20);

      if (dist(x, y, xbubble, ybubble) < tamBubble / 2) {
        elipses.splice(i, 1);
        elipsesY.splice(i, 1);

        puntos += 10;
      }
    }
  } else if (estado ===3) { //créditos
    background (0);
    fill(247, 161, 0);
    rect(225, 70, 190, 50, 10);
    fill (255);
    textAlign (CENTER);
    text (textos[1], 320, 100);
    textAlign (LEFT);
    textSize (24);
    text (textos[16], 40, 250);
    text (textos[17], 440, 250);
    text (textos[19], 440, 350);
    text (textos[18], 40, 350);
    text (textos[20], 350, 250);
    text (textos[20], 350, 350);
    textSize (26);
    fill(251, 65, 154);
    text (textos[15], 220, 600);
  } else if (estado===4) { //ganastte
    background(0);
    textAlign (CENTER);
    fill(251, 65, 154);
    textSize(32);
    fill (255);
    textSize (29);
    text(textos [10], 320, 160);
    fill(247, 161, 0);
    text (textos [11], 320, 300);
    rect (225, 520, 190, 50, 10);
    fill (255);
    textSize (20);
    text (textos [12], 320, 545);
  } else if (estado===5) { //perdiste
    background (251, 65, 154);
    fill (0);
    rect (100, 100, 450, 450);
    fill (255);
    textSize(32);
    text (textos [13], 320, 200);
    textSize (29);
    text (textos [14], 130, 200, 400, 280);
    textSize (20);
    fill (247, 161, 0);
    text (textos [15], 320, 500);
  }
}


function boton(px, py, an, al) {
  return mouseX > px && mouseX < px + an && mouseY > py && mouseY < py + al;
}

function mousePressed() {
  if (estado === 0) {
    if (boton(245, 420, 150, 50)) {
      estado = 1;
    } else if (boton(225, 520, 190, 50)) {
      estado = 3;
    }
  } else if (estado === 1) {
    if (boton(235, 420, 170, 50)) {
      estado = 2;
    }
  } else if (estado === 4) {
    if (boton(  225, 520, 190, 50)) {
      reiniciar ();
    }
  }
}
function keyPressed () {
  if (estado === 3) {
    if ( keyCode === ENTER) {
      estado = 0;
    }
  } else if (estado === 5) {
    if (keyCode === ENTER) {
      reiniciar ();
    }
  }
}
function plataformas(x, y, ancho, alto) {
  fill(251, 65, 154);
  rect(x, y, ancho, alto);
}

function plataformasLargas(x, y, ancho, alto) {
  fill(251, 65, 154);
  rect(x, y, ancho +50, alto);
}

function colision(tamBubble, x, y, pxLargas, pxCortas, pyLargas, pyCortas) {
  for (let i = 0; i < pxCortas.length; i++) {
    if (x + tamBubble > pxCortas[i] && x < pxCortas[i] + 120 && y + tamBubble > pyCortas[i] && y < pyCortas[i] + 30) {
      return true;
    }
  }
  for (let i = 0; i < pxLargas.length; i++) {
    if (x + tamBubble > pxLargas[i] && x < pxLargas[i] + 280 && y + tamBubble > pyLargas[i] && y < pyLargas[i] + 30) {
      return true;
    }
  }
}
function reiniciar () {
  estado=0;
  tiempo = 0;
  puntos = 0;
  elipses = [ 410, 340, 470, 500, 150 ];
  elipsesY = [ 500, 180, 270, 390, 410];
  xbubble = 190;
  ybubble = 100;
}
