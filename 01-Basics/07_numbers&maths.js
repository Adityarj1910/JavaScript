// ++++++++ NUMBERS ++++++ //

const score = 400
// console.log(score) // js detects the type of the variable should be a number

// but we can explicitly define a var as number or of any particular type

const balance = new Number(400) //this willn create an object of type number
// console.log(balance)

const str = balance.toString(); //typecased to string
// console.log(typeof(str)) // we can have all the prop and functions of string

// console.log(balance.toFixed(2))


const hundreds = 10000000
// console.log(hundreds.toLocaleString());


// ++++++++++ MATHS ++++++++++ //

// console.log(Math.abs(-4))
// console.log(Math.round(4.6))
 
// console.log((Math.random()*10)+1)
// console.log((Math.random()*10)+1) 

const max = 20
const min = 10

console.log(Math.floor(Math.random()*(max-min+1))+min)
