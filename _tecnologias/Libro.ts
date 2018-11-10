interface Autor {
  autor_nombre: string;
  autor_apellido: string;
}

class Libro implements Autor {
  autor_nombre; // no pongo tipos porque la interfaz ya me las esta dando
  autor_apellido;
  private titulo: string;

  constructor(autor, titulo) {
    this.autor_nombre = autor;
    this.titulo = titulo;
  }

  mostrar(){
    console.log(this);
  }
}
// Herencia
class LibroTec extends Libro {
  categoria: string;
  constructor(autor, titulo, categoria = 'Informática') {
    super(autor, titulo);
    this.categoria = categoria;
  }

  mostrar() {
    super.mostrar();
    console.log('Libro técnico');
  }
}

let libro = new LibroTec('R.Palacios', 'Angular');
libro.mostrar();

