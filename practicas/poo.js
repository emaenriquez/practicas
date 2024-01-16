

/* 
opp
la pogramacion orientada a obj en un paradigma de la programacion que se enfoca en los obj en lugar de funciones
es un forma de pensar 
propiedades
son la que describen a un obj
*/


console.log( {} ) // objecto literal

// clase
class Persona {

    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }

    saludar(){
        console.log(`mi nombre es: ${this.nombre}`)
    }

    get fullName(){
        return `${this.nombre} ${this.apellido}`
    }

    set fullName(value){
        [this.nombre,this.apellido] = value.split(' ')
    }

}

let persona = new Persona('david',20)
persona.fullName = 'emanue 30'

persona.saludar()

// herencia

class Estudiante extends Persona{
    
    constructor(nombre,apellido,curso){
        super(nombre,apellido);
        this.curso = curso;
    }

    estudiar(){
        console.log(`mi nombre es: ${this.nombre} y curso ${this.curso}`);
    }

}

let estudiante = new Estudiante('ema',20,'paradigmas de la programacion');

estudiante.estudiar();



// Los métodos estáticos en JavaScript son métodos que están asociados con la clase en lugar de con las instancias de la clase. Pueden ser llamados directamente en la clase sin necesidad de crear una instancia de la misma. En el contexto de la programación orientada a objetos (OOP), los métodos estáticos son útiles para definir comportamientos que no dependen de instancias específicas de la clase.

class Calculadora {
    // Método estático para sumar dos números
    static sumar(a, b) {
        return a + b;
    }

    // Método estático para restar dos números
    static restar(a, b) {
        return a - b;
    }
}


const resultadoSuma = Calculadora.sumar(10,20)
const resultadoRestar = Calculadora.sumar(10,20)

console.log(resultadoSuma)
console.log(resultadoRestar)


// el operador instanceof se utiliza para comprobar si un objeto es una instancia de una clase específica o de una clase que hereda de esa clase

class Animal {
    constructor(nombre,dueno){
        this.nombre = nombre;
        this.dueno = dueno;
    }
}

class Perro extends Animal {
    constructor(nombre,dueno,raza){
        super(nombre,dueno)
        this.raza = raza
    }
}

const animal1 = new Animal('ternera','ema')

const perro1 = new Perro('toni','mama','mestizo')


console.log(animal1 instanceof Animal)
console.log(perro1 instanceof Animal)


// un mixin es una forma de compartir comportamientos y propiedades entre clases sin necesidad de utilizar la herencia tradicional

const mixin = {
    hablar(){
        console.log(this.texto || 'hablando...');
    }
};

class Animal2 {
    constructor(nombre){
        this.nombre = nombre;
    }
}

Object.assign(Animal2.prototype,mixin);

// Crear instancias de la clase con mixin
const perro = new Animal("Buddy");
perro.hablar();  // Output: Hablando...

const gato = new Animal("Whiskers");
gato.texto = "¡Miau!";
gato.hablar();  // Output: ¡Miau!
