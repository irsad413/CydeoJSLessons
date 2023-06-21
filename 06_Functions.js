// no access modifier , no method overloading 

function add (a , b ) { // parameters of function

    console.log("Total is: " + (a+b)); // no return type

}

add(10,20) ; // call a function -- argument we are passing

// return type functions 
function multiply (a , b) {

    return (a * b) ; 
}

console.log(multiply (10 ,20)); 

// no overloading 
add(10 , 20 , 30 ) ; // ignores after the second parameter 

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 * They call functions as first class citizens of Javascript
 * 1. you can pass function as an argument to other function
 * 2. you can return a function from a function
 * 3. you can store a function into a variable
 */


let divide = function (a , b) { // you can pass arguments to other functions

    return a / b  ;  // you can return a function from a function
}

console.log(divide(30 , 5 ));


let anyFunction =  divide ; 

console.log(anyFunction (30 , 5 ));

// pass a function as an argument to other function

function sum(a , b) {

    return a + b ; 
}

function average(a , b, fn) { 
    return fn(a , b) / 2 ; 
    
}

let aveResult = average(10 ,20 , sum) ; 
console.log(aveResult);


aveResult = average(10 , 20 , multiply ) 
console.log("average result from multiplication : " + aveResult);

