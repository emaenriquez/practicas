

class Node {
    constructor(data){
        this.data = data;
        this.next = null
    }
}

class linedList {
    constructor(){
        this.head = null
    }

    apeend(data){

        const newNote = new Node(data);

        if(!this.data){
            this.head = newNote;
            return
        }

        let current = this.head;

        while(current.next){
            current = current.next;
        }

        current.next = newNote;

    }


    print(){
        let current = this.head;
        while(current){
            console.log(current.data)
            current = current.next
        }
    }

}


const linkedList = new linedList();

linkedList.apeend(1);
linkedList.apeend(2);
linkedList.apeend(3);

linkedList.print();