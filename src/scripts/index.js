import PopupWithRecipe from "../components/PopupWithRecipe.js";
import { recipes } from "../utils/constants.js";

const recipePopup = new PopupWithRecipe("#recipe-popup", recipes);
recipePopup.setEventListeners();
const toggleBtn = document.querySelector(".toggle__btn");
const dropDownMenu = document.querySelector(".dropdown__menu");
const cardsList = [...document.querySelectorAll(".card")];
console.log(cardsList);
cardsList.forEach((card) => {
  card.addEventListener("click", () => {});
});

toggleBtn.onclick = function () {
  dropDownMenu.classList.toggle("open");
  const isOpen = dropDownMenu.classList.contains("open");
};
