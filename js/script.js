// JavaScript to apply white color to the icon on small screens
function setIconColor() {
    const icon = document.querySelector('.navbar-toggler-icon');
    if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
        icon.classList.add('white');
    } else {
        icon.classList.remove('white');
    }
}

// Initial setup and event listener
setIconColor(); // Set the initial color
window.addEventListener('resize', setIconColor); // Update color on window resize


// Search Icon
const searchToggle = document.getElementById('searchToggle');
const searchInput = document.getElementById('searchInput');
const searchSubmit = document.getElementById('searchSubmit');

searchToggle.addEventListener('click', () => {
    searchInput.classList.toggle('d-none');
    searchSubmit.classList.toggle('d-none');
});





