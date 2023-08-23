const readMoreBtns = document.querySelectorAll(".readMoreBtn");

readMoreBtns.forEach((readMoreBtn) => {
    readMoreBtn.addEventListener("click", function () {
        const hiddenContent = readMoreBtn.previousElementSibling;
        if (hiddenContent.style.display === "none" || hiddenContent.style.display === "") {
            hiddenContent.style.display = "block";
            readMoreBtn.textContent = "Read less";
        } else {
            hiddenContent.style.display = "none";
            readMoreBtn.textContent = "Read more";
        }
    });
});