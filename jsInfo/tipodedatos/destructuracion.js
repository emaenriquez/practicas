


// Desestructuración de Arrays
// Un ejemplo de cómo el array es desestructurado en variables:

let arr = ["John", "Smith"]

let [firstName,surname] = arr

console.log(firstName)
console.log(surname)

let [firstName2,surname2] =  "John Smith".split(' ')

console.log(firstName2)
console.log(surname2)

// segundo elemento no es necesario
let [firstName3, , title] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log( title );


let dias = ['lunes','martes','miercoles','viernes','sabado','domingo']

// let [dia1,dia2,dia3,dia4] = dias
// let [dia1, , , , ,dia7] = dias
let [dia1,...restoDias] = dias

console.log(restoDias)

const persona = {
    id:10,
    nombre:'carolina'
}

let {id,nombre} = persona

console.log(nombre)

const cadena = 'Emanuel'

let {length} = cadena

console.log(length)