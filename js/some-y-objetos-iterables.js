const arr = [3, 7, 2, 4, 7, 9, 42, 35, 7865, 23, -2]

const res = arr.some(valor => valor < -0)

const existe = arr.some(valor => valor === 9)

console.log(res)
console.log(existe)

const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

const valorExiste = listaObjetos.some(persona => persona.nombre == 'Lucía')

console.log(valorExiste)

const str = "hola soy un string"
const arr_str = Array.from(str)

const set = new Set([2, 3, "hola", 4])
const arr_set = Array.from(set)

const keys = arr.keys()
const arr_keys = Array.from(keys)

console.log(str[5])
console.log(arr_str)
console.log(arr_set)
console.log(arr_keys)


const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "TED", anyo: 2012 }
]

listaPeliculas.sort((a,b) => a.anyo - b.anyo)

console.log(listaPeliculas)


const array = [1, 2, 3, 4, 5, 6, 1, 2, 5, "hola", { id: 5 }, "hola"]

const miSet = new Set(array)

console.log(miSet)

// miSet.add(10)
// miSet.delete("hola")
// miSet.clear()
// miSet.has(40)
// miSet.size()

miSet.forEach(element => {
    console.log(element)
});


const arr_mi_set = [...miSet]

console.log(arr_mi_set)

const it_values = miSet.values()
console.log(it_values)