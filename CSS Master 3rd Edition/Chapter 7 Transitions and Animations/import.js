/***********  ********/
const clickHandler = () => {
    const btn = document.querySelector('button');  
    document.body.classList.add('body');


btn.addEventListener('click', clickHandler);
console.log(btn);
}


// Sample
const additionNumber = 5;
const subNumber = 5;
const totalNumber = additionNumber + subNumber;
console.log(totalNumber);


/********* Transitioning Multiple Properties **********/

const changeHandler1 = () => {
    // Select unchecked radio buttons. Returns a NodeList.
    const notFave = document.querySelectorAll('input:not( :checked )');

    // Create a new array form the NodeList
    notFave.forEach( item => {
        // Find the parent node, and add a 'fade' class 
        item.parentNode.classList.add( 'fade' );
        console.log(notFave);
    } );
};

const form = document.querySelector( 'form' );
form.addEventListener( 'change', changeHandler1 );
console.log(changeHandler1);



/************* CSS Animation ************/