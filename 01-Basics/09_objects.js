//singleton => later
//Object.create => an object can be created by this method as well
//but we'll study this later

//object literals => now

const mySym = Symbol("key1") //later needed to init in/for object
const JsUser = { //this exist in a key value pair unlike an array
    name: "Aditya", //by default name or any other key is stored as a string
    location: "Patna",
    "course" : "BTech",
    [mySym] : "MyKey1",
    age: 21,
    lastLoginDay: ["Monday", "Saturday"]
} // this is an object

//accessing elements of an object => 2 ways => dot operator and [] operator

//for example:
// console.log(JsUser.name);
// console.log(JsUser["name"]);
//in the above scenario both dot operator and [] can access the data
//but as stated earlier the key is stored as a string 
//hence when a key is inputed as "key" dot operator can never access the element
// console.log(JsUser["course"]);
// console.log(JsUser."course");  => this will produce an error
// console.log(JsUser.course);

// console.log(JsUser[mySym]);

//==

//updating values of a object/ data member
JsUser.age = 22
// console.log(JsUser)ṇ

/*now if we want to freeze (not let anyone change or update data member),
we can freze the object */
// Object.freeze(JsUser)
// any update will not happen hereafter but also no changes will take place


JsUser.greet = function(){
    console.log("Hello JS User"); //defining function in a an object
}

JsUser.greet2 = function(){
    console.log(`Hello JS User ${this.name}`);
}

console.log(JsUser.greet())
console.log(JsUser.greet2())