//Como se ve no es obligatorio o el estandar no dice que se debe poner ; (punto y coma)
class Libro {
  constructor(autor, titulo){//tiene un constructor
    this.autor = autor//propiedades
    this.titulo = titulo
  }

  mostrar(){//metodo normal
    console.log(this)
  }
}

//Existe herencia
class LibroTec extends Libro{
  constructor(autor,titulo,categoria='Informatica'){
    //llamada al padre si es dentro del constructor llamara al constructor padre, si es en otro metodo debe ser super().metodo
    super(autor,titulo)
    this.categoria = categoria
  }
}

let libro1 = new LibroTec("R.Palacios","Aprendiendo Angular")//Crear Objeto
libro1.editorial = "Ra-ma"
libro1.mostrar() //instanciar objeto y llamar metodo mostrar
