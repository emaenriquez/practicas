
// WeakMap
// La primera diferencia con Map es que en WeakMap las claves deben ser objetos, no valores primitivos:

let weakMap = new WeakMap()

let obj = {}

weakMap.set(obj,'key')

// no puede usar un string como clave
// weakMap.set("test", "Whoops"); // Error, porque "test" no es un objeto

// definimos varios objetos
let obj1 = {name: 'John'};
let obj2 = {name: 'Peter'};
let obj3 = {name: 'Thomas'};
 
// definimos un WeakMap
const weakMap1 = new WeakMap();
 
// añadimos los objetos al WeakMap
weakMap1.set(obj1, 3);
weakMap1.set(obj2, 'string');
weakMap1.set(obj3, 5.5);
 
// obtenemos elemento a partir de obj1
console.log(weakMap1.get(obj1)); // 3
 
// podemos eliminar un elemento
weakMap1.delete(obj3);
console.log(weakMap1.has(obj3)); // false
 
// asignamos null a obj1 y veremos que ya no estará en nuestro WeakMap
// en cambio, obj2 sí que continuará estando
obj1 = null;
console.log(weakMap1.has(obj1)); // false
console.log(weakMap1.has(obj2)); // true
 
// errores, no se pueden utilizar estos métodos ni la propiedad size
// console.log(weakMap.entries());
// console.log(weakMap.keys());
// console.log(weakMap.values());
// weakMap.clear();
// console.log(weakMap.size); // undefined

// definimos varios objetos
let obj4 = {name: 'John'};
let obj5 = {name: 'Peter'};
let obj6 = {name: 'Thomas'};
 
// definimos un WeakSet
const weakSet = new WeakSet();
 
// añadimos los objetos al WeakSet
weakSet.add(obj4).add(obj5).add(obj6);
 
// podemos eliminar un elemento
weakSet.delete(obj4);
console.log(weakSet.has(obj4)); // false
 
// asignamos null a obj1 y veremos que ya no estará en nuestro WeakSet
// en cambio, obj2 sí que continuará estando
obj1 = null;
console.log(weakSet.has(obj4)); // false
console.log(weakSet.has(obj5)); // true
 
// errores, no se pueden utilizar estos métodos ni la propiedad size
// console.log(weakSet.entries());
// console.log(weakSet.keys());
// console.log(weakSet.values());
// weakSet.clear();
// console.log(weakSet.size); // undefined