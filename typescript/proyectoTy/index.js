"use strict";
console.log('hola mundo desde typescript');
// tsc index.ts -w
// tsc -init 
// tsc -w
console.log('golas');
const str = 'hola mundo';
const numero = 20;
const indefinido = undefined;
const nulo = null;
const numeros = [10, 203, 30, 405, 34];
const cadenas = ['hola', 'mundo'];
const valores = [true, false];
var diaSemana;
(function (diaSemana) {
    diaSemana[diaSemana["lunes"] = 0] = "lunes";
    diaSemana[diaSemana["martes"] = 1] = "martes";
    diaSemana[diaSemana["miercoles"] = 2] = "miercoles";
    diaSemana[diaSemana["jueves"] = 3] = "jueves";
    diaSemana[diaSemana["viernes"] = 4] = "viernes";
    diaSemana[diaSemana["sabado"] = 5] = "sabado";
    diaSemana[diaSemana["domingo"] = 6] = "domingo";
})(diaSemana || (diaSemana = {}));
var colores;
(function (colores) {
    colores["rojo"] = "rojo";
    colores["verde"] = "verde";
    colores["amarillo"] = "amarillo";
})(colores || (colores = {}));
function saludar(nombre, edad) {
    return `hola soy ${nombre} y tengo ${edad}`;
}
saludar('emanuel', '20');
let diferentes = true;
let numeros1 = [1, 2, 3, 4, 5, 6, 7];
let cadenas1 = ['hola', 'mundo'];
console.log(numeros1.slice(0, 4));
cadenas1.indexOf('mundo');
let programador = {
    nombre: 'emanuel',
    edad: 20,
    tecnologias: ['javascript', 'react js', 'svetle'],
    tomaMate: true
};
programador = {
    nombre: 'david',
    edad: 21,
    tecnologias: ['c++'],
    tomaMate: false
};
console.log(programador.tecnologias[0].toUpperCase());
// type para tipar objectos
