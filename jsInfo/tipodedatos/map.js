// Map es, al igual que Objet, una colección de datos identificados por claves. La principal diferencia es que Map permite claves de cualquier tipo.

// new Map() – crea el mapa.
// map.set(clave, valor)) – almacena el valor asociado a la clave.
// map.get(clave) – devuelve el valor de la clave. Será undefined si la clave no existe en map.
// map.has(clave) – devuelve true si la clave existe en map, false si no existe.
// map.delete(clave) – elimina el elemento con esa clave.
// map.clear() – elimina todo de map.
// map.size – tamaño, devuelve la cantidad actual de elementos.

let map = new Map()

map.set(1,'ema')
map.set("1","str")
map.set(true,'bool')

console.log(map.get(1))
console.log(map.get('1'))
console.log(map.get(true))


console.log(map.size)

let nombre = { name: 'ema' }

let visit = new Map()

visit.set(nombre,123)

console.log(visit.get(nombre))

// iterar map
// map.keys() –- devuelve un iterable con las claves.
// map.values() -– devuelve un iterable con los valores.
// map.entries() -– devuelve un iterable para las entradas [clave, valor]. Es el que usa por defecto en for..of.

let recipeMap = new Map([
    ['pepino',500],
    ['tomate',360],
    ['cebolla',200],
])

recipeMap.forEach((value,key) => {
    console.log(`${key}: ${value}`)
});

for (const key of recipeMap.keys()) {
    console.log(key)
}

for (const value of recipeMap.values()) {
    console.log(value)
}

for (const entry of recipeMap) {
    console.log(entry)
}


let obj = {
    name: "John",
    age: 30
  };
  
let map1 = new Map(Object.entries(obj));

console.log(map1)


// Object.fromEntries: Objeto desde Map
// Acabamos de ver cómo crear un Map a partir de un objeto simple con Object.entries (obj)

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);
  
  // ahora prices = { banana: 1, orange: 2, meat: 4 }
  
console.log(prices);



let map2 = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

let obj1 = Object.fromEntries(map.entries())

console.log(obj1)


// set

let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

// visitas, algunos usuarios lo hacen varias veces
set.add(john);
set.add(pete);
set.add(mary);
set.add(john);
set.add(mary);

// set solo guarda valores únicos
console.log( set.size ); // 3

for (let user of set) {
  console.log(user.name); // John (luego Pete y Mary)
}

let set2 = new Set(["oranges", "apples", "bananas"]);

for (let value of set) alert(value);

// lo mismo que forEach:
set2.forEach((value, valueAgain, set) => {
  alert(value);
});