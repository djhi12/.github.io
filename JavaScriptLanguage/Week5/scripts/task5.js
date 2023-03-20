/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date

// Step 2: Declare another variable to hold the day of the week

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )

// Step 4: Declare a variable to hold a message that will be displayed

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2

/* FETCH */
// Step 1: Declare a global empty array variable to store a list of temples

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples

// Step 3: Create another function called getTemples. Make it an async function.
// Step 4: In the function, using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'. Create a variable to hold the response from your fetch. You should have the program wait on this line until it finishes.
// Step 5: Convert your fetch response into a Javascript object ( hint: .json() ). Store this in the templeList variable you declared earlier (Step 1). Make sure the the execution of the code waits here as well until it finishes.
// Step 6: Finally, call the output function and pass it the list of temples. Execute your getTemples function to make sure it works correctly.

// Step 7: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples

// Step 8: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples

// Step 9: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files

// Step 1
const currentDate2 = new Date();

// Step 2
const dayOfWeek = currentDate2.getDay();

// Step 3
// Note: Sunday is considered the first day of the week (0)
// and Saturday is considered the last day (6)
// Therefore, we check if the day is between Monday (1) and Friday (5)
if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    // Step 4a
    const message = 'Hang in there!';
    console.log(message);
} else {
    // Step 4b
    const message = 'Woohoo! It is the weekend!';
    console.log(message);
}

// ----- SWITCH, CASE, BREAK
// Step 1: Declare a new variable to hold the message.
let message;

// Step 2: Get the day of the week as a number (0 = Sunday, 1 = Monday, etc.).
// let dayOfWeek2 = new Date().getDay();

// Step 3: Use a switch statement to set the message variable to the day of the week as a string.
switch (dayOfWeek) {
    case 0:
        message = "Sunday";
        break;
    case 1:
        message = "Monday";
        break;
    case 2:
        message = "Tuesday";
        break;
    case 3:
        message = "Wednesday";
        break;
    case 4:
        message = "Thursday";
        break;
    case 5:
        message = "Friday";
        break;
    case 6:
        message = "Saturday";
        break;
}

// Step 4: Print the message to the console.
console.log("Today is " + message + ".");


// ----- OUTPUT CHANGES ---------

// Get the HTML elements by their ID
const message1Element = document.getElementById("message1");
const message2Element = document.getElementById("message2");

// Define the messages
const message1 = "Hello world!";
const message2 = "How are you today?";

// Assign the messages to the HTML elements
message1Element.textContent = message1;
message2Element.textContent = message2;


// ------- FETCH --------
// Task 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Task 2: Declare the output function
function output(temples) {
    const templesEl = document.getElementById('temples');
    templesEl.innerHTML = ''; // clear existing content

    for (let i = 0; i < temples.length; i++) {
        const temple = temples[i];

        // create HTML elements
        const articleEl = document.createElement('article');
        const h3El = document.createElement('h3');
        const h4El1 = document.createElement('h4');
        const h4El2 = document.createElement('h4');
        const imgEl = document.createElement('img');

        // set properties of HTML elements
        h3El.textContent = temple.templeName;
        h4El1.textContent = temple.location;
        h4El2.textContent = temple.dedicated;
        imgEl.src = temple.imageUrl;
        imgEl.alt = temple.templeName;

        // append child elements to article
        articleEl.appendChild(h3El);
        articleEl.appendChild(h4El1);
        articleEl.appendChild(h4El2);
        articleEl.appendChild(imgEl);

        // append article to temples element
        templesEl.appendChild(articleEl);
    }
}

// Task 3: Declare the getTemples function as an async function
async function getTemples() {
    // Task 4: Call the fetch method to get data from the API
    const response = await fetch('https://byui-cse.github.io/cse121b-course/week05/temples.json');
    // Task 5: Convert the response to a JavaScript object and store it in the templeList variable
    templeList = await response.json();
    // Task 6: Call the output function and pass it the templeList
    output(templeList);
}

// Task 7: Declare the reset function
function reset() {
    const templesEl = document.getElementById('temples');
    templesEl.innerHTML = '';
}

// Task 8: Declare the sortBy function
function sortBy() {
    reset();
    const sortByEl = document.getElementById('sortBy');
    const sortByValue = sortByEl.value;
    templeList.sort((a, b) => a[sortByValue].localeCompare(b[sortByValue]));
    output(templeList);
}

// Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
const sortByEl = document.getElementById('sortBy');
sortByEl.addEventListener('change', sortBy);

