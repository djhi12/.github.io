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
   
   const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3530103&appid=a024dcc23ecdc16728b7783d7fe17314&units=imperial';
   fetch(apiURL)
   .then((response) => response.json())
   .then((jsObject) => {
     console.log(jsObject);
   jsObject.wind.speed
   document.getElementById('current-temp').textContent = jsObject.main.temp;
   document.getElementById('windSpeed').textContent = jsObject.wind.speed;
   windSpeed();
   });