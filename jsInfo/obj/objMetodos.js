


// Métodos del objeto, "this"
// Pero tal código no es confiable. Si decidimos copiar user a otra variable, por ejemplo admin = user y sobrescribir user con otra cosa, entonces accederá al objeto incorrecto.

let user = {
    name: "ema",
    age: 30,

    sayHi(){
        console.log("Hola" + this.name)
    }
}

user.sayHi()

// “this” no es vinculado

let user1 = {name: "ema"};
let admin = {name: "mati"};

function sanHi(){
    console.log(this.name);
}

user1.f = sanHi;
admin.f = sanHi;
user1.f();
admin.f();


let user3 = {
    firsname: 'ema',
    sayHi(){
        let arrow = () => console.log(this.firsname)
        arrow()
    }
}
user3.sayHi()

// tareas

function makeUser(){
    return {
        name: 'ema',
        ref: this
    }
}

let us = makeUser()

// console.log(us.ref.name)

// tareas
let calculator = {
    num1: 0,
    num2: 0,
    read: function () {
        // this.num1 = parseFloat(prompt('ingrese numero uno'))
        // this.num2 = parseFloat(prompt('ingrse numero 2'))
    },
    sum: function(){
        return this.num1 + this.num2
    },
    mul: function(){
        return this.num1 * this.num2
    }
};

// calculator.read();
// console.log(calculator.sum());
// console.log(calculator.mul());

let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
  };
  
  ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0