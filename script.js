"use strict";

// Elements

let mobileMenuOpen = false;

const title = document.querySelector("#title");
const titleImage = document.querySelector("#title-image");
const recipeDuration = document.querySelector("#recipe-duration");
const difficulty = document.querySelector("#difficulty");
const create = document.querySelector("#create");
const recipePortionsInput = document.querySelector("#recipe-portions-input");
const recipePortionsButton = document.querySelector("#recipe-portions-button");
const recipeIngredients = document.querySelector("#recipe-ingredients");
const preparationDurationTime = document.querySelector(
  "#preparation-duration-time"
);
const preparationDurationTotalTime = document.querySelector(
  "#preparation-duration-total-time"
);
const preparationText = document.querySelector("#preparation-text");
const creatorImage = document.querySelector("#creator-image");
const creatorName = document.querySelector("#creator-name");

async function includeHTML() {
  var z, i, elmnt, file, xhttp;
  /* Loop through a collection of all HTML elements: */
  z = document.getElementsByTagName("*");
  for (i = 0; i < z.length; i++) {
    elmnt = z[i];
    /*search for elements with a certain atrribute:*/
    file = elmnt.getAttribute("w3-include-html");
    if (file) {
      /* Make an HTTP request using the attribute value as the file name: */
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            elmnt.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            elmnt.innerHTML = "Page not found.";
          }
          /* Remove the attribute, and call this function once more: */
          elmnt.removeAttribute("w3-include-html");
          includeHTML();
        }
      };
      xhttp.open("GET", file, true);
      xhttp.send();
      /* Exit the function: */
      return;
    }
  }
}

async function init() {
  await includeHTML();
}

function render(menu) {
  renderTitle(menu);
  renderAdditionalInfos(menu);
  renderRecipePortionsElements(menu);
  renderIngredients(menu);
  renderPreparation(menu);
  renderCreator(menu);
}

function renderTitle(menu) {
  title.innerHTML = menu.title;
  titleImage.src = menu.image;
}

function renderAdditionalInfos(menu) {
  recipeDuration.innerHTML = menu.additionalInfos.duration;
  difficulty.innerHTML = menu.additionalInfos.difficulty;
  create.innerHTML = menu.additionalInfos.create;
}

function renderRecipePortionsElements(menu) {
  recipePortionsInput.value = menu.portions;
}

function renderIngredients(menu) {
  recipeIngredients.innerHTML = "";
  for (let ingredient of menu.ingredients) {
    recipeIngredients.innerHTML += createIngridientHtml(ingredient, menu);
  }
}

function createIngridientHtml(ingredient, menu) {
  let personCount = +recipePortionsInput.value;
  if (personCount <= 0) {
    personCount = 1;
    recipePortionsInput.value = personCount;
  }
  return `
        <div class="recipe-ingredient">
          <div class="recipe-ingredient-amount">${
            (+ingredient.amount / +menu.portions) * personCount
          }${ingredient.unit}</div>
          <div class="recipe-ingredient-name">${ingredient.name}</div>
        </div>
  `;
}

function renderPreparation(menu) {
  preparationDurationTime.innerHTML = menu.preparation.durationTime;
  preparationDurationTotalTime.innerHTML = menu.preparation.durationTotalTime;
  preparationText.innerHTML = menu.preparation.preparationText;
}

function renderCreator(menu) {
  creatorImage.src = menu.creator.image;
  creatorName.innerHTML = menu.creator.name;
}

function openMobileMenu() {
  const menuButton = document.querySelector(".mobile-menu-button");
  const mobileMenu = document.querySelector(".mobile-menu");
  if (!mobileMenuOpen) {
    menuButton.classList.add("open");
    mobileMenu.classList.add("open");
    mobileMenuOpen = true;
  } else {
    menuButton.classList.remove("open");
    mobileMenu.classList.remove("open");
    mobileMenuOpen = false;
  }
}
