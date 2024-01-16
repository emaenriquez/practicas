

let func = (function autoejecutable(){
    return 'yo sola me ejecuto '
})


function getUser(){
    let nombre,apellido

    function dologin(user,ape) {
        nombre = user;
        apellido = ape;
    }

    function mostrar(){
        console.log(`${nombre} ${apellido}`)
    }

    let publicapi = {
        login: dologin,
        mostrar1: mostrar
    }

    return publicapi
}

let e = getUser()

e.login('ema','enriquez')
e.mostrar1()


function calculadora(){
    let resultado = 0;


    function sumar(numero) {
        resultado += numero;
    }

    function resta(numero) {
        resultado -= numero;
    }

    function obtenerResultado(params) {
        return resultado;
    }

    let public = {
        sumar: sumar,
        resta: resta,
        obtenerResultado: obtenerResultado,
    }

    return public;


}

// Uso del módulo
console.log("Resultado inicial:", calculadora.obtenerResultado()); // Resultado inicial: 0

calculadora.sumar(5);
console.log("Después de sumar 5:", calculadora.obtenerResultado()); // Después de sumar 5: 5

calculadora.restar(3);
console.log("Después de restar 3:", calculadora.obtenerResultado()); // Después de restar 3: 2



let modulo = (function (){
    let variablePrivada = 'hola mundo'

    function metodoPrivado() {
        console.log("Este es un método privado");
    }

    return {
        metodoPublico: function () {
            console.log('esto es un metodo publico')
        },
        otroMetodo: function () {
            console.log(variablePrivada)
            metodoPrivado()
        }
    }
})