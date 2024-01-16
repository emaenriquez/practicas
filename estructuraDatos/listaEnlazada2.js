

// Paso 1: Definición de la Estructura del Nodo
class Node {
    constructor(dato){
        this.dato = dato;
        this.siguiente = null;
    }
}


// Paso 2: Creación de la Lista
let cabeza = new Node(1);

// Paso 3: Inserción de Elementos
function insertarElementos (valor) {
    let nuevoNodo = new Node(valor);

    if(!cabeza){
        cabeza = nuevoNodo;
        return;
    }

    let ultimoNodo = cabeza;

    while(ultimoNodo.siguiente){
        ultimoNodo = ultimoNodo.siguiente;
    }

    ultimoNodo.siguiente = nuevoNodo;

}


// Paso 4: Recorrido de la Lista
function recorrerNodo() {
    let nodoActual = cabeza
    while(nodoActual){
        console.log(nodoActual.dato);
        nodoActual = nodoActual.siguiente;
    }
}

// Paso 5: buscar elemento

function busqueda(valor){
    let nodoActual = cabeza;

    while(nodoActual){
        if(nodoActual.dato === valor){
            return true;
        }
        nodoActual = nodoActual.siguiente;
    }

    return false

}
// Paso 6: Eliminación de Elementos
function eliminarElemento(valor){
    let nodoActual = cabeza;
    let nodoAnterior = null;

    while(nodoActual){
        if(nodoActual.dato === valor){
            nodoAnterior.siguiente = nodoActual.siguiente
        } else {
            cabeza = nodoActual.siguiente
        }

        return true;
    }

    nodoAnterior = nodoActual;
    nodoActual = nodoActual.siguiente;

}


insertarElementos(2);
insertarElementos(3);
insertarElementos(4);
insertarElementos(5);

recorrerNodo()

let elementoBuscar = busqueda(3)

console.log(elementoBuscar)

eliminarElemento(5)

recorrerNodo()