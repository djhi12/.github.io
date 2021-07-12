/*****************************************/
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



/************************************************************ */
const avengers = ['Captain America', 'Iron Man', 'Thor', 'Hulk', 'Spider Man', 'Doctor Strange', 'Thanus', 
'Black Panther', ' ',];
const justiceLeague = ['Wonder Woman', 'Aquaman', 'Superman', 'Flash', 'Steppenwolf'];
const superHeroes = [avengers, justiceLeague];


//document.getElementById('output','output_1').innerHTML = avengers + justiceLeague.sort();
//document.getElementById('output').innerHTML = avengers.reverse();
//document.getElementById('output').innerHTML = avengers.sort();

console.log(avengers);
console.log(superHeroes);

/*
...spread operator
1. The spread operator that we met earlier can be used to flatten multi-dimensional arrays. Flattening an array 
involves removing all nested arrays so all the values are on the same level in the array.
*/
console.log(...avengers, ...justiceLeague);

//const avengers_1 = ['Ant man', 'Wonderwoman', 'Batman'];
//delete avengers[0], delete avengers[1];

/*
 .length property / Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
 1. The length property of an object which is an instance of type Array sets or returns the number of elements in 
 that array. The value is an unsigned, 32-bit integer that is always numerically greater than the highest index 
 in the array.
 */
console.log(avengers.length);


/*

 */
console.log(avengers.length -1);



console.log(avengers.length = 100);


/*
pop() method / Source: https://www.w3schools.com/jsref/jsref_pop.asp
1. The pop() method removes the last element of an array, and returns that element.
2. Note: This method changes the length of an array.
3. Tip: To remove the first element of an array, use the shift() method.
*/
console.log(avengers.pop());


/*
shift method / Source: https://www.w3schools.com/jsref/jsref_shift.asp
1. The shift() method removes the first item of an array.
2. Note: This method changes the length of the array.
3. Note: The return value of the shift method is the removed item.
4. Tip: To remove the last item of an array, use the pop() method.
5. Note: this method will change the original array.
*/
console.log(avengers.shift());


/*
push method / Source: https://www.w3schools.com/jsref/jsref_push.asp
1. The push() method adds new items to the end of an array, and returns the new length.
2. Note: The new item(s) will be added at the end of the array.
3. Note: This method changes the length of the array.
4. Tip: To add items at the beginning of an array, use the unshift() method.
*/
console.log(avengers.push());


/**
unshift method / Source: https://www.w3schools.com/jsref/jsref_push.asp
1. The push() method adds new items to the end of an array, and returns the new length.
2. Note: The new item(s) will be added at the end of the array.
3. Note: This method changes the length of the array.
4. Tip: To add items at the beginning of an array, use the unshift() method.
 */
console.log(avengers.unshift());
//console.log(avengers.concat(avengers_1), avengers.concat('Doctor Strange'));
//console.log(avengers.join('&'));

/*
join()method
1. turn the array into a string
*/
console.log(avengers.join());

/* 
slice() method
1. creates a subarray; effectively chopping out a slice of an original array, starting at one position and 
finishing at another. 
*/
console.log(avengers.slice(1,2));


/* 
splice() method
1. removes items from an array then inserts new items in their place.
2. The first number in the parentheses tells us the index at which to start the splice. In the example we 
started at index 3, which is the fourth item in the array ('Hulk'). The second number tells us how many items to 
remove from the array. In the example, this was just one item. 
3. used to insert values into an array at a specific index without removing any items, by indicating that zero 
items are to be removed: 
*/
console.log(avengers.splice(1, 0, 'Daniel'));


/*
reverse() method
1. We can reverse the order of an array using the reverse() method:
2. Note that this changes the order of the array permanently.
*/
console.log(avengers.reverse());


/*
sort() method
1. We can sort the order of an array using the sort() method:
2. It is alphabetical order by default for String objects. Note that this also changes the order of the array 
permanently.
*/
console.log(avengers.sort());


/*
indexOf() method
1. We can find out if an array contains a particular value using the indexOf() method to find the first occurrence
   of a value in an array.
2. If the item is in the array, it will return the index of the first occurrence of that item:
3. If the item is not in the array, it will return -1
*/
console.log(avengers.indexOf('Thanus'));


/*
include() method
1. This returns a boolean value depending on whether the array contains a particular element or not:
2. You can also add an extra parameter to indicate which index to start the search from:
*/
console.log(avengers.includes('Thanus'));


/*
set
1. Sets were introduced to the specification in ES6.
2. A set is a data structure that represents a collection of unique values, so it cannot include any duplicate 
values. They are similar in concept to a mathematical set, although (for the time being at least) they don't 
contain mathematical set operations such as union, intersection and product.
3. Sets offer a useful way to keep track of data without having to check if any values have been duplicated. 
It's also quick and easy to check if a particular value is in a set, which can be a slow operation if an array 
is used.
*/

let narutoCharacters = new Set();
// other way
// narutoCharacters.add('Naruto');
// narutoCharacters.add('Kakashi');
// narutoCharacters.add('Sasuke');
// narutoCharacters.add('Sakura');

// other way
// Multiple items can be added to the set by repeating the add() method:
narutoCharacters.add('Naruto').add('Kakashi').add('Sasuke').add('Sakura');

// other way
narutoCharacters = new Set(['Naruto', 'Kakashi', 'Sasuke', 'Sakura']);

// other way
// let narutoCharacters = new Set().add('Naruto).add('Kakashi').add('Sasuke').add('Sakura'));

// other way
/*
1. All non-primitive values, such as arrays and objects, are considered unique values, even if they contain the 
same values. On the face of it, this appears to allow duplicate values appear in a set:
*/
 narutoCharacters = new Set().add([1]).add([2]).add([3]);

console.log(narutoCharacters);
document.getElementById('naruto').innerHTML = narutoCharacters;


/*
size() method / Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/size
1. The number of values in a set can be found using the size() method:
*/
console.log(narutoCharacters.size);









//const mixedArray = [ null, 1, [], 'two', true ];
//console.log(mixedArray);