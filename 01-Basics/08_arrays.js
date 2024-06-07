const myArr = [1,2,3,4,5]
// console.log(myArr);

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr2)

//array methods

// myArr.push(6) //pushes the values to the array at the last
// myArr.push(7) //pushes the values to the array at the last
// myArr.pop()

myArr.unshift(0) //adds the values to the beginnig of the array.
// myArr.shift()
// console.log(myArr);
// console.log(myArr.includes(9)); //checks weather the element is present in the array. returns bool
// console.log(myArr.indexOf(4)); //returns the index of the elements if present. -1 otherwise

const newArr = myArr.join()
// console.log(newArr);
// console.log(typeof newArr);

// console.log("A ",myArr);

// console.log(myArr.slice(1,3)); //sciles 3 exclusuive and no change to original array
// console.log("B ",myArr);

// console.log(myArr.splice(1,3)); //splices inclusive of 3 and removes the range from the original array (modifies)
// console.log("C ",myArr);

const marvel = ["a", "b", "c"]
const dc = ["x", "y", "z"]
//marvel.push(dc)
// console.log(marvel) //=> [ 'a', 'b', 'c', [ 'x', 'y', 'z' ] ] 

//rather we could use concat()

const heros = marvel.concat(dc); //[ 'a', 'b', 'c', 'x', 'y', 'z' ]
// but here it returns to a new array
// console.log(heros);

// =>  what we did using concat we could have done it using spread operator
// ...
//for ex

const new_heros = [...marvel, ...dc]
console.log(new_heros); //[ 'a', 'b', 'c', 'x', 'y', 'z' ]
//more widely used
//can add more arrays at once whereas in concat only 1 array at a time (ig )


console.log(Array.from("Aditya"));

