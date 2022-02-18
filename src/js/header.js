const btnBurger = document.querySelector('.burger');
const divOverlay = document.querySelector('.overlay');
const divAside = document.querySelector(".aside");
const btnClose = document.querySelector(".close");

btnBurger.addEventListener("click", function() {
    divOverlay.classList.toggle('overlay--opacity')
    divAside.classList.toggle("aside--active");
});

btnClose.addEventListener("click", function() {
    divOverlay.classList.toggle("overlay--opacity");
    divAside.classList.toggle("aside--active");
});