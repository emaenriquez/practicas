
// alert("Hello");
// es lo mismo que
// window.alert("Hello");

let n = 5

window.n  // undefined (no se convierte en una propiedad del objeto global)


window.currentUser = {
    name: 'ema'
}

console.log(currentUser.name)

console.log(window.currentUser.name)