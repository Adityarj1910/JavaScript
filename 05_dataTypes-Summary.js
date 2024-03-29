/*
primitive  => 7 types: (stack memory)
    String, Number, Boolean, null, undefined, Symbol, BigInt

Reference type => non primitive: (heap memorry)
    whose reference can be directly allocted to you
    Array, Objects, Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id)
// console.log(anotherId);
// console.log(id===anotherId) 

const heros = ["shaktiman", "nagraj", "doga"] // array

let obj = {
    name: "aditya",
    age : 21
}

const myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction) //function but is object function
console.log(typeof id)
