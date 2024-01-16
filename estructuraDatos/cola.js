

class Cola{

    constructor(){
        this.items = []
    }
    
    // Agregar elemento al final de la cola
    encolar(elemento){
        this.items.push(elemento);
    }
    // Quitar elemento del frente de la cola
    desencolar(){
        if(this.isEmpty()){
            console.log('la cola esta vacia');
        }
        return this.items.shift();
    }
    // Obtener el frente de la cola sin quitarlo

    frente(){
        if(this.isEmpty()){
            console.log('la cola esta vacia');
        }
        return this.items[0];
    }

    // Verificar si la cola está vacía
    isEmpty(){
        return this.items.length === 0;
    }

    // Obtener el tamaño de la cola
    tamano(){
        return this.items.length;
    }

    limpiar() {
        this.items = [];
    }

    mostrarElementos(){
        console.log('mostrando elementos');
        this.items.forEach((item)=>{
            console.log(item);
        })
    }

}


const cola = new Cola();

cola.encolar(1)
cola.encolar(2)
cola.encolar(3)
cola.encolar(4)
cola.encolar(5)

let colaSize = cola.tamano();
let frenteCola = cola.frente();

console.log(colaSize)
console.log(frenteCola)

cola.mostrarElementos()


/*

arr = []
push
shift
arr[0] frente cola

arr.length

console.log('mostrando elementos');
arr.forEach((item)=>{
    console.log(item);
})


*/ 