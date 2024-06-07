// IIFE => Immediately Invoked Function expression
//this can be done by ==> (function defination)(nothing just for function call)

function chai1(){
    console.log("DB connected 1");
}
chai1();  //this is not IIFE 

/* there are 2 reasons for IIFE
    1) We want the function to immediately invoke
    2) we dont want a function to get polluted(changes) from the global scope
*/

// so the above fun can be written in IIFE as
(function chai2(){
    //named IIFE
    console.log("DB connected 2");
})();

( (name) => {
    //normal IIFE
    console.log(`DB connected ${name}`);
})("Aditya");
