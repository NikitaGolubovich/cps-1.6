const btnChat = document.querySelector(".chat");
const btnPhone = document.querySelector(".phone");
const divOverlay = document.querySelector(".overlay");
const divAside = document.querySelector(".aside");
const divModal = document.querySelector(".modal");
const divChat = document.querySelector(".modal__chat");
const divCall = document.querySelector(".modal__call");
const btnCloseChat = document.querySelector(".close-chat");
const btnCloseCall = document.querySelector(".close-call");

btnChat.addEventListener("click", function() {
    divOverlay.classList.toggle("overlay--index");
    divModal.classList.toggle("modal--active");
    divChat.classList.toggle("modal__chat--active");
});

btnCloseChat.addEventListener("click", function() {
    divOverlay.classList.toggle("overlay--index");
    divModal.classList.toggle("modal--active");
    divChat.classList.toggle("modal__chat--active");
});

btnPhone.addEventListener("click", function() {
    divOverlay.classList.toggle("overlay--index");
    divModal.classList.toggle("modal--active");
    divCall.classList.toggle("modal__call--active");
});

btnCloseCall.addEventListener("click", function() {
    divOverlay.classList.toggle("overlay--index");
    divModal.classList.toggle("modal--active");
    divCall.classList.toggle("modal__call--active");
});