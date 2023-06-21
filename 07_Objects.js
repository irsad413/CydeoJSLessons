let person = {

    firstName : "Kobe" ,
    lastName : "Bryant"
}

console.log(typeof person);

console.log(person);

console.log(person.firstName);

let address = {

    'buiding no' : 5555 , 
    street : 'keowee' , 
    state : 'Kentucky'
}

console.log(address); 
console.log(address['buiding no']);
console.log(address['street']);

//add new property to object
person.age = 30 ; 
console.log(person);

//delete a property
delete person.age ; 
console.log(person);

//check a property if it exists 
console.log('street' in address); // true

// you can put arrays inside objects
let course = {
    name : 'JS', 
    url : 'www.cydeo.com', 
    subjects : ['Objects' , 'Arrays' , 'Functions' , 'Live']
}

console.log(course);


//loop using keys of the object
for(let key in course) {

    console.log(key + " : " + course[key]);
}


// value which was array turned into string = Objects , Arrays , Functions , Live Server

/**
 * we will have fixtures folder in Cypress tool , we store JSON files 
 */

// let's create an object with function 
let myCar = {
    make: 'Toyota' , 
    color : 'White' , 
    year : 2021 ,
    
    engine :  {
        cylinders : 3 , 
        size : 1.0 
    } ,
    extras :  ['AC' , 'Cruise Control' , 'Sound System']  , 
    drive : function () {

        console.log("Running on Hybrid");
    }
}

myCar.drive() ;  // like in JAVA

console.log(myCar.extras[1]); // you are familiar with this from API testing