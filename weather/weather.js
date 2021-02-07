
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

/*--monthName---*/
document.getElementById("Date").innerHTML = fulldate;

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("hide");
}





/*-----Get Day-----*/
// if statement
// greetings "Preston Pancakes in the Park! 9:00 a.m. Saturday at the city park pavilion."

var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
var date = new Date();
var n = d.getDay()

document.getElementById("Greetings").innerHTML = "Preston Pancakes in the Park! 9:00 am" + " " + days[n] + 
" " + "at the city park pavillion."
+ " ";
// get the name of the week as string and not number



/*---------WEATHER-------*/

const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
fetch(requestURL)
.then(function(response) {
    return response.json();
})
.then(function (jsonObject) {
    console.table(jsonObject); //temporary checking for valid response and data parsing
})

const towns = jsonObject['towns'];

for (let i = 0; i < towns.length; i++ ); //{(how would you do this with a foreach method?)

let card = document.createElement('section');
let h2 = document.createElement('h2');
h2.textContent = towns[i].name + ' ' + towns[i].lastname;
card.appendChild(h2);
document.querySelector('div.towns').appendChild(card);

image.setAttribute('src', towns[i].imageurl);
