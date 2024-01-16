

function miDecorador(func){
    return function(){
        console.log('antesde de llamar a la funcion')
        func()
        console.log('despues de llamar a la funcion')
    }
    
}

function miFuncion() {
    console.log("¡Hola, soy la función original!");
}

let funcionDecorada = miDecorador(miFuncion)

funcionDecorada()


function saludar(nombre) {
    console.log(`Hola, ${nombre}! Mi nombre es ${this.nombre}`)
}

let persona = {nombre:'emanuel'}

// saludar.call(persona,'maria')
// saludar.apply(persona,['maria'])

// call y apply está en la forma en que se pasan los argumentos a la función. call toma argumentos separados, mientras que apply toma un array de argumentos