//string interpolation

const name = 'Aditya'
const count = 4 
// console.log('Hello my name is '+ name + ' and my count is '+count); // bad way of writing as reduces the code readablity.
// console.log(`Hello my name is ${name} and my count is ${count}`); // string interpolation -> injecting value into the string
//this is the better way of writing

const gameName = new String('Aditya-Raj') // this will create an object 
// console.log(gameName); // we get alot of functions for strings and we can access the key value pairs of the strings
// console.log(gameName[0]);
// console.log(gameName[1]);
//and we can access all of the methods as normal
console.log(gameName.__proto__); //give the object


//-- the best way to get to know about something is goto console of the webpage -- 

// console.log(gameName.length);
// console.log(gameName.toUpperCase()); //does not change the original string
// console.log(gameName);

const newString = gameName.substring(0,4) //just postive index  -->  (0,4)=>exclusive of 4
// console.log(newString)

const anotherString = gameName.slice(-3,4) // can give negetive indexing as well
// console.log(anotherString);


const newStringOne = '   Aditya    '
// console.log(newStringOne);
// console.log(newStringOne.trim()); //trims the extra space in the beggining


const url = "https://aditya.com/aditya raj"
url.replace(" ",'-') //does not modify the original string
// console.log(url); 
// console.log(url.replace(" ",'-'));

// console.log(url.includes("aditya")); //checks weather a subtring is icnluded in the string
// console.log(url.includes("rajeev"));

// console.log(gameName.split('-')) //splits the string into array based on a pattern or a substring


