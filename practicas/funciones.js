


// declaracion de funciones

function hello(){
    console.log('hola mundo capo')
}

hello()

// Expresiones de función:

let saludo = function() {
    console.log("hola como va")
}

saludo()

// arrow function

const saludoRow = () => {
    console.log('saludo row')
}
saludoRow()

//  Parámetros y argumentos:

function sumar(num1,num2){
    return num1 + num2
}

let respuesta = sumar(10,20)

console.log(respuesta)

// Closures

function contador(){
    let contador = 0;

    function incremetar(){
        contador++;
        console.log(contador);
    }

    return incremetar;

}

let miContador = contador();

miContador()
miContador()