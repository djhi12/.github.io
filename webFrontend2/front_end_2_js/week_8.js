/*
Converting Sets to Arrays
1. A set can be converted into an array by placing the set, along with the spread operator directly inside an 
array literal.
*/
const bleachCharacters = new Set().add('Ichigo').add('Rukia').add('Yoruichi').add('Kisuke');
console.log(bleachCharacters);
//other way
//const bleachCharacters_1 = [...bleachCharacters];
const bleachCharacters_1 = Array.from(bleachCharacters);
console.log(bleachCharacters_1);


/*
By combining this use of the spread operator with the ability to pass an array to the new Set() constructor, we 
now have a convenient way to create a copy of an array with any duplicate values removed:
 */
const pokemonCharacters = ['Ash', 'Serena', 'Misty', 'Iris', 'Dawn', 'Ash', 'Serena', 'Misty', 'Iris'];
console.log(pokemonCharacters);
const nonDuplicatePokemonCharacters = [...new Set(pokemonCharacters)];
console.log(nonDuplicatePokemonCharacters);


/*
Weak Sets
1. When objects are added to sets, they will be stored there as long as the set exists, even if the original 
reference to the object is removed. The technical term for this is the object is prevented from being 
garbage-collected, which can cause a memory leak.
*/
//pokemonCharacters = null; //Error:Assignment to constant variable.
const pokemonCharacters_1 = new Set().add(pokemonCharacters);
console.log(pokemonCharacters_1);


/*
Memory Leaks
1. A memory leak occurs when a program retains references to values that can no longer be accessed in its memory. 
This means that memory is being used to store values that are no longer required by the program, effectively 
wasting system resources.
2. Memory leaks can cause problems by gradually reducing the overall memory available, which can cause the program, 
or even the entire system, to run more slowly.
3. 
*/
const animals = ['Cats', 'Dogs', 'Snake', 'Tiger'];
const weak = new WeakSet();
console.log(animals);
weak.add(animals);
console.log(weak);
weak.has(animals);
console.log(animals);
weak.delete(animals);
console.log(animals);
weak.has(animals);
console.log(animals);


/*
Creating Maps
1. Objects are limited to using strings for key values, whereas maps can use any data type as a key.

2. There is no efficient way to find the number of key-value pairs an object has, whereas this is easy to do 
with maps using the size property.

3. Objects have methods that can be called (see Chapter 5) and prototypes that can be used to create a chain 
of inheritance (see Chapter 12), whereas maps are solely focused on the storage and retrieval of key-value pairs.

4. The value of an object's properties can be accessed directly, whereas maps restrict you to using the get() 
method to retrieve any values.
*/

const romanNumerals = new Map();
romanNumerals.set(1, 'I').set(2, 'II').set(3, 'III').set(4, 'IV').set(5, 'V');
console.log(romanNumerals);


/*
Map Methods
1. A map is a bit like a dictionary where you can look up a value based on the key. To look up a value, we can 
use the get() method:
*/

console.log(romanNumerals.has(1)); //true
console.log(romanNumerals.has(7)); //false


/*
1. A map can be created with multiple values by using a nested array as a parameter:

2. The number of key and value pairs in a map can be found by querying the size property:
*/
const animeCharacters = new Map([['Himawari', 'Sarada', 'Boruto', 'Sasuke', 'Naruto'], 
['Sena', 'Yoichi', 'Suzuna', 'Ryokan']]);
console.log(animeCharacters);
console.log(animeCharacters.size);


/*
Removing Entries From Maps
1. The delete() method can be used to remove a key and value pair from a map. This returns a boolean value of 
true if the value was removed or false if it wasn't in the map.
2. To delete a specific value, you need to specify the key in parentheses:
*/
console.log(animeCharacters.delete('Orochimaru')); //false
console.log(animeCharacters.delete('Himawari')); //true


/*
clear() method
1. The clear() method will remove all key and value pairs from a map:
*/
console.log(animeCharacters.clear()); //undefined
console.log(animeCharacters.size); //0


/*
Converting Maps to Arrays
1. Maps can be converted into a nested array of key-value pairs in a similar way to sets; using either the 
spread operator:
*/
console.log(...romanNumerals);
console.log(Array.from(romanNumerals));


/*
Weak Maps
1. eak maps work in the same way as weak sets. They are the same as maps, except their keys cannot be primitives, 
and the garbage collector will automatically remove any dead entries when the reference to the original object is 
deleted.
*/
const Weak = new WeakMap();
console.log(Weak);


/*
if Statements
1. The code inside the block will only run if the condition in parentheses is true.
2. 
*/
let notice;
const age = 12;
if (age < 18) {
notice = 'Sorry, you are not old enough to play this game';
console.log(notice);
}


/*
 else Statements
1. The else keyword can be used to add an alternative block of code to run if the condition is false.
*/
let noticed;
const aged = 20;
if (aged < 18) {
   noticed = 'Sorry, you are not old enough to play this game';
} else {
   noticed = 'You\'re old enough to play this game';
}
console.log(noticed);



const n = 12;
if (n%2 === 0) {
console.log('n is an even number');
} else {
console.log('n is an odd number');
}
//<< 'n is an even number'


/*
Ternary Operator
1. A shorthand way of writing an if ... else statement is to use the ternary operator, ? , which takes 
three operands in the following format:
2.
*/

/*
condition ? (//code to run if condition is true) : (//code to run if condition is false)
*/

/*
const n = 5;
n%2 === 0 ? console.log('n is an even number') : console.log('n is an odd number');
//<< 'n is an odd number'
*/


/*
 Switch Statements
 1. 
*/
const number = 4;
if (number === 4) {
   console.log('You rolled a four');
   } else if (number === 5) {
   console.log('You rolled a five');
   } else if(number === 6){
   console.log('You rolled a six');
   } else {
   console.log('You rolled a number less than four');
   }


   switch (number) {
      case 4:
      console.log('You rolled a four');
      break;
      case 5:
      console.log('You rolled a five');
      break;
      case 6:
      console.log('You rolled a six');
      break;
      default:
      console.log('You rolled a number less than four');
      break;
  }


  /*
  while loops
  */
  let bottles = 10;
  while (bottles > 0){
      console.log(`There were ${bottles} green bottles, hanging on a wall. And if one green bottle should 
      accidentally fall, there'd be ${bottles-1} green bottles hanging on the wall`);
      bottles--;
  }

  const otherLoop = 'Other Loops';
  console.log(otherLoop);

  let bottles_1 = 11;
while (--bottles_1){
    console.log(`There were ${bottles_1} green bottles, hanging on a wall. And if one green bottle should 
    accidentally fall, there'd be ${bottles_1-1} green bottles hanging on the wall`);
}



/************************************************/
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