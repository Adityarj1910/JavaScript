const userEmail = 0 

if (userEmail){
    console.log("Have email");
}else{
    console.log("Doesnt have email");
}


/*

falsy value: false, 0, -0, BigInt  0n, "", null, undefined, NaN
truthy values: all other values than falsy values ("0", 'false', " ", [], {}, funtion(){})

*/

//if else using ternary opereator
//=> condition ? true(if) : false(else)
const number = 80
number>50 ? console.log("Greater than 50") : console.log("less than 50");