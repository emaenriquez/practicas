

const factoria = (n) =>{
    if(n === 0){
        return 1;
    }
    return n * factoria(n - 1)
}

let resultado = factoria(5)

console.log(resultado)

let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
}

let list1 = { value: 1 };
list1.next = { value: 2 };
list1.next.next = { value: 3 };
list1.next.next.next = { value: 4 };
list1.next.next.next.next = null;