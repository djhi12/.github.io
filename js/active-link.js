document.addEventListener("DOMContentLoaded", function () {
    const navItems = document.querySelectorAll(".navbar-nav .nav-item");

    navItems.forEach(function (item) {
        item.addEventListener("click", function () {
            navItems.forEach(function (navItem) {
                navItem.classList.remove("active");
            });
            item.classList.add("active");
        });
    });
});