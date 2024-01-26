
console.log('hola mundo desde typescript')

// tsc index.ts -w
// tsc -init 
// tsc -w

console.log('golas')


const str: string = 'hola mundo'

const numero: number = 20

const indefinido: undefined = undefined

const nulo: null = null

const numeros: number[] = [10,203,30,405,34]

const cadenas: string[] = ['hola','mundo']

const valores: boolean[] = [true,false]

enum diaSemana {
    lunes,
    martes,
    miercoles,
    jueves,
    viernes,
    sabado,
    domingo
}


enum colores {
    rojo = 'rojo',
    verde = 'verde',
    amarillo = 'amarillo'
}


function saludar(nombre: string,edad:string):string {
    return `hola soy ${nombre} y tengo ${edad}`
}

saludar('emanuel','20')


interface Persona{
    nombre:string,
    edad:number
}

interface Productos {
    nombre:string,
    precio:number,
    descripcion?: string
}

interface Comparator {
    (a:number,b:number):boolean;
}

interface Persona {
    nombre: string,
    edad: number,
    saludar(): void
}


let diferentes: string|number|boolean = true


let numeros1:number[] = [1,2,3,4,5,6,7]
let cadenas1:string[] = ['hola','mundo']


console.log(numeros1.slice(0,4))

cadenas1.indexOf('mundo')


let programador = {
    nombre:'emanuel',
    edad: 20,
    tecnologias: ['javascript','react js','svetle'],
    tomaMate: true
}

programador = {
    nombre:'david',
    edad: 21,
    tecnologias: ['c++'],
    tomaMate: false
}

console.log(programador.tecnologias[0].toUpperCase())

// type para tipar objectos