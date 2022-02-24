const divContent = document.querySelector(".main__content");
const textBtn = divContent.querySelector(".main__text-btn");
const textSpan = divContent.querySelector(".main__text-span");
const textParagraph = divContent.querySelector(".main__text--visibility");

textBtn.addEventListener("click", function() {
    this.classList.toggle("main__text-btn--show-more");

    if (this.textContent === "Читать далее") {
        this.textContent = "Скрыть";
    } else {
        this.textContent = "Читать далее";
    }

    if (window.screen.width < 1440) {
        textSpan.classList.toggle("main__text-span--active");
    }

    if (window.screen.width < 768) {
        textParagraph.classList.toggle("main__text--visibility-active");
    }
});