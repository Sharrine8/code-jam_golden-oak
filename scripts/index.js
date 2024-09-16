import PopupWithRecipe from "../components/PopupWithRecipe.js";
import { recipes } from "../utils/constants.js";

let scrollAnimate = document.querySelectorAll(".page__section");
window.onscroll = () => {
  scrollAnimate.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 750;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }
  });
};

const recipePopup = new PopupWithRecipe("#recipe-popup", recipes);
recipePopup.setEventListeners();
const toggleBtn = document.querySelector(".navbar__toggle-btn");
const dropDownMenu = document.querySelector(".navbar__dropdown-menu");

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
};
