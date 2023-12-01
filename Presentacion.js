class Presentacion {
  constructor() {
    this.textos = ["LA LARGA LLUVIA", "INICIAR", "CREDITOS", "A LOS RECIEN LLEGADOS AL PLANETA VENUS SE LES ROMPE LA NAVE", "OPCIÓN 1", "OPCIÓN 2", "INTENTAN REPARAR LA NAVE", "DECIDEN SALIR A EXPLORAR", "NO LOGRAN REPARAR LA NAVE, NI SOBREVIVIR AL CLIMA DEL NUEVO PLANETA", "REINICIAR", "SE ENCUENTRAN CON UNA TORMENTA MONSTRUOSA", "SIGUEN CAMINANDO", "ESPERAN QUE SE DETENGA", " LUEGO DE UNA LARGA CAMINATA EN LA INTERPERIE, SE ENCUENTRAN CON UNA SELVA", "EXPLORAR", "DOS SOLDADOS MUEREN POR LA LLUVIA ÁCIDA. HAY TOMAR UNA DECISIÓN ", "DECIDEN SEGUIR", "LLEGAN A UNA CÚPULA, ROTA Y SIN LUZ, CON LA ESPERANZA DE QUE SEA SU SALVACIÓN", "AL ENTRAR A LA CÚPULA, VEN QUE LAMENTABLEMENTE NO ES SU SALVACIÓN. LOS SOLDADOS RESTANTES DESCIENDEN EN LA LOCURA Y FALLECEN"
    ];
    this.boton = new Boton(0, 0);
    this.estado = new Estado(this);
    this.juego= new Juego();
    let imagenesRutas = ["data/primeraimagen.png"];
    this.imagen = new Imagen(imagenesRutas);
    this.juegoComenzado = false;
  }

  mostrar() {
    if (this.estado.estado === 0) {
      this.imagen.mostrar(0, 0);
    }
    this.estado.mostrar();

    if (this.enestado7()) {
      if (!this.juegoComenzado) {
        this.juego.iniciarJuego();
        this.juegoComenzado = true;
      }
      this.juego.dibujarjuego();
      this.juego.actualizar();
    }
  }

  enestado7() {
    return this.estado.estado === 7;
  }

  teclas() {
    if (this.juegoComenzado) {
      this.juego.teclas();
    }
  }

  iniciarJuego() {
    this.juegoComenzado = true;
  }

  clicpresentacion() {
    this.estado.clicestado();
    if (this.enestado7() && !this.juegoComenzado) {
      this.juego.iniciarJuego();
      this.juegoComenzado = true;
    }
  }
}
