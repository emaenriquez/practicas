// let range = {
//     from: 1,
//     to: 5,
  
//     [Symbol.iterator]() {
//       this.current = this.from;
//       return this;
//     },
  
//     next() {
//       if (this.current <= this.to) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
  
// for (let num of range) {
//     console.log(num); // 1, luego 2, 3, 4, 5
// }


let str = 'ema';
for (let char of str) {
    console.log( char ); // 𝒳, y luego 😂
}

// Llamar a un iterador explícitamente

let iterador= str[Symbol.iterator]();

while(true){
    let result = iterador.next()
    if(result.done) break;
    console.log(result.value)
}

// Iterables y simil-array (array-like)
// Los dos son términos oficiales que se parecen, pero son muy diferentes. Asegúrese de comprenderlos bien para evitar confusiones.
// Iterables son objetos que implementan el método Symbol.iterator, como se describió anteriormente.
// simil-array son objetos que tienen índices y longitud o length, por lo que se “ven” como arrays.

let arrLike = {
    // tiene índices y longitud => array-like
    0: "ema",
    1: "matias",
    length: 2
}

// Error (sin Symbol.iterator)
// for (const arr of arrLike) {
//     console.log(arr)
// }


// Array.from
// Existe un método universal Array.from que toma un valor iterable o simil-array y crea un Array ¨real¨ a partir de él. De esta manera podemos llamar y usar métodos que pertenecen a una matriz.

let arr = Array.from(arrLike)

console.log(arr)


let rage = {
    0:0,
    1:1,
    2:2
}

let arrRange = Array.from(rage, num => num * num)


let str2 = 'ema'

let string = Array.from(str2)

console.log(string[0])
console.log(string[1])
console.log(string[2])


let chars = []
for (const char of str) {
    chars.push(char)
}
console.log(chars)