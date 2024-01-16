

// Definir una función constructora Persona
function Persona(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}
// Agregar un método al prototipo de Persona
// crear una nueva propiedad y la hereda al objecto
Persona.prototype.hablar = function() {
    console.log(`Hola, mi nombre es ${this.nombre}.`)
}
// Crear un objeto Profesor con el prototipo de Persona
const Profesor = new Persona('ema','20')
// Puedes agregar propiedades específicas del Profesor si es necesario
Profesor.materia = 'lengua'
// Acceder a las propiedades y métodos
console.log(Profesor.nombre)
console.log(Profesor.edad)
console.log(Profesor.materia)
Profesor.hablar()

function Animal(nombre) {
    this.nombre = nombre;
}

const perro = new Animal('Buddy');

const prototipoPerro = Object.getPrototypeOf(perro)

console.log(prototipoPerro)


function Gato(nombre) {
    this.nombre = nombre;
}

const gato = new Gato('Whiskers');

const prototipoGato = Object.setPrototypeOf(gato)

console.log(prototipoGato)

// Prototipos:
// Cada objeto en JavaScript tiene un enlace interno a otro objeto llamado "prototipo". Cuando intentas acceder a una propiedad de un objeto que no existe en ese objeto, JavaScript busca esa propiedad en su prototipo, y si no la encuentra, sigue buscando en la cadena de prototipos.

// Constructor y Prototipo:
// En la herencia prototípica, a menudo se utiliza una función constructora junto con su prototipo para crear objetos relacionados. La función constructora se utiliza para inicializar las propiedades específicas de una instancia, y el prototipo se utiliza para compartir propiedades y métodos entre todas las instancias.