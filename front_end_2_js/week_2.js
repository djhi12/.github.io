/* ---------------------Programming Basics | Chapter 2-----------------------------*/

// Single line

/*
Multi-line
*/

// This is a block containing 2 statements

const message='Hello World';
// alert(message);
console.log(message);

  


// Primitive Data Types 
var primitive;
var num = 3 + 5;
  
typeof 'Hello'
  
document.getElementById("output").innerHTML = primitive;
document.getElementById("output_1").innerHTML += num;
console.log(primitive);
console.log(num);

let x = 3, y = 4, z = 5, r = 3 + 4 + 5;
console.log(r);


/*
using const means you can't reassign the variable to another value. 
That means that if a variable is assigned to a primitive data type, 
then the value can't be changed, and will result in an error if you attempt to:
*/
const name = 'Alexa';
name = 'Siri';
console.log(name);

const Name = { value: 'Alexa' }; // an object
Name.value = ''; // change the value
console.log(Name);




/*------------------------------------------------------------------------*/