

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


/********************************************* */

/*
Reduce()
1. The reduce() method is another method that iterates over each value in the array, but this time it 
cumulatively combines each result to return just a single value.
2.  The callback function is used to describe how to combine each value of the array with the 
running total. This is often used to calculate statistics such as averages from data stored in 
an array. It usually takes two parameters. The first parameter represents the accumulated value 
of all the calculations so far, and the second parameter represents the current value in the array. 
The following example shows how to sum an array of numbers:
*/
const number_4 = [1,2,3,4,5].reduce( (acc,val) => acc + val );
console.log(number_4); // 15

/*
1. The reduce() method also takes a second parameter after the callback, which is the initial value 
of the accumulator, acc . For example, we could total the numbers in an array, but starting at 10, instead of zero:
*/
const number_5 = [1,2,3,4,5].reduce( (acc,val) => acc + val,10); // <---- second parameter of 10 here
console.log(number_5); // 25

// Another example could be to calculate the average word length in a sentence:
const sentence = 'The quick brown fox jumped over the lazy dog';
console.log(sentence); // The quick brown fox jumped over the lazy dog

//
const sentence_1 = 'The quick brown fox jumped over the lazy dog';
const sentence_2 = sentence_1.split();
console.log(sentence_2); // ["The quick brown fox jumped over the lazy dog"]

const sentence_3 = sentence_1.split(" ");
console.log(sentence_3); // ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

/* 
const totalWords = sentence.reduce((acc,word) => acc + word.length, 0);
console.log(totalWords); // sentence.reduce is not a function
*/


/*
Filter()
1. The filter() method returns a new array that only contains items from the original array that 
return true when passed to the callback.
*/
// For example, we can filter an array of numbers to just the even numbers using the following code:
const numbers = [ 2, 7, 6, 5, 11, 23, 12 ];
console.log(numbers.filter(x => x % 2 === 0 )); // this returns true if the number is even // 2, 6, 12
//console.log(numbers); // 2, 7, 6, 5,11, 23, 12


// The filter() method provides a useful way of finding all the truthy values from an array:
const array = [ 0, 1, '0', false, true, 'hello' ];
console.log(array.filter(Boolean)); // [1, "0", true, "hello"]

// To find all the falsy values, the following filter can be used:
console.log(array.filter(x => !x)); // [0, false]


/*
Chaining Iterators Together
1. The various iterator functions can be used in combination to create some powerful transformations 
of data stored in arrays. This is achieved by a process called chaining methods together.
2. Chaining works because the iterator functions return an array, which means that another iterator 
function can then be chained on to the end and it will be applied to the new array.
*/

/* For example, we can calculate the sum of square numbers using the map() method to square 
each number in the array and then chain the reduce() method on the end to add the results together:
*/
const numbers_1 = [1,2,3].map( x => x*x ).reduce((acc,x) => acc + x );
console.log(numbers_1); // 14


/*
1. Another more complex example could be used to take an array of orders, apply a sales tax to 
them using map() and then use reduce() to find the total:
*/
const sales = [ 100, 230, 55];
const sales_1 = totalAfterTaxSales = sales.map( (amount) => amount * 1.15 ).reduce( (acc,val) => acc + val );
console.log(sales_1); // 442.75


/**************************************************************/

/*
Object Literals
A Super Example
*/
const superman = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman);



/*
Creating Objects
1. To create an object literal, simply enter a pair of curly braces.
*/

// The following example creates an empty object that is assigned to the variable spiderman :
const spiderman = {};

// It’s also possible to create an object using a constructor function.
// This example will also create an empty object:
// This method is not recommended.
const spiderman_1 = new Object();


/*
1. ES6 provided a shorthand method of creating objects if a property key is the same as a variable 
name that the property value is assigned to:
*/
const name = 'Iron Man';
const realName = 'Tony Stark';
// long way
const ironMan = { name: name, realName: realName };
// short ES6 way
const ironMan_1 = { name, realName };


/*
Accessing Properties
1. You can access the properties of an object using the dot notation that we’ve already seen in 
previous chapters. This will return the value of that property
*/
const superman_1 = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman_1);
console.log(superman_1.name); // Superman

/*
1. You can also access an object’s properties using bracket notation ― the property is 
represented by a string inside square brackets, so needs to be placed inside single or double quotation marks:
*/
console.log(superman_1['name']); // Superman

/*
1. bracket notation has a few advantages: it's the only way to access nonstandard property 
and method names that don’t follow the variable naming rules. It also lets you evaluate an 
expression and use it as the property key:
*/
console.log(superman_1["real" + " " + "name"]); // the property is built using string concatenation) // Clark Kent

// If you try to access a property that doesn’t exist, undefined will be returned:
console.log(superman_1.city);


/*
Computed Properties
1. The ability to create objects with computed property keys was introduced in ES6. 
This means that JavaScript code can be placed inside square brackets and the property 
key will be the return value of that code.
*/
const hulk = { name: 'Hulk', ['catch' + 'Phrase']: 'Hulk Smash!' };
console.log(hulk);

// If we take a look at the hulk object, we can see the property key is named 'catchPhrase':
// {name: "Hulk", catchPhrase: "Hulk Smash!"}
console.log(hulk);


/*
1. The value of a property has always been allowed to be a JavaScript expression.
*/

/*
1. In the example below a ternary operator is used to return a true or false value for the 
hero property depending on the value of the bewitched variable:
*/
const bewitched = true;
const captainBritain = { name: 'Captain Britain', hero: bewitched ? false : true };
console.log(captainBritain); // {name: "Captain Britain", hero: false}

// The new Symbol date type can also be used as a computed property key:
const name_1 = Symbol('name');
const supergirl = { [name_1]: 'Supergirl' };
console.log(supergirl); // {Symbol(name): "Supergirl"}

// You can access the property using the square bracket notation:
console.log(supergirl[name_1]); // Supergirl


// A new property can be added to an object using a symbol as a key if the square bracket notation is used:
const realName_1 = Symbol('real name');
console.log(supergirl[realName_1] = 'Kara Danvers'); // Kara Danvers
 

/*
1. The symbols used for property keys are not limited to being used by only one object - 
they can be reused by any other object:
*/

/*
const daredevil = Symbol('name_2');
const daredevil_1 = { [name_3]: 'Daredevil', [realName]: 'Matt Murdoch'};
console.log(daredevil_1); // name_3 is not defined
*/


/*
Calling Methods
1. To call an object’s method we can also use dot or bracket notation.
2. Calling a method is the same as invoking a function, so parentheses need to be placed after the method name:
*/
const superman_2 = {
    name: 'Superman',
    'real name': 'Clark Kent',
    height: 75,
    weight: 235,
    hero: true,
    villain: false,
    allies: ['Batman','Supergirl','Superboy'],
    fly() {
        return 'Up, up and away!';
    }
};

console.log(superman_2);
console.log(superman_2.name); // Superman
console.log(superman_2.fly()); // Up, up and away!
console.log(superman_2['fly']()); // Up, up and away!