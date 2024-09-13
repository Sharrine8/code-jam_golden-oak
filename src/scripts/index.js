const toggleBtn = document.querySelector(".toggle__btn");
const dropDownMenu = document.querySelector(".dropdown__menu");

toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle("open");
    const isOpen = dropDownMenu.classList.contains("open");
}