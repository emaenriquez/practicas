
let nombre = "emanuel"
let saludo = `hola soy ${nombre}`

// console.log(saludo)
// console.log(saludo)

// console.log(nombre)

let lista = [2,1,2,3,4,5,6,3,4,5,76,8]

for (let i = 0; i < lista.length; i++) {

    if (lista[i] === 2) {
        continue
    }

    if(lista[i] === 6){
        break
    }
    // console.log(lista[i])
    

}


// let i = 0
// let max = 10

// while(i < max){
//     console.log(i)
//     i++
// }

// == sólo compara el valor
// === compara el valor y el tipo




// let numero = prompt('ingrese numero 1')
// let numero2 = prompt('ingrese numero 2')

// let res = parseInt(numero) + parseInt(numero2)

// console.log(res)

let arrNumero = [1,2,3,4,5,6,7,8,9,0,10,11,12,13]


arrNumero.forEach(item => {
    console.log(item)
    if (item == 1) {
        console.log("es el numero 1")
    }
});

const variableFind = arrNumero.find(item=>{
    if(item == 1){
        console.log("valor encontrado")
    }
})


const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]


const buscaNombre = listaObjetos.find(item =>{
    if (item.nombre == "Gorka") {
        console.log(`nombre encontrado ${item.nombre}`)
    }
})

const obj = listaObjetos.find(item => item.nombre == "Gorka")


const arr = [1,2,3,4]
const arr2 = [1,2,3,4]


const comparacion = (arr1,arr2) =>{
    if(arr1.length !== arr2.length) return false
    const res = arr1.every((valor,i) => valor === arr2[i])
    return res
}

console.log(comparacion(arr,arr2))

const nombre_lista = ['emanuel','david','tomas']
const apellidos_lista = ['eriquez','heriquez','gomez']

const listaUnida = nombre_lista.concat(apellidos_lista)

console.log(listaUnida)

// factor de propagacion

const listaUnidaFactorPropagacion = [...nombre_lista,...apellidos_lista]

console.log(listaUnidaFactorPropagacion)