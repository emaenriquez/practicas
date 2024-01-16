


class Nodo {

    constructor(valor){
        this.valor = valor;
        this.siguiente = null;
        this.anterior = null;
    }

}


class listaDobleMenteEnlazada{
    constructor(){
        this.cabeza = null;
        this.cola = null;
    }

    
    agregarFinal(valor){
        const nuevoNodo = new Nodo(valor)

        if (!this.cabeza) {
            this.cabeza = nuevoNodo;
            this.cola = nuevoNodo
        } else{
            nuevoNodo.anterior = this.cola;
            this.cola.siguiente = nuevoNodo;
            this.cola = nuevoNodo;
        }

    }

    imprimirLista(){
        let actual = this.cabeza;

        while(actual){
            console.log(actual.valor);
            actual = actual.siguiente;
        }
    }
    
    imprimirListaReversa() {
        let actual = this.cola;
        while (actual) {
          console.log(actual.valor);
          actual = actual.anterior;
        }
    }

    multiplarValores(){
        let cabeza = this.cabeza;
        let resultado;
        while(cabeza){
            resultado = cabeza.valor * 2
            console.log(resultado)
            cabeza = cabeza.siguiente;
        }
    }
}


const lista = new listaDobleMenteEnlazada();

lista.agregarFinal(1)
lista.agregarFinal(1)
lista.agregarFinal(1)
lista.agregarFinal(5)
lista.agregarFinal(4)
lista.agregarFinal(3)
lista.agregarFinal(1)

console.log('lista normal')
lista.imprimirLista()

console.log('lista en reversa')

lista.imprimirListaReversa()

console.log('lista doblemente enlazadas multiplicadas por 2');

lista.multiplarValores();

