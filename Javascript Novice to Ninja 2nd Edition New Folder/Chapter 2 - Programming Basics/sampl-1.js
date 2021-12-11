/******** Comments ********/

// Single 

/* 
    Multi-line
*/


/******** JavaScript Grammar *******/

const message = "Hello World!";
console.log(message);

{
    const message1 = "Hello World!";
    console.log(message1); 
}

// console.log(message1);


/******** Reserved Words ********/




/******* Primitive Data Types *******/


console.log(typeof message);


/******** Variables *******/





/********** Declaring and Assigning **********/




/************ Scope ************/



/******* Global Scope *******/




/****** Local Scope ******/

//----- Sample code from w3schools -----------

myFunction();

function myFunction() {
  let carName = "Volvo";
  document.getElementById("demo1").innerHTML = typeof carName + " " + carName;
  console.log(typeof carName + " " + carName);
}

document.getElementById("demo2").innerHTML = typeof carName;
console.log(typeof carName);


/******* Naming Constants & Variables *******/



/******* Direct Assignment and Assignment By Reference *******/
const digits = 6;
// digits +=
console.log(digits);




/******* Strings ********/



/******* String Properties and Methods ********/

//------- Sample from W3schools ---------- 

// .length
{
let text = "Hello World!";
let length = text.length;

document.getElementById("demo3").innerHTML = length;
console.log(length);
}

// toUpperCase()
let text = "Hello World!";
let result = text.toUpperCase();

document.getElementById("demo4").innerHTML = result;
console.log(result);


// charAt()
let text1 = "HELLO WORLD";
let letter = text1.charAt(0);

document.getElementById("demo5").innerHTML = letter;
console.log(letter);


// indexOf()
let text2 = "Hello world, welcome to the universe.";
let result1 = text2.indexOf("Hello");

document.getElementById("demo6").innerHTML = result1;
console.log(result1);


// lastIndexOf()
let text3 = "Hello planet earth, you are a great planet.";
let result2 = text3.lastIndexOf("planet");

document.getElementById("demo7").innerHTML = result2;
console.log(result2);


// -------- Sample from developer.mozilla ----

// includes()
const array1 = [1, 2, 3];

console.log(array1.includes(2));

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));

console.log(pets.includes('at'));


// --------- Sample from w3schools ------

// startsWith()
let text4 = "Hello world, welcome to the universe.";
let result3 = text4.startsWith("Hello");

document.getElementById("demo8").innerHTML = result3;
console.log(result3);


// endsWith()
// ----- Sample from developer.mozilla -------
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best!'));


const str2 = 'Is this a question';

console.log(str2.endsWith('?'));


// concat()
const array2 = ['a', 'b', 'c'];
const array3 = ['d', 'e', 'f'];
const array4 = array2 + "," + array3;
console.log(array4);

const arrayNumber1 = [1, 2, 3, 4];
const arrayNumber2 = [5, 6, 7, 8];
console.log(arrayNumber1[1] + arrayNumber2[3]);


// trim()
// ---- Sample from developer.mozilla ---------
const greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "    Hello world!   ";

console.log(greeting.trim());
// expected output: "Hello world!";


// repeat()
// ---- Sample from w3schools
let text6 = "Hello world!" + " ";
let result5 = text6.repeat(2);
console.log(result5);


/******* Template Literals ********/

const myName  = `"Daniel"`;
console.log(myName);



/******** Symbols *********/

const uniqueId = Symbol(`This is a unique ID`);
console.log( typeof uniqueId);
console.log(uniqueId);


// for()

// ------ Sample from developer.mozilla

let str = '';

for (let i = 0; i < 9; i++) {
  str = str + i;
}
document.getElementById("demo9").innerHTML = str ;
console.log(str);
// expected output: "012345678"


/********** Numbers ************/

// Number.isInteger()
// ------ Sample from developer.mozilla 
function fits(x, y) {
  if (Number.isInteger(y / x)) {
    return 'Fits!';
  }
  return 'Does NOT fit!';
}

document.getElementById("demo10").innerHTML = fits(5, 10);
console.log(fits(5, 10));
// expected output: "Fits!"

document.getElementById("demo11").innerHTML = fits(5, 11);
console.log(fits(5, 11));
// expected output: "Does NOT fit!"


/********* Octal and Hexadecimal Numbers ************/


/********* Exponential Notation *********/


/****** Number Methods *******/

// toExponential()
// ----- Sample from w3schools
let num = 5.56789;
let n = num.toExponential();

document.getElementById("demo12").innerHTML = n;
console.log(n);


// toFixed()
// ----- Sample from w3schools
let num1 = 5.56789;
let n1 = num1.toFixed(2);

document.getElementById("demo13").innerHTML = n1; 
console.log(n1);

// toPrecision() 
// ----- Sample from w3schools
let num2 = 13.3714;

document.getElementById("demo14").innerHTML = num2.toPrecision(2);
console.log(num2.toPrecision(3));


/********* Arithmetic Operations ********/


/********** Changing The Value of Variables ***********/

let valueOfVariables = 10;
valueOfVariables += 10;
valueOfVariables += 10;

console.log(valueOfVariables); // 20


/******** Incrementing Values *********/
// Increment (++)
// ----- Sample from developer.mozilla
let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// expected output: "a:4, b:4"


/******* Infinity *******/

// Infinity
// ----- Sample from developer.mozilla
const maxNumber = Math.pow(10, 1000); // max positive number

if (maxNumber === Infinity) {
  console.log('Let\'s call it Infinity!');
  // expected output: "Let's call it Infinity!"
}

console.log(1 / maxNumber);
// expected output: 0



/******* NaN *******/















