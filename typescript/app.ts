// const persona = {
//     nombre: 'emanuel',
//     edad: 20,
// }

// let texto = 'hola mundo';
// texto = 2

// texto.concat('hla')

// console.log(texto)

// ignora el typado en javascript
// let str:any = 'hola mundo'
// que nosabes cuales es el tipo 
// let str2:unknown = 'hola mundo'

// inferencia 
// comoa a y b infiere que son numeros sin decir nada

// let a = 10;
// let b = 20;
// let c = a + b;

// c tambien sera number

// // funcion

// function saludar(nombre:string) {
//     console.log(`hola ${nombre}`);
// }

// saludar('emanuel')

// function saludar2({name,age} : {name: string, age: number}){
//     console.log(`hola ${name} y tienes ${age}`)
// }

// function saludar2(persona: {name:string,age:number}){
//     let {name,age} = persona;
//     console.log(`hola ${name} y tienes ${age}`)
// }


// function saludar2({name,age} : {name: string, age: number}): number{
//     console.log(`hola ${name} y tienes ${age}`)
//     return age
// }


// saludar2({name:'emanuel',age:20});


// const saludarRow = (fn: (name:string) => void) =>{
//     return fn('miguel');
// }

// saludarRow((name:string)=>{
//     console.log(`buenas tardes ${name}`)
// })

// // tipar arrow function
// const sumar = ( a:number , b:number ) : number => {
//     return a + b
// }

// const restar: (a:number,b:number) => number = (a,b)=>{
//     return a - b;
// }

// never nunca va a devolver un valor 
// void indica que la funcion puede devolver un valor pero no importa realmente 


// function msk ( nombre : string ): void {
//     console.log(nombre);
// }

// inferencia en funciones anonimas dependiendo el contexto

// let arr = ['hulk','loki','thor','black widow'];

// arr.forEach(element => {
//     console.log(element.toLocaleLowerCase())
// });

// objectos


// let hero = {
//     name: 'thor',
//     edad: 1500
// }

// function createHero(nombre:string,edad:number){
//     return {nombre,edad}
// }

// let loki = createHero('loki',2000);

// type alias 

// type Hero = {
//     name: string,
//     edad: number
// }

// let hero: Hero = {
//     name: 'thor',
//     edad: 1500
// }

// function createHero(hero:Hero): Hero{
//     let {name,edad} = hero
//     return {name,edad}
// }

// let loki = createHero({name:'loki',edad:2000});

// templade union type
// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// type Hero = {
//     // optonial properties
//     // readonly id?: number,
//     // readonly id?: string,
//     // id?: HeroId,
//     readonlyid?: HeroId,
//     name: string,
//     edad: number,
//     isActividi?: boolean
// }

// let hero: Hero = {
//     name: 'thor',
//     edad: 1500
// }

// function createHero(hero:Hero): Hero{
//     let {name,edad} = hero
//     return {
//         id:crypto.randomUUID(),
//         name,
//         edad,
//         isActividi:true}
// }

// let loki = Object.freeze(createHero({name:'loki',edad:2000}));

// // console.log(loki) // ---> true

// loki.id?.toString()

// type HexaDemimal = `#${string}`

// let color: HexaDemimal = '#000';
// let color_black:HexaDemimal = '000' da error

// type HeroId = `${string}-${string}-${string}-${string}-${string}`

// union types
// type HeroPower = 'local'|'planetario'|'galactico'|'universal'|'multiversal'

// let numero: string | number;
// let variable: boolean | number = 200
// numero = 10;

// intersecion types
// type HeroBasicInfo = {
//     name: string,
//     edad: number
// }

// type HeroProperties = {
//     // optonial properties
//     // readonly id?: number,
//     // readonly id?: string,
//     // id?: HeroId,
//     id?: HeroId,
//     // name: string,
//     // edad: number,
//     isActividi?: boolean,
//     porweScale?: HeroPower
// }

// type Hero = HeroBasicInfo & HeroProperties

// let hero: Hero = {
//     name: 'thor',
//     edad: 1500
// }

// function createHero(input:HeroBasicInfo): Hero{
//     let {name,edad} = input
//     return {
//         id:crypto.randomUUID(),
//         name,
//         edad,
//         isActividi:true
//     }
// }

// let loki = createHero({name:'loki',edad:2000});

// loki.porweScale = "galactico"

// type indexing
// type HeroProperties = {
//     isActiviti?: boolean,
//     address: {
//         planet: string,
//         city: string
//     }
// }

// const addresHero: HeroProperties['address'] = {
//     planet: 'tierra',
//     city: 'mendoza'
// }

// type from value
// const addres = {
//     planet:'tierra',
//     city: 'mendoza'
// }

// lo que podemos hacer con typeof es poder estraer los tipos de un obj
// type Address = typeof addres

// const addressTwich: Address = {
//     planet:'tiera',
//     city:'mendoza'
// } 

// type from function return

function createAddress(){
    return {
        planet: 'tierra',
        city: 'mendoza'
    }
}

type address = ReturnType<typeof createAddress>



// array


// const lenguajes = [] // queremos que siempre este vacio
const lenguajes: string[] = [] // queremos que siempre este vacio
const lenguajes2:Array<string> = [] // queremos que siempre este vacio
const lenguajes3:(string | number)[] = []

// lenguajes.push('java') da error

lenguajes2.push('java')
lenguajes2.push('c')
lenguajes2.push('c++')
lenguajes2.push('c#')


lenguajes3.push('python')
lenguajes3.push('javascript')
lenguajes3.push('ruby')
lenguajes3.push(1)
lenguajes3.push(2)
lenguajes3.push(3)



// intersecion types
type HeroBasicInfo = {
    name: string,
    edad: number
}


const heros:HeroBasicInfo[] = []

// matrix y tuplas


type cellValue = 'x'|'o'|''

// tupla limite fijado de longitud
type gameBoard = [
    [cellValue,cellValue,cellValue],
    [cellValue,cellValue,cellValue],
    [cellValue,cellValue,cellValue]
]

const gameBoard: gameBoard = [
    ['x','o','o'],
    ['o','x','o'],
    ['o','o','x']
]

gameBoard[0][1] = 'x'

<<<<<<< HEAD
type RBG = [number,number,number] 

const rbg: RBG = [255,255,255]
=======
type RBG = [number,number,number] 
>>>>>>> 6092b74091be2d22ab7431947e56711f84d4dd7f
