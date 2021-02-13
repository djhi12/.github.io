
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
var n = d.getDay();
console.log(n);
if (n == 6) {
  document.getElementById("Greetings").innerHTML = "Preston Pancakes in the Park! 9:00 am" + " " + "Saturday" + 
" " + "at the city park pavillion."

document.getElementById("Greetings").classList.toggle("display-greetings");
}






+ " ";
// get the name of the week as string and not number



/*---------WIND CHILL-----------*/
/*
 *Add a computed wind chill value to the weather summary on the town page.
 *Get the two input values of temperature and wind speed.
 *Either calculate and display the windchill factor value or display "N/A"
  (not applicable) if the input values did not meet the requirements.
 */

 // Formula = f = 35.74 + 0.6215 * (t) - 35.75 * s**0.16 + 0.4275 * t * s**0.16
 // f = wind chill factor in Fahrenheit
 // t = air average temperature in Fahrenheit
 // s = wind speed in miles per hour.

 // Input requirements: Windchill temperature is officially defined for temperatures 
 // at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers per hour (3.0 mph).

 // #weatherSummary
 // #Currently
 // #High
 // #windChill
 // #Humidity
 // #windSpeed

 // 

function windSpeed() {

 let t = parseFloat(document.getElementById("current-temp").innerHTML);
 let s = parseFloat(document.getElementById("windSpeed").innerHTML);
 let f = 35.74 + 0.6215 * (t) - 35.75 * s**0.16 + 0.4275 * t * s**0.16;
console.log(t + ":" + s);
 if (t <= 50 && s > 3) {
document.getElementById("output").innerHTML = f.toFixed(2);
 }
  else {
    document.getElementById("output").innerHTML = "N/A";
  }
}

/*---------CURRENT WEATHER-----------*/
const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9c01ce8bb70138120ae5d70bfa11d2c6&units=imperial';
fetch(apiURL)
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);
jsObject.wind.speed
document.getElementById('current-temp').textContent = jsObject.main.temp;
document.getElementById('windSpeed').textContent = jsObject.wind.speed;
windSpeed();
});

 