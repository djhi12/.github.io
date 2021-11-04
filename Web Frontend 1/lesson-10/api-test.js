/*--------DAY-------*/
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




/*-------WEATHER------*/
    const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=9c01ce8bb70138120ae5d70bfa11d2c6&units=imperial';
    fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
      console.log(jsObject);


    document.getElementById('current-temp').textContent = jsObject.main.temp;

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
const desc = jsObject.weather[0].description;  // note how we reference the weather array
document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
document.getElementById('icon').setAttribute('alt', desc);

});


    

    /*
    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ); //{(how would you do this with a foreach method?)
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    card.appendChild(h2);
    document.querySelector('div.api').appendChild(card);

    image.setAttribute('src', prophets[i].imageurl);

    */


   

