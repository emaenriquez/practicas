

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


type ModeloAutos = `${string} ${string}`

type AutosMoviles = {
    modelo: ModeloAutos,
    readonly marca: string,
    id?: number
}

function createAutos2(autos:AutosMoviles): AutosMoviles {
    let {modelo,marca} = autos
    return {
        modelo,
        marca,
        id:1
    }
}

let tessla: AutosMoviles = {modelo:'f-14 2003',marca:'tessla'}


let valoresPosibles: string | number;


valoresPosibles = 'hola mundo'

if(valoresPosibles === 'string'){
    console.log(' valoresPosibles es un tipo string');
} else {
    console.log('valoresPosibles es un tipo number')
}


// intersecion types

type PersonajePrincipal = {
    name: string,
    edad: number,
    poder: number,
    powerUp: string
}

type PersonajeSecundario = {
    name:string,
    edad: number,
    poder: number
}

type Pareja = PersonajePrincipal & PersonajeSecundario

// type indexing
type Planetas = {
    nombre: string,
    distancia: {
        distanciakm: number,
    }
}

const distanciaPlaneta: Planetas['distancia'] = {
    distanciakm: 100000,
}

// type from value

// Objeto original
const planetas = {
    planeta: 'tierra',
    pais: 'Argentina'
}

// Crear un tipo llamado Address con la estructura de planetas
type Address = typeof planetas;

// Ahora Address es equivalente a:
// type Address = {
//     planeta: string;
//     pais: string;
// }

// Puedes usar el tipo Address para declarar variables
const miDireccion: Address = {
    planeta: 'tierra',
    pais: 'Argentina'
}

// También podrías usar el tipo para inferir automáticamente el tipo de otras variables
const otraDireccion = {
    planeta: 'marte',
    pais: 'Otrolandia'
} as Address;

// En este caso, TypeScript inferirá que otraDireccion tiene el tipo Address


// Definir la función creadorPlanetas
function creadorPlanetas() {
    return {
        planeta: 'tierra',
        pais: 'argentina'
    };
}

// Utilizar ReturnType para crear el tipo address2
type address2 = ReturnType<typeof creadorPlanetas>;

// Ahora address2 es equivalente a:
// type address2 = {
//     planeta: string;
//     pais: string;
// }

// Puedes usar el tipo address2 para declarar variables
const miDireccion1: address2 = {
    planeta: 'tierra',
    pais: 'argentina'
};

// También podrías usar el tipo para inferir automáticamente el tipo de otras variables
const otraDireccion2 = creadorPlanetas();


const idiomas: string[] = []

const puntaje: number[] = []

const key_and_value:(string | number)[] = []