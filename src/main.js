import "../scss/custom.scss";
import { data } from './data.js';

function generateRecipeCard(recipe) {
    const card = document.createElement('div');
    card.classList.add('col-md');
  
    const img = document.createElement('img');
    img.src = recipe.img;
    card.appendChild(img);
  
    const title = document.createElement('p');
    title.textContent = recipe.title;
    card.appendChild(title);
  
    const ingredients = document.createElement('p');
    ingredients.textContent = recipe.ingredients;
    card.appendChild(ingredients);
  
    return card;
  }
  
  function displayRecipes() {
    const recipeContainer = document.getElementById('recipeContainer');
  
    data.forEach((recipe) => {
      const recipeCard = generateRecipeCard(recipe);
      recipeContainer.appendChild(recipeCard);
    });
  }
  
  displayRecipes();

