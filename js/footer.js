// JavaScript to change icon color on hover
document.addEventListener("DOMContentLoaded", function () {
    const icons = document.querySelectorAll(".svg-icon");
    icons.forEach(icon => {
        icon.addEventListener("mouseover", () => {
            icon.style.color = "orange"; // Change the color on hover
        });
        icon.addEventListener("mouseout", () => {
            icon.style.color = "white"; // Change back to the original color
        });
    });
});