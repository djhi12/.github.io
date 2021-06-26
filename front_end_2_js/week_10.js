/*
Default Parameters
1. ES6 introduced a convenient way to specify default parameters for a function. These are values 
that will be used by the function if no arguments are provided when it is invoked.
2. To specify a default parameter, simply assign the default value to it in the function definition:
*/
function hello(name = 'World'){
    console.log(`Hello ${name}!`);
}

// Now if we call this function without an argument, it will use 'World' as the name parameter:
// We can override the default value, by specifying our own argument:
hello('Universe');


/*
1. Default parameters should always come after non-default parameters, otherwise default 
values will always have to be entered anyway. 
2. This function takes two arguments: the price of an item and the percentage discount to be applied. 
The store’s most common discount is 10%, so this is provided as a default value. This means that the 
amount argument can be omitted in most cases and a 10% discount will still be applied:
*/
function discount(price, amount = 10) {
    return price*(100 - amount) / 100;
}
/*
1. If a different discount is applied, the amount argument can be provided:
*/
console.log(discount(15, 20));



/*
Arrow Functions
1. These make declaring functions much more succinct by using less verbose syntax.
2. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
3. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
The parameters come before the arrow and the main body of the function comes after. 
4. Arrow functions can be identified by the 'arrow' symbol, => that gives them their name. 
The parameters come before the arrow and the main body of the function comes after. 
Arrow functions are always anonymous, so if you want to refer to them, you must assign them to a variable.
*/

// For example, the square function we wrote earlier can be written like so:
const square_1 = x => x*x;

//Multiple parameters need to go inside parentheses, for example, the following function adds two numbers together:
const add = (x,y) => x + y;


//If the function doesn't require any parameters, a pair of empty parentheses must go before the arrow:
const hello_1 = () => alert('Hello World!');


/*
1. Longer functions will still require curly braces to deliminate the body of the function and 
the return keyword at the end, as can be seen in this (rather simplistic) tax-calculating function:
*/
const tax = (salary) => {
    const taxable = salary - 8000;
    const lowerRate = 0.25 * taxable;
    taxable = taxable - 20000;
    const higherRate = 0.4 * taxable;
    return lowerRate + higherRate;
}
console.log(tax);


/*
Function Hoisting
1. Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations 
to the top of the current scope, regardless of where they are defined.
2. Functions that are defined using a function declaration are automatically hoisted, meaning they 
can be invoked before they have been defined.
*/

// function is invoked at the start of the code
hoist();
// ...
// ... lots more code here
// ...
// function definition is at the end of the code
function hoist(){
    console.log('Hoist Me!');
}


/*
Variable Hoisting
1. Variable declarations that use the var keyword are automatically moved to the top of the current scope.
2. Variable assignment is not hoisted, however. This means that a variable assigned at the end of a 
function will have a value of undefined until the assignment is made:
*/

/* It’s better practice to use const and let to declare any variables at the beginning of a block so 
hoisting is unnecessary.
*/
console.log(name); // will return undefined before assignment
// variable is defined here
var name = 'Alexa';
console.log(name); // will return 'Alexa' after assignment


// the variable helloExpression has a value of undefined, so the function cannot be invoked
//helloExpression(); // throws an error
// the function declaration can be invoked before it is declared
helloDeclaration(); // returns 'hello'
// assign function expression to a variable
var helloExpression = function() { 
    console.log('hello') 
}
// declare function declaration
function helloDeclaration() {
    console.log('hello') 
}
// The function expression can only be invoked after assignment
helloExpression(); // returns 'hello'


/*
Callbacks
1. This means that functions can also be given as a parameter to another function.
2. A function that is passed as an argument to another is known as a callback.
*/


function sing(song) {
    console.log(`I'm singing along to ${song}`);
}
sing('Let It Go') //'I'm singing along to Let It Go'
sing('Let It Go',dance);

// The callback is provided as a parameter, then invoked inside the body of the function.
function sing_1(song,callback) {
    console.log(`I'm singing along to ${song}.`);
    return callback(song, callback);
}

function dance() {
    console.log("I'm moving my body to the groove."); 
    //( We’re just logging a simple message to the console in these examples, but these functions could be used to do anything in a practical sense.)
    }

sing_1('Let It Go, Let it go',dance);

/*
1. It is possible to check if an argument is a function using the following code:
*/
/*
if(typeof(callback) === 'function'){
    callback();
}
*/


function dance() {
    console.log("I'm moving my body to the groove."); 
    //( We’re just logging a simple message to the console in these examples, but these functions could be used to do anything in a practical sense.)
    }


sing('Let It Go',()=>{ console.log("I'm standing on my head.");});


/*
Sorting Arrays With A Callback
1. In the last chapter we saw that arrays have a sort() method that sorted the items in the 
array into alphabetical order. This is fine for strings, but you might recall that it didn't 
work so well for numbers:
*/

//This function can now be used as a callback in the sort() method to sort the array of numbers correctly:
const numbersArray =  [1, 3, 12, 5, 23, 18, 7].sort(numerically);
console.log(numbersArray);

/*
1. This simply subtracts the two numbers that are being compared, giving a result that is either 
negative (if b is bigger than a ), zero (if a and b are the same value), or positive (if a is bigger than b ).
*/
function numerically(a, b) {
    return a - b;
}

/*
overflow errors
1. In some rare instances where an array includes some very large and negative numbers, an 
overflow error can occur and the result of a-b becomes smaller than the smallest number 
that JavaScript is able to cope with. If this is the case, the following function can be 
used as a callback instead:
*/
function numerically (a, b){
    if (a < b) {
        return -1;
    } else if(a > b) {
        return 1;
    } else {
        return 0;
    }
}
console.log(numerically(1,2));


/*
Array Iterators
1. Arrays have a number of methods that utilize callbacks to make them more flexible.
*/


/*
forEach()
1. 
*/
const colors = ['Red', 'Green', 'Blue']
for(let i = 0, max = colors.length ; i < max ; i++ ) {
    console.log(`Color at position ${i} is ${colors[i]}`);
}
//'Color at position 0 is Red'
//'Color at position 1 is Green'
// 'Color at position 2 is Blue'

{
    const otherLoop = 'Other Loop';
    console.log(otherLoop);
}

/*
1. An alternative is to use the forEach() method. This will loop through the array and invoke a 
callback function using each value as an argument.
2. The callback function takes three parameters, the first represents the value in the array, 
the second represents the current index and the third represent the array that the callback is being called on. 
*/
colors.forEach( (color,index) =>
    console.log(`Color at position ${index}  is ${color}`) );



/*
map()
1. The map() method is very similar to the forEach() method. It also iterates over an array, and 
takes a callback function as a parameter that is invoked on each item in the array. This is often 
used to process data returned from databases in array form, such as adding HTML tags to plain text.
2. The difference is that it returns a new array that replaces each value with the return value of
the callback function.
*/

/* 
1. For example, we can square every number in an array using the square function we wrote previously as 
a callback to the map() method:
*/
const numberArray = [1,2,3].map( square );
console.log(numbersArray); // 1, 3, 5, 7, 12, 18, 23

// An anonymous function can also be used as a callback. This example will double all the numbers in the array:
const numberArray_1 = [1,2,3].map(x => 2 * x);
console.log(numberArray_1); // 2, 4, 6

// The next example takes each item in the array and places them in uppercase inside paragraph HTML tags:
const colorArray = ['red','green','blue'].map( color => `<p> ${color.toUpperCase()}</p>` );
console.log(colorArray);
document.getElementById("colorArray").innerHTML = colorArray;


/*
1. Notice in this and the previous example, the anonymous function takes a parameter, color , 
which refers to the item in the array. This callback can also take two more parameters ― 
the second parameter refers to the index number in the array and the third refers to the array itself.
2. It's quite common for callbacks to only used the first, index, parameter, but the next 
example shows all three parameters being used:
*/
const colorArray_1 = ['red','green','blue'].map( (color, index, array) => `Element ${index} is ${color}. 
There are ${array.length} items in total.` );
console.log(colorArray_1);