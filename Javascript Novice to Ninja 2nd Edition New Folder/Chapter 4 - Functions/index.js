function practice(one, two, three) {
    const solve = one + two + three;
    console.log(solve);
}

practice(1, 2, 3);

/******* Function Expressions ********/
const getRecTArea = (width, height) => {
    return width * height;
};

console.log(getRecTArea(4, 3));



/******* Callbacks *******/
function sing(song, callback, callback1) {
    console.log(`I'm singing along to ${song}`);
    callback();
    callback1();
}

sing('Let it go!', dance, dance1);

function dance() {
    console.log("I'm moving my body to the groove.");
}

function dance1() {
    console.log("I'm moving my body to the groove. Part 1");
}







