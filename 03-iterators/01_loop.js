// for(let i = 0; i < 10; i++){
//     const element = i;
//     console.log(element);
// }


// while and do while loops does the same work as in cpp or other languages

// some array specific loops

// 1) for of loop
/*
for (const iterator of object) {
    
}
*/

// const arr = [10,20,30,40]
// for (const i of arr) {
//     console.log(i);
// }

// const greet = "Hello World"
// for (const gr of greet) {
//     console.log(gr);
// }

//MAPS => another Data type => key-value pair, unique elements, retains the order of the element

const map = new Map();
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')

// console.log(map);
// for (const it of map) {
//     console.log(it);
// }

// for (const [key,value] of map) {
//     console.log(`${key} :- ${value}`);
// }
// for of loop cannot iterate an object

// for in loop can iterate an object

const myObj = {
    js : 'JavaScript',
    cpp : 'C++',
    rb : 'Ruby',
    swift : 'swift by Apple'
}

// for(const it in myObj){
//     console.log(it); // this will print the key of the object
// }

//whereas to print the value of a key we can use ****myObj[key]****

for(const it in myObj){
    // console.log(`${it} :-  ${myObj[it]}`);
}


// for each loop

const coding = ['js', 'cpp', 'java', 'python']

//syntax for forEach loop

coding.forEach( function (it) {
    // console.log(it); 
})


coding.forEach( (it) => { //this is forEach loop using Arrow function
    // console.log(it); 
})

function printMe(item){
    // console.log(item);
}

coding.forEach(printMe);

// forEach loop in array of objects

const myArr = [
    {
        lang: "C++",
        file: "cpp"
    },
    {
        lang: "Java",
        file: "java"
    },
    {
        lang: "Python",
        file: "py"
    }
]

myArr.forEach( (item) => {
    // console.log(`${item.lang} :- ${item.file}`); 
})