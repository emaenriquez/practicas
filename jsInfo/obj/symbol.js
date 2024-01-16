// Symbols
// El valor de “Symbol” representa un identificador único
// un symbol es un “valor primitivo único” con una descripción opcional

let id = Symbol("id")

// console.log(id)
console.log(id.toString())
console.log(id.description)

// Claves “Ocultas”
// Los Symbols nos permiten crear propiedades “ocultas” en un objeto, a las cuales ninguna otra parte del código puede accesar ni sobrescribir accidentalmente.
let user = {
    name: 'ema'
}

let id2 = Symbol('id')

user[id2] = 1

// console.log(user[id2])

// Cada instancia de Symbol es única. Aunque puedes crear múltiples símbolos con la misma descripción, son distintos entre sí. Esto garantiza que no haya colisiones de nombres, incluso si dos símbolos tienen la misma descripción.

const idSymbol = Symbol("id")

const obj = {
    [idSymbol]: 'mi valor',
    otraPropiedad: 'otro valor',
    getId: function(){
        return this[idSymbol]
    }
}

for (const key in obj) {
    console.log(key) // symbol son omitidos por los bucles for in
}

let clone = Object.assign({},obj)

console.log(clone[id])

// console.log(obj.otraPropiedad)
// console.log(obj[idSymbol])
// console.log(obj.getId())

// Symbols Globales

let id3 = Symbol.for("id")
let idAgain = Symbol.for("id")

console.log(id3 === idAgain)

// Symbol.keyFor
let sys = Symbol.for('nombre')
let sym = Symbol.for('id')
console.log(Symbol.keyFor(sys))
console.log(Symbol.keyFor(sym))

let globalSymbol = Symbol.for('nombre')
let localSymbol = Symbol('id')

console.log(Symbol.keyFor(globalSymbol)) // nombre, global symbol
console.log(Symbol.keyFor(localSymbol)) // undefined, no global


let obj1 = {
    valor: 42.
    
}