const divRepairs = document.querySelector(".main__repairs");
const repairBtn = divRepairs.querySelector(".main__repairs-button");
const repairItem = divRepairs.querySelectorAll(
    ".main__repairs-item--visibility"
);


repairBtn.addEventListener("click", function() {
    this.classList.toggle("main__repairs-button--show-more");

    if (this.textContent === "Показать все") {
        this.textContent = "Скрыть";

        for (let i = 0; i < repairItem.length; i++) {
            let element = repairItem[i];
            element.classList.toggle("main__repairs-item--visibility-active");
        }
    } else {
        this.textContent = "Показать все";

        for (let i = 0; i < repairItem.length; i++) {
            let element = repairItem[i];
            element.classList.toggle("main__repairs-item--visibility-active");
        }
    }
});