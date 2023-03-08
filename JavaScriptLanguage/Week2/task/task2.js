/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())


// Step 3: declare and instantiate a variable to hold the current year


// Step 4: place the value of the current year variable into the HTML file


// Step 5: declare and instantiate a variable to hold the name of your picture


// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())

const name = document.querySelector("#name").innerHTML = "Daniel John Idorot";
const currentYear = document.querySelector("#year").innerHTML = new Date().getFullYear();
const myImg = document.querySelector("img");
myImg.setAttribute("src", "../task/images/myPhoto.jpg");
myImg.setAttribute("alt", "My Photo");



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods


// Step 2: place the values of the favorite foods variable into the HTML file


// Step 3: declare and instantiate a variable to hold another favorite food


// Step 4: add the variable holding another favorite food to the favorite food array


// Step 5: repeat Step 2


// Step 6: remove the first element in the favorite foods array


// Step 7: repeat Step 2


// Step 8: remove the last element in the favorite foods array


// Step 7: repeat Step 2


const favFoodList1 = ["Adobo ",  "Lechon ", "Chopseuy ", "Tinola ", "Nilaga"];

const favFoodList2 = ["Leche Flan ", "Buko Salad ", "Chocolate Cake ", "Macaroni Salad "];

const favFoodList3 = favFoodList1.concat(favFoodList2);

// comFoods.shift(); // First element
// comFoods.pop(); // Last element

favFoodList3.shift();
favFoodList3.pop();

const foodList = document.querySelector("#food").innerHTML = favFoodList3;

console.log(foodList);






