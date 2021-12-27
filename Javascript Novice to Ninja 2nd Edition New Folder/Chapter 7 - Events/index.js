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

function doSomething() {
    document.body.classList.toggle("mystyle");
}

addEventListener('click', doSomething);
