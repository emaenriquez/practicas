

let sumar = new Function('a','b','return a + b');

console.log(sumar)


// closures
// Entonces, tal función no tiene acceso a las variables externas, solo a las globales.

function get(){
    let valor = 'test';
    
    let fun = new Function('console.log(valor)')
    
    return fun
}
  
getFunc()(); // error: valor is not defined

function getFunc() {
    let valor = "test";
  
    let func = function() {
        console.log(valor)
    }
  
    return func;
  }

