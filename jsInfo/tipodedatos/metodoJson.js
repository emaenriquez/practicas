

const json = '{"name":"John", "age":30}';

let obj = JSON.parse(json)
console.log(obj)
// let obj = JSON.parse(json, (key, value) => {
//   if (key === 'birth') return new Date(value);
//   return value;
// });

// console.log(obj.birth);

console.log(obj)

const obj2 = {name: 'John', age: 30};

let str = JSON.stringify(obj2)

console.log(str)

// En resumen, ambos métodos aceptan parámetros adicionales para más control y manejo de casos complejos.