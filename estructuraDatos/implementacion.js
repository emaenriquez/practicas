

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor(head = null){
        this.head = head;
    }

    size(){
        let contador = 0
        let node = this.head

        while(node){
            contador++;
            node = node.next
        }
        return contador
    }

    clear(){
        this.head = null
    }

    getLast(){
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }

    getFirst(){
        return this.head 
    }

}

let nodeElemento1 = new Node(1)
let nodeElemento2 = new Node(2)

nodeElemento1.next = nodeElemento2

let list = new linkedList(nodeElemento1)

console.log(list.head.next.data)


// size()
// clear()
// getLast()
// getFirst()

// Value: Dato que contendrá el nodo, string, number, boolean, etc.
// Head: Referencia al primer nodo de la lista.
// Tail: Referencia al último nodo de la lista.
// Next: Referencia de un nodo al siguiente nodo.
// Prev: Referencia de un nodo al nodo anterior de la lista.