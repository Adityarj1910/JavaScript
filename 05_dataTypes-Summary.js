/*
primitive  => 7 types:
    String, Number, Boolean, null, undefined, Symbol, BigInt

Reference type => non primitive:
    whose reference can be directly allocted to you
    Array, Objects, Functions
*/

const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id)
// console.log(anotherId);
console.log(id===anotherId)