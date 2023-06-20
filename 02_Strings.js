let str1 ='Java' ; 
let str2 ="Script" ; 
let str3 = "awesome" ; 

let result ; 

result = "the result variables is : " + str1 + str2 +  ' ' + str3; // like java

console.log(result);


// difference from java: backticks for variables insertion

result = `the result variables is : ${str1}${str2} ${str3}`
console.log(result);