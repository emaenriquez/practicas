
// let user = new Object; // sintaxis de "constructor de objetos"
let user1 = {
    name: 'ema',
    age: 40,
    "name game": "emaGamer" 
};  // sintaxis de "objeto literal"

user1.isAdmin = true; // agregamos un valor
delete user1.age; // eliminamos
console.log(user1);

let user = {};

user["name game"] = "emaGamer";

// console.log(user["name game"])

delete user["name game"];

let key = "name game";

user[key] = 'emaGamer';
console.log(user["name game"]);

// let key2 =  prompt("¿Qué te gustaría saber acerca del usuario?", "name");
// alert(user1[key2])

// Podemos usar corchetes en un objeto literal al crear un objeto. A esto se le llama propiedades calculadas

/*
let fruit = prompt("¿Qué fruta comprar?", "Manzana");

let bag = {
    [fruit]:5,
}

alert(bag.apple)
*/

// Atajo para valores de propiedad
function makeUser(name,age){
    return {
        name,
        age
    }
};

let user2 = makeUser('john',30);

console.log(user2);
// Limitaciones de nombres de propiedad

let obj = {
    for: 1,
    let: 2,
    return: 4
};

console.log(obj);

// La prueba de propiedad existente, el operador “in”

let usuario = {
    name: "John", 
    age: 30 
};

// console.log(usuario.name === undefined)

console.log("name" in usuario);
console.log("joby" in usuario);

for (const key in usuario) {
    // console.log(key)
    console.log(usuario[key]);
}

// tareas

let usuario2 = {
    name: 'john',
    surname: 'smith'
};

usuario2.name = 'pete';

delete usuario2.name;

// function isEmpty(obj){
//     for (const key in obj) {
//         return false
//     }
//     return true
// }

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
};
let suma = 0
for (const key in salaries) {
    
    suma += salaries[key] 
    // console.log(salaries[key]);
}

console.log(suma)


let menu = {
    width: 200,
    height: 300,
    title: "Mi menú"
};
  
function multiplyNumeric(obj){
    for (const key in obj) {
        if(typeof obj[key] === 'number'){
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu);
console.log(menu)