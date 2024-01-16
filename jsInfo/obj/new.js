
function user(name){
    this.name = name,
    this.idAdmin = true
}

let u = new user('ema')

console.log(u.name)

let us = new function (){
    this.name = 'ema',
    this.idAdmin = true
}

// Constructor modo test: new.target


function use(){
    console.log(new.target)
}
use()
new user()

function User(name){

    if(!new.target){  // ...Agregaré new por ti
        return new User(name) // ...Agregaré new por ti
    }

    this.name = name
}

let nombre = User('ema')  // redirige llamado a new User

console.log(nombre.name)

// Return desde constructores
// Si return es llamado con un objeto, entonces se devuelve tal objeto en vez de this.
// Si return es llamado con un tipo de dato primitivo, es ignorado.
// En otras palabras, return con un objeto devuelve ese objeto, en todos los demás casos se devuelve this.


function BigUser(){
    this.name = 'john'
    return {
        name: "godzilla"
    }
}

console.log(new BigUser().name)

function small(){
    this.name = 'john'
    return
}

console.log( new small().name)

// Métodos en constructor

function usuario(name){
    this.name = name

    this.hi = function(){
        console.log('mi nombre es: ' + this.name)
    }
}

let nombr = new usuario('ema')

nombr.hi()



