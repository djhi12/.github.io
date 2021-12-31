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


 /******** Types of Events ********/
// Mouse Events
const clickParagraph = document.getElementById('click');

clickParagraph.addEventListener('click', () => console.log('click'));
clickParagraph.addEventListener('mousedown', () => console.log('down'));
clickParagraph.addEventListener('mouseup', () => console.log('up'));


// ondblclick Event
const dblclickParagraph = document.getElementById('dblclick');
dblclickParagraph.addEventListener('dblclick', highlight);

function highlight(event) {
    event.target.classList.toggle('highlight');
}

// mouseover event
const mouseParagraph = document.getElementById('mouse');
mouseParagraph.addEventListener('mouseover', highlight);
mouseParagraph.addEventListener('mouseout', highlight);
mouseParagraph.addEventListener('mousemove', () => (console.log('You moved!')));


/******* Keyboard Events ********/
addEventListener('keydown', highlight);
addEventListener('keyup', (event) => console.log(`You stopped pressing the key on ${new Date}`));

addEventListener('keydown', (event) => console.log(`You pressed ${event.key}`));


/******* Modifier Keys ********/
addEventListener('keydown', (event) => console.log(`You pressed the ${event.key} character`));

// KeyboardEvent.shiftKey


  // KeyboardEvent.ctrlKey
 addEventListener('keydown', (event) => {
     if (event.key === 'c' && event.ctrlKey) {
        console.log('Action Canceled!');
     }
 });

 
 /****** Touch Events *******/
// console.log('Sample if the code is working');


/******* Removing Event Listeners *******/










