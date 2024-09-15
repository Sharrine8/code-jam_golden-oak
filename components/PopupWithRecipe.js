import Popup from "./Popup.js";

export default class PopupWithRecipe extends Popup {
  constructor(popupSelector, recipes) {
    super(popupSelector);
    this._cardList = [...document.querySelectorAll(".card")];
    this._recipes = recipes;
    this._modalTitle = this._popupElement.querySelector(".modal__title");
    this._modalIngredients = this._popupElement.querySelector(
      ".modal__ingredients"
    );
    this._modalDirections =
      this._popupElement.querySelector(".modal__directions");
    this._modalImage = this._popupElement.querySelector(".modal__image");
  }

  open() {
    this._modalImage.src = this._currentRecipe.image;
    this._modalImage.alt = `Image of ${this._currentRecipe.name}`;
    this._modalTitle.innerText = this._currentRecipe.name;
    this._modalIngredients.innerText = this._currentRecipe.ingredients;
    this._modalDirections.innerText = this._currentRecipe.directions;
    super.open();
  }

  close() {
    super.close();
    this._modalTitle.innerText = "";
    this._modalIngredients.innerText = "";
    this._modalDirections.innerText = "";
  }

  setEventListeners() {
    super.setEventListeners();
    this._cardList.forEach((card) => {
      card.addEventListener("click", () => {
        this._currentRecipe = this._recipes.filter((recipe) => {
          return recipe.name === card.getAttribute("name");
        })[0];
        this.open();
      });
    });
  }
}
