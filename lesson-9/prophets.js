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





    const requestURL = 'prophets.json';
    fetch(requestURL)
    .then(function(response) {
        return response.json();
    })
    .then(function (jsonObject) {
        console.table(jsonObject); //temporary checking for valid response and data parsing
    })

    const prophets = jsonObject['prophets'];

    for (let i = 0; i < prophets.length; i++ ); //{(how would you do this with a foreach method?)
    
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;
    card.appendChild(h2);
    document.querySelector('div.cards').appendChild(card);

    image.setAttribute('src', prophets[i].imageurl);


   

