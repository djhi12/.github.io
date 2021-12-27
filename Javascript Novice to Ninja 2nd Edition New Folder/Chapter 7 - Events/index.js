// console.log("Daniel");


/****** Event Listeners ********/

/****** Inline Event Handlers ******/
/*
document.onclick = function (){
    console.log('You click on the page');
}
*/

// document.body.style.backgroundColor = "red";


/******* Using Event Listeners *******/
// document.body.addEventListener('click', doSomething);
// addEventListener('click', () => alert('You click'));

/*
function doSomething() {
   // document.body.classList.toggle("mystyle");
   console.log('Something Happened!');
}

addEventListener('click', doSomething);
*/

/****** Example Code *******/
function doSomething(e) {
    // document.body.classList.toggle("mystyle");
    console.log(e.type);
 }
 
 addEventListener('click', doSomething);

/******* The Event Object *******/


/****** Types of Event *******/


/******* The Event Target *******/
function doSomething1(e1) {
    // document.body.classList.toggle("mystyle");
    console.log(e1.target);
 }
 
 addEventListener('click', doSomething1);


 /****** Coordinates of an Event *******/








