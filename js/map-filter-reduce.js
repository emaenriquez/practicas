const array = ["San Sebastián", "Madrid", "Barcelona", "Alicante", "Bilbao"]

const valor = array.forEach(item => {
    console.log(item)
    return 4
});

console.log(valor)

// map
const newArr = array.map((valor,index) => `${index + 1} - ${valor}`)

console.log(newArr)

// filter
const listaObjetos = [
    { nombre: "Leire", edad: 35 },
    { nombre: "Gorka", edad: 34 },
    { nombre: "Miguel", edad: 28 },
    { nombre: "Lucía", edad: 3 },
    { nombre: "Amaia", edad: 29}
]

const filtro = listaObjetos.filter(obj => obj.edad > 30)
const filtroNombre = listaObjetos.filter(obj => obj.nombre == 'Amaia')
console.log(filtro)
console.log(filtroNombre)

// reduce
const valores = [3, 56, 23, 5, 90, 100]

const suma = valores.reduce((acumulado,cur,i,arrayOriginal)=>{
    console.log(acumulado)
    console.log(cur)
    console.log(i)
    console.log(arrayOriginal)
    return acumulado + cur
})

console.log(suma)