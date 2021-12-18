console.log("Hello world!");

/******* What is the DOM? *******/


/****** History of the DOM *******/
// ------ Sample from w3schools
function myFunction() {
  document.getElementById("demo").innerHTML = "Hello World";
  document.getElementById("demo").style.color = "red";
  document.getElementById("demo").style.border = "10px solid green";
  document.getElementById("demo").style.borderRadius = "10px";
  document.getElementById("demo").style.padding = "10px";
  document.getElementById("demo").style.textAlign = "center";
  document.getElementById("demo").classList.toggle("mystyle");
  console.log("h2.nodeType");
}

/******* Getting Elements ********/
document.body.style.backgroundColor = "lightblue";


// nodeType
// ---- Sample from w3schools
var x1 = document.getElementById("myP1").nodeType;
document.getElementById("demo").innerHTML = x1;
console.log(x1)

// nodeName
// ---- Sample from w3schools 
var x = document.getElementById("myP").nodeName;
document.getElementById("demo").innerHTML = x;
console.log(x); // DIV


/******* Legacy DOM Shortcut Methods ********/
// Document.body

// Document.images

// Document.links

// Document.anchors

// Document.forms


/******* Getting An Element By Its ID ******/
document.getElementById("samplePar").style.color = "red";
document.getElementById("samplePar").style.fontSize = "10px";

/****** Get Elements By Their Tag Name *******/


/******* Get Elements By Their Class Name *******/
// document.getElementsByClassName('.class').style.color = "green";
// document.getElementsByClassName('.class').style.fontSize = "40px";

/******** Query Selectors ********/
const HeaderSample = document.querySelector(".header-sample").style.backgroundColor = "red";
console.log(HeaderSample);



