

type persona = {
    nombre: string,
    edad: number
}

function crearPersona(p1:persona) {
    let {nombre , edad} = p1

    console.log(`hola mi nombre es: ${nombre} y tengo ${edad}`)
}

crearPersona({nombre:'emanuel',edad:12})


const concatenarTareas = (tp1:string,tp2:string,tp3:string): string => {
    return tp1.concat(tp2,tp3);
}

concatenarTareas('tp1 matematicas','tp2 lengua','tp3 logica matematica')


type Autos = {
    marca: string,
    modelo: string,
    ano: number
}

function createAutos(automiviles:Autos):string {
    let {marca,modelo,ano} = automiviles

    let res = `la marca de mi auto ${marca} ysu modelo es: ${modelo}
    y el año que fue ensanblado: ${ano}`

    return res
}

let teesla: Autos = {
    marca: 'tessla',
    modelo: 'modelo 1',
    ano: 2015
}

let descriptcion: string = createAutos(teesla)

console.log(descriptcion);

type Naves = {
    nombre: string,
    modelo: string,
}


function createNave(naves:Naves): Naves {
    return {
        nombre: 'tornado',
        modelo: 'F-14'
    }
}

let naveCreada: Naves = createNave({
    nombre:'trueno',
    modelo:'A-15'
})

console.log(naveCreada)


let persona = {
    nombre: 'emanuel',
    edad: 20
}

function saludar(persona: {nombre:string,edad:number}){
    let {nombre,edad} = persona

    return `hola soy ${nombre} y tengo ${edad}`

}