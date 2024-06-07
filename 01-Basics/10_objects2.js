// const User = new Object() //singleton object

const user = {} //non singleton object
user.name = "Aditya"
user.age = 21;
user.id = "123Abc"
// console.log(user);

// we can nest multiple object ==> nesting of objects

const regUser= { 
    email : "abc@xyz.com",
    fullname : {
        userName: {
            firstName : "Aditya",
            lastname : "Raj"
        }
    }
}

// console.log(regUser.fullname.userName.firstName); // can be accessed by dot operator
const ob1 = {1: "a" , 2:"b"}
const ob2 = {3: "c" , 4:"d"}
//combining 2 or more objects 
const ob3 = Object.assign({}, ob1, ob2) 
console.log(ob3);

// can also be done using spread operator => spreads each elements in an objects and combines together
const obj4 = {...ob1, ...ob2}
console.log(obj4);
 
//
// 
// 
// 
// 
// 


// study about Object destructuring and JSON API 


