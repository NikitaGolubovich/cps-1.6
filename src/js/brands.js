const brandsListItem = document.querySelectorAll(
    ".main__brands-item--visibility"
);
const brandsBtn = document.querySelector(".main__brands-button");

brandsBtn.addEventListener("click", function() {
    this.classList.toggle("main__brands-button--show-more");

    if (this.textContent === "Показать все") {
        this.textContent = "Скрыть";

        for (let i = 0; i < brandsListItem.length; i++) {
            let element = brandsListItem[i];
            element.classList.toggle("main__brands-item--visibility");
        }
    } else {
        this.textContent = "Показать все";

        for (let i = 0; i < brandsListItem.length; i++) {
            let element = brandsListItem[i];
            element.classList.toggle("main__brands-item--visibility");
        }
    }
});