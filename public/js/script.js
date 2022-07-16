const hamburger = document.querySelector(".hamburger");
const navSections = document.querySelector(".nav-sections");
const slider = document.querySelector(".slider-container");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navSections.classList.toggle("active")
    slider.classList.toggle("active")
})

