//Continuation of Chapter 3 | Arrays, Logic, and Loops

/*
infinite loops
1. It is important that the condition in a while loop will be met at some point, otherwise your code will get 
stuck in an infinite loop that could possibly crash the program.
2. 
*/

/*
let m = 1;
while(m > 0){
    console.log('Hello');
    m++;
}
*/


const otherLoop_1 = 'Other Loops';
console.log(otherLoop_1);


/*
do ... while Loops
1. A do ... while loop is similar to a while loop. The only difference is that the condition comes after the 
block of code:
2. This means that the block of code will always be run at least once, regardless of the condition being true 
or not.
 */
let bottles_2 = 10;
do {
    console.log(`There were ${bottles_2} green bottles, hanging on a wall. And if one green bottle should 
    accidentally fall, there'd be ${bottles_2-1} green bottles hanging on the wall`);
    bottles_2--;
} while (bottles_2 > 0)


const otherLoop_2 = 'Other Loops';
console.log(otherLoop_2);


/*
For Loops
1. For loops are probably the most commonly type of loop used in JavaScript
2. The initialization code is run before the loop starts and is usually employed to initialize any variables 
used in the loop. The condition has to be satisfied for the loop to continue. 
3. The after code is what to do afte reach iteration of the loop, and it is typically used to increment a 
counter of some sort.
*/
for (let bottles_3 = 10 ; bottles_3 > 0 ; bottles_3--) {
   console.log(`There were ${bottles_3} green bottles, hanging on a wall. And if one green bottle should 
   accidentally fall, there'd be ${bottles_3-1} green bottles hanging on the wall`);
} 


const otherLoop_3 = 'Other Loops';
console.log(otherLoop_3);


let bottles_4 = 10; // bottles is initialized here instead
for ( ; bottles_4 > 0 ; ) { // empty initialization and increment
console.log(`There were ${bottles_4} green bottles, hanging on a wall. And if one green bottle should 
accidentally fall, there'd be ${bottles_4-1} green bottles hanging on the wall`);
bottles_4--; // increment moved into code block
}


/*
nested for loops

*/
for(let i=1 ; i<13 ; i++){
for(let j=1 ; j<13 ; j++){
    console.log(`${j} multiplied by ${i} is ${i*j}`);
    }
}



/*
Looping over Arrays
1. A for loop can be used to iterate over each value in an array. If we take our avengers array example from 
earlier, we can create a for loop that outputs each item in the array to the console using the following loop:
2. MAX is a variable.
3. 
*/

const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Spider Man', 'Doctor Strange', 'Thanus', 
'Black Panther', ' ',];
for(let i=0, max=avengers.length; i < max; i++){
    console.log(avengers[i]);
    }


/*
1. ES6 introduced an improved iterator function for arrays called a for-of loop that uses a slightly different 
syntax:
2. 
*/
for(const value of avengers){
    console.log(value);
    }


/*
Looping Over Sets
1. Sets are enumerable, which means they have methods that allow you to loop over each value in the set. 
2. The loop will iterate over each value in the same order they were added to the set. 
*/
const letters = new Set('hello');
for(const letter of letters) {
    console.log(letter);
}


/*
Looping Over Maps
1. Maps are also enumerable, so it's also possible to loop over a map in a similar way to a set. 
2. The loop will iterate over each key-value pair in the same order as they were added to the map.
*/
const romanNumerals_1 = new Map();
romanNumerals_1.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
for(const key of romanNumerals_1.keys()) {
    console.log(key);
}

/*
const romanNumerals_2 = new Map();
romanNumerals_2.set(1,'I').set(2,'II').set(3,'III').set(4,'IV').set(5,'V');
for(const value of RomanNumerals_2.values()) {
    console.log(value);
}
*/

/*
for(const [key,value] of RomanNumerals.entries()) {
    console.log(`${key} in Roman numerals is ${value}`);
}
*/




// Ninja Quiz | Arrays, Logic, and Loops

/*
1. We'll start by creating an array called quiz that contains all the questions 
and answers. Each element in quiz will be a nested array that contains the 
question as its first element and the answer as its second element.
*/
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

/*
1. Next, we’ll create and initialize a variable called score to keep track of 
how many correct answers the player has given:
*/
let score = 0 // initialize score

/*
1. Then we'll loop through the array using a for-of loop, assigning the variables 
question and answer to each key and value in the map.
2. The loop starts by asking the question using a prompt dialog that allows the 
player to enter an answer that is stored in a variable called response . We can 
then compare this to the actual answer stored as answer :
3. An if ... else block is then used to check if the answer is right or wrong. 
If it’s right, an alert dialog is shown saying it is correct and the score is 
incremented by 1, using score++ . Otherwise, if the answer is wrong, an alert 
dialog informs the player and also lets them know the correct answer.
*/
for(const [question,answer] of quiz){
    const response = prompt(question);
    if(response === answer){
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

/*
1. When the loop has finished iterating through each question in the array, it 
breaks out of the block and finishes by displaying another alert dialog to inform 
the player the game is over and telling them how many questions they answered 
correctly. This uses a template literal to display the score:
2. Notice at the end of this template literal, we use the ternary operator to check 
if the score is not equal to 1. If this is true, the letter 's' is appended to the 
end of the word 'point' to make it plural. This is a neat trick that can sometimes 
be overlooked, even on professional websites.
*/
// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);




/********************************************************************************************************/
// Chapter 4 | Functions

/*
Function Declarations 
1. To define a function literal we can use a function declaration:
2. This starts with the function keyword and is followed by the name of the function, which in this case is 
called ' hello ', followed by parentheses.
3. Following this is a block that contains the code for the function.
4. This is known as a named function as the function has a name: ' hello '.
*/

/*
function hello(){
    console.log('Hello World!'); 
}
hello();
*/

/*
Function Expressions
1. Another way of defining a function literal is to create a function expression. This assigns ananonymous 
function to a variable:
2. The function in this example is known as an anonymous function because it doesn't have a name; it is simply 
created, then assigned to the variable goodbye.
3. 
*/

/*
const goodbye = function(){
    console.log('Goodbye World!');
};
*/

/*
1. Alternatively, we can create a named function expression instead:
*/


const goodbye_1 = function bye(){
    console.log(bye());
};


/*
Function() Constructors
1. A function can also be declared using the constructor Function() . The body of the function is 
entered as a string, as shown in this example:
 */

//const hi = new Function('console.log("Hi World!");');

/*
Invoking a Function
1. Invoking a function is to run the code inside the function’s body. To invoke a function, simply 
enter its name, followed by parentheses. This is how we’d invoke the hello function:
*/


function hello(){
    console.log('Hello World!'); 
}
hello();

const goodbye_2 = function goodbye_2(){
    console.log('Goodbye World!'); 
};
goodbye_2();


/*
1. Remember: you need parentheses to invoke a function ― either by name or by reference to the 
variable it is assigned to.
2.  If you skip the parentheses, you are simply referencing the function itself rather than 
invoking it, as you can see here:
*/


//goodbye;


/*
1. All that has been returned is the function definition that the variable goodbye is pointing 
to, rather than running the code. This can be useful if you want to assign the function to another 
variable, like so:
*/

//seeya = goodbye;


/*
1. Now the variable seeya also points to the function called bye and can be used to invoke it:
*/

//seeya();


/*
Return Values
1. All functions return a value, which can be specified using the return statement, which comes 
after the return keyword.
2. A function that doesn’t explicitly return anything (such as all the examples we have seen 
so far) will return undefined by default.
*/

/*
1. The function in this example will return the string 'Howdy World!':
2. 
*/
function howdy(){
    return 'Howdy World!';
}
console.log(howdy());

/*
1. This means we can now assign a function invocation to a variable, and the value of that 
variable will be the return value of that function:
*/
const message = howdy();


/*
Parameters and Arguments
1. Parameters and arguments are terms that are often used interchangeably to represent values 
provided for the function as an input. 
2. There is a subtle difference though: any parameters a function needs are set when the 
function is defined. When a function is invoked, it is provided with arguments.
*/

/*
1. To see an example of a function that uses parameters, we'll create a function that squares numbers.
2. In the example that follows, the square function takes one parameter, x , which is the number to be squared.
3. In the body of the function, the name of the parameter acts like a variable equal to the value that 
is provided when the function is invoked.
4. As you can see, it is multiplied by itself and the result is returned by the function:
*/
function square(x){
    return x*x;
}

/*
1. When we invoke this function, we need to provide an argument, which is the number to be squared:
*/
console.log(square(4.5));


/*
1. You can use as many parameters as you like when defining functions. For example, the following 
function finds the mean of any three numbers:
*/
function mean(a,b,c){
    return (a+b+c)/3;
}
console.log(mean(1, 3, 6,));


/*
Variable Numbers of Arguments
1. Every function has a special variable called arguments . This is an array-like object that 
contains every argument passed to the function when it is invoked. 
2. We can create a simple function called arguments() that will return the arguments object 
so we can see what it contains:
*/
function arguments(){
    return arguments;
}
arguments('hello', NaN);
console.log(arguments());

arguments(1,2,3,4,5);
console.log(arguments());


/*
1. A much better option is to use the rest operator. This was introduced in ES6 and can be used 
to deal with multiple arguments by creating an array of arguments that are available inside the 
body of the function.
*/

/*
1. To use the rest operator, simply place three dots in front of the last parameter in a function 
declaration. This will then collect all the arguments entered into an array. 
*/
function rest(...args){
    return args;
}

/*
1. The args parameter is an actual array, and has access to the same methods. For example we 
can use a for-of loop to iterate over each value given as an argument:
*/
function rest(...args){
    for(arg of args){
        console.log(arg);
    }
}
rest(2,4,6,8)


/*
Improved Mean Function
1. We can use a rest parameter to improve our mean() function so it accepts any number of values:
*/
function mean_1(...values) {
    let total = 0;
    for(const value of values) {
        total += value;
    }
    return total/values.length;
}

mean_1(2,8,13,11,4,2);


/********************************************************* */

let daynames = [
    "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ]
  
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
  
  let d = new Date();
  let dayName = daynames[d.getDay()];
  let monthName = months[d.getMonth()];
  let year = d.getFullYear();
  let fulldate = dayName + ", " + d.getDate() + " " + monthName + ", " + year;
  
  document.getElementById("Date").innerHTML = fulldate;
