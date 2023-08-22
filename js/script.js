const mediaQuery = window.matchMedia("(max-width: 767px)"); // Adjust the breakpoint if needed

function handleMediaChange(mediaQuery) {
    if (mediaQuery.matches) {
        // If screen size is small, add the 'white-icon' class
        document.querySelector(".navbar-toggler").classList.add("white-icon");
    } else {
        // If screen size is not small, remove the 'white-icon' class
        document.querySelector(".navbar-toggler").classList.remove("white-icon");
    }
}

// Call the function initially and add a listener for future changes
handleMediaChange(mediaQuery);
mediaQuery.addListener(handleMediaChange);