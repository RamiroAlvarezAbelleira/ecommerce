const hamburger = document.querySelector(".hamburger");
const navSections = document.querySelector(".nav-sections");
const slider = document.querySelector(".slider-container");
const link1 = document.querySelector(".nav-link1");
const link2 = document.querySelector(".nav-link2");
const link3 = document.querySelector(".nav-link3");
const link4 = document.querySelector(".nav-link4");
const link5 = document.querySelector(".nav-link5");
const link6 = document.querySelector(".nav-link6");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active")
    navSections.classList.toggle("active")
    link1.classList.toggle("active")
    link2.classList.toggle("active")
    link3.classList.toggle("active")
    link4.classList.toggle("active")
    link5.classList.toggle("active")
    link6.classList.toggle("active")
    slider.classList.toggle("active")
    
})

