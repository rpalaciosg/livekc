
//Crear funciona que nos ayude a calcular IVA y precio final
const aDatos = [{precio:12},{precio:32},{precio:56}] //estoy diciendo que este array siempre va a ser un array,
//no que sus datos no pueden cambiar, esto para evitar la sobre escritura de ellos
aDatos.push({precio:68})
calcularPrecio(12)
calcularPrecio()//ejecuta con el valor iva por defecto

function calcularPrecio(iva = 22){//Existen los bloques y las variables estaran limitadas a los bloques o ambito
  {
    let finalIva = 1 + (iva/100)
    console.log(finalIva)
    let precioFinal
    aDatos.forEach( elem => {//funciones de tipo arrow esto seria asi function aaa(elem){}
      precioFinal = elem.precio * finalIva
      mostrarPrecio(precioFinal)
    })
  }
}

function mostrarPrecio (precioFinal) {
  //Este meto usa los templates strings, esto reconocde todos los caracteres e interpola variables
  console.log(
    `
    El precio final es:
    ${precioFinal.toFixed(2)}`
  )
}


