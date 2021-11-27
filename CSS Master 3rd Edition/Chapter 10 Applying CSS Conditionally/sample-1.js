

// Window matchMedia() Method
function myFunction() {
    const windowSize = document.getElementById("demoMediaQueries");
    if (window.matchMedia("(max-width: 700px)").matches) {
        windowSize.innerHTML = "The screen is less than, or equal to, 700 pixels wide.";
    } else {
        windowSize.innerHTML = "The screen as at least 700 pixels wide."
    }

    console.log(windowSize);
}