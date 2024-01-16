

// Parámetros Rest y operador Spread

// Los parámetros rest permiten representar un número indefinido de argumentos como un array.

function sumar(...nums) {
    let total = 0;
    
    for (let n of nums) {
      total += n;
    }
    
    return total; 
}
  
let r = sumar(1, 2, 3, 4, 5);

console.log(r)

// Operador Spread
// El operador spread permite expandir elementos de un array u objeto en lugares donde se esperan múltiples argumentos o elementos.

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arrUnido = [...arr1,...arr2];

function sumar2(a,b,c){
    return a + b + c;
}
let res = sumar2(...arrUnido);

console.log(res)

