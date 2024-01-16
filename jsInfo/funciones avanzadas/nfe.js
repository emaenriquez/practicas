


function sayHi() {
    console.log("Hi");
}
  
console.log(sayHi.name);

let sayHi2 = function() {
    console.log("Hi");
};
  
console.log(sayHi2.name)


function f1(a) {}
function f2(a, b) {}
function many(a, b, ...more) {}

console.log(f1.length); // 1
console.log(f2.length); // 2
console.log(many.length); // 2


let sayHi3 = function func(who) {
  console.log(`Hello, ${who}`);
};

sayHi3("John");