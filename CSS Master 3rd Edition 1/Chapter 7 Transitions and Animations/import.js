const clickHandler = () => {
    const btn = document.querySelector('button');  
    document.body.classList.add('body');


btn.addEventListener('click', clickHandler);
console.log(btn);
}