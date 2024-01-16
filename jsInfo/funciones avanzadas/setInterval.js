



function mifuncion(){
    console.log('hola como estas');
}

setTimeout(mifuncion,2000)

setTimeout(function() {
    console.log('segunda forma de hacerlo');
},2000)

function intervalo(){
    console.log('cada 1000 milisegundos')
}

setInterval(intervalo,1000)