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
const onceParagraph = document.getElementById("once");
onceParagraph.addEventListener('click', remove);

function remove(event) {
    console.log('Enjoy this while it lasts!');
    onceParagraph.style.backgroundColor = 'blue';
    onceParagraph.style.color = 'white';
    onceParagraph.style.padding = '10px';
    onceParagraph.removeEventListener('click', remove);

}


/******* Stopping Default Behavior *********/
// preventDefault()
const brokenLink = document.getElementById('broken');
brokenLink.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Broken Link!');
});

// cancellable
// ----- Sample from Mozilla
function preventScrollWheel(event) {
    if (typeof event.cancelable !== 'boolean' || event.cancelable) {
      // The event can be canceled, so we do so.
      event.preventDefault();
    } else {
      // The event cannot be canceled, so it is not safe
      // to call preventDefault() on it.
      console.warn(`The following event couldn't be canceled:`);
      console.dir(event);
    }
  }
  
  document.addEventListener('wheel', preventScrollWheel);


  /******* Event Propagation *******/
// Bubbling
ulElement = document.getElementById('list');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) => 
console.log('Click on ul'));

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'));


/***** Capturing *******/
ulElement = document.getElementById('list1');
liElement = document.querySelector('#list li');

ulElement.addEventListener('click', (event) => 
console.log('Click on ul'), true);

liElement.addEventListener('click', (event) =>
console.log('Clicked on li'), true);


/******** Stopping the Bubbling Phase ********/


/***** Event Delegation ******/


