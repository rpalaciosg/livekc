// vamos a crear un objeto timeout de sincronia
let oDatos = {precio:12, iva:1.16};
//Dentro de un metodo hacemos uso de una funcion ejecutada asicronamente.
oDatos.calculaIvaAsync = function ()
{
  setTimeout ( () => {
    let precioFinal = this.precio * this.iva
    console.log(`
      Usando una función clásica:
      El precio final es ${precioFinal.toFixed(2)}
    `);
  },1000)
}

oDatos.calculaIvaAsync()
