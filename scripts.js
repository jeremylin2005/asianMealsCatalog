let currentPageNumber = 0;
let filteredMeals = meals;
const maxPerPage = 20;

function showCards() {
  const cardContainer = document.getElementById("card-container");
  const defaultCard = document.querySelector(".card");

  for (let i = currentPageNumber; i < currentPageNumber + maxPerPage && i < meals.length; i++) { 
    let meal = filteredMeals[i];
    let displayCard = defaultCard.cloneNode(true); 
    createMealCard(displayCard, meal);
    cardContainer.appendChild(displayCard);
  }
  currentPageNumber += maxPerPage;
}

function createMealCard(displayCard, meal) {
  displayCard.style.display = "block";

  const cardHeader = displayCard.querySelector("h2");
  cardHeader.textContent = meal.title;

  const cardImage = displayCard.querySelector("img");
  cardImage.src = meal.image;
  cardImage.alt = meal.title;

  cardImage.addEventListener("click", () => {
    showIngredientsPanel(meal);
  });
}

function showIngredientsPanel(meal){
  const ingredientsPanel = document.getElementById("ingredientsPanel");
  const title = document.getElementById("mealTitle");
  const list = document.getElementById("ingredientsList");
  const instructionsList = document.getElementById("instructionsList");

  title.textContent = meal.title;
  list.innerHTML = "";
  meal.ingredients.forEach(ingredient => {
    let li = document.createElement("li");
    li.textContent = ingredient;
    list.appendChild(li);
  });

  instructionsList.innerHTML = "";
  meal.instructions.forEach(instruction =>{
    let li = document.createElement("li");
    li.textContent = instruction;
    instructionsList.appendChild(li);
  });

  ingredientsPanel.classList.remove("hidden");
}

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!"
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

document.addEventListener("DOMContentLoaded", () => {
  showCards();

  document.getElementById("closeIngredientsPanel").addEventListener("click", () => {
    document.getElementById("ingredientsPanel").classList.add("hidden");
  });  

  document.getElementById("searchInput").addEventListener("input", function () {
    let search = this.value.toLowerCase();
    filterCards(search);
  });
});


window.addEventListener("scroll", () => {
  const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (atBottom) {
    showCards();
  }
});

function filterCards(search) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  currentPageNumber = 0;

  if(search){
    filteredMeals = meals.filter(meal => meal.title.toLowerCase().includes(search));
  } else {
    filteredMeals = meals;
  }

  showCards();
}