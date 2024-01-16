
// Encadenamiento opcional

// diremos que algo “existe” si no es null o undefined.
// Tenga en cuenta: la sintaxis ?. hace opcional el valor delante de él, pero no más allá.
let user = {

}

console.log(user?.address?.street)

let html = document.querySelector('.elem')?.innerHTML;

console.log(html)

let u = null
let num = 0

u?.sayHi(num++)

console.log(num)


let userAdmin = {
    admin() {
      console.log("I am admin");
    }
};
  
let userGuest = {};
userAdmin.admin?.(); // I am admin
userGuest.admin?.();

delete user?.name; // Eliminar user.name si el usuario existe

let key = "firstName";

let user1 = {
  firstName: "John"
};

let user2 = null;

alert( user1?.[key] ); // John
alert( user2?.[key] ); // undefined