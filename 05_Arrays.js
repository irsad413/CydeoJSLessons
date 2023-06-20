/**
 * 
 * There is no Collection in JS . in JS we only jave Arrays and Map
 * NOT Fixed size
 * There are two important Brackets in JS
 * 1. [] -----> Creates an Array
 * 2. {} -----> Creates an Object
 */


let scores = new Array() ; // creates an empty Array 
let numbers = new Array(10) ; // creates an array with size 10 
let emptyArray = [] ; // creates an empty Array
let myNumbers = new Array( 1,2,3,5,8,13)
let colors = ['red' , 'green' , 'blue']

console.log(scores);
console.log(numbers);
console.log(emptyArray);
console.log(myNumbers);
console.log(colors);

// print second element in an array 
console.log(colors[1]); // indexed based

// add element to an Array at en end
colors.push("white") ; 
console.log(colors);

// add element to beginning of the Array 
colors.unshift('orange') ; 
console.log(colors);

console.log(colors.pop()); // giving the last element and removing at the same time : white
console.log(colors);

// the size of the array 
console.log(colors.length); 

for ( let i = 0 ; i  < colors.length ; i++) {
    console.log(colors[i]);

}

console.log();

// loop with values of Array 

for (let value of colors) {

    console.log(value);
    
}

console.log();

colors.forEach( element => {
    console.log(element);

} ) ; 

console.log();


// can we add multipule type of Data? Yes 

let soupOfData = [5 , "irsad" , ture , undefined] ; // you can also put Map , Object , Function inside Array
soupOfData.forEach(element => {

    console.log(typeof element);
} );