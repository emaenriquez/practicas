// Descriptores de Propiedad:
// son objetos que describen cómo se debe comportar una propiedad de un objeto. Cada propiedad en un objeto tiene un descriptor de propiedad asociado que define ciertos atributos de esa propiedad. Estos atributos incluyen:

// value: El valor de la propiedad.
// writable: Un booleano que indica si el valor de la propiedad puede ser modificado.
// enumerable: Un booleano que indica si la propiedad aparecerá en las iteraciones de bucles for...in y similares.
// configurable: Un booleano que indica si la propiedad puede ser eliminada y si sus atributos pueden ser modificados.
// Puedes obtener el descriptor de propiedad de un objeto utilizando el método Object.getOwnPropertyDescriptor(objeto, propiedad) y también puedes establecer los descriptores de propiedad utilizando Object.defineProperty(objeto, propiedad, descriptor).

const miObj = {
    miPropiedad: 10
}

const descriptor = Object.getOwnPropertyDescriptor(miObj,'miPropiedad')

console.log(descriptor)
// Output:
// {
//   value: 42,
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Indicadores de Propiedad:
// Son valores booleanos que indican ciertas características de una propiedad. Estos indicadores están relacionados con los atributos del descriptor

const Obj = {}

Object.defineProperty(Obj,'miPropiedad',{
    value: 30,
    writable: false,
    enumarable: true,
    configurable: false
})

console.log(Obj.miPropiedad); // output: 42
Obj.miPropiedad = 20; //No se produce un error, pero la modificación es ignorada debido a writable: false
console.log(Obj.miPropiedad) // Output: 42
