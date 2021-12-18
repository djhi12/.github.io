// import "/Weather/Weather-JS/date.js/";



/******* Date *******/
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const newDate =  new Date();


// Get Day
const showDay = newDate.getDay();
const showDayArray = dayNames[showDay];
console.log(showDayArray);


// Get Date
const showDate = newDate.getDate();
console.log(showDate);

// Get Month
const showMonth = newDate.getMonth();
const showMonthArray = monthNames[showMonth];
console.log(showMonthArray);

// Get Year
const showYear = newDate.getFullYear();
console.log(showYear);

// Get Full Date
const showFullDate = showDayArray + ", " + showMonthArray + " " + showDate + " " + showYear;
console.log(showFullDate)

document.getElementById("date").innerHTML = showFullDate;
