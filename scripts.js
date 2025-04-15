let currentPageNumber = 0;
let filteredMeals = meals;
let filterIngredientsSize = 0;
const originalMeals = [...meals];
let favouritesList = [];
let sortAlpha = false;
let sortReverseAlpha = false;
const maxPerPage = 20;
let light = 9;
let moderate = 10;
let advanced = 14;
let cheap = 6;
let regular = 7;
let expensive = 9;
let quick = 30;
let average = 31;
let long = 41;

getIngredientsSizing(meals);

function showCards() {
  const cardContainer = document.getElementById("card-container");
  const defaultCard = document.querySelector(".card");

  for (let i = currentPageNumber; i < currentPageNumber + maxPerPage && i < filteredMeals.length; i++) { 
    let meal = filteredMeals[i];
    let displayCard = defaultCard.cloneNode(true); 
    createMealCard(displayCard, meal);
    displayCard.addEventListener("click", () => {
      showIngredientsPanel(meal);
    });
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

  let difficultyLabel = displayCard.querySelector(".difficulty");
  if(meal.ingredients.length <= light){
    difficultyLabel.textContent = "Easy";
    difficultyLabel.classList.add("easy");
  } else if(meal.ingredients.length >= moderate && meal.ingredients.length < advanced){
    difficultyLabel.textContent = "Medium";
    difficultyLabel.classList.add("medium");
  } else {
    difficultyLabel.textContent = "Hard";
    difficultyLabel.classList.add("hard");
  }

  let priceLabel = displayCard.querySelector(".price");
  if(meal.estimatedCostUSD <= cheap){
    priceLabel.textContent = "$";
  } else if(meal.estimatedCostUSD > cheap && meal.estimatedCostUSD < expensive){
    priceLabel.textContent = "$$";
  } else {
    priceLabel.textContent = "$$$";  }

  let timeLabel = displayCard.querySelector(".time");
  if(meal.estimatedCookTimeMins <= quick){
    timeLabel.textContent = `${meal.estimatedCookTimeMins} mins`;
  } else if(meal.estimatedCookTimeMins > quick && meal.estimatedCookTimeMins < average){
    timeLabel.textContent = `${meal.estimatedCookTimeMins} mins`; 
  } else {
    timeLabel.textContent = `${meal.estimatedCookTimeMins} mins`;
  }

  let heartButton = displayCard.querySelector(".favouriteButton");
  heartButton.addEventListener("click", (event) => {
    event.stopPropagation();
    let alreadyFavourite = favouritesList.includes(meal.title);
    if(alreadyFavourite){
      favouritesList = favouritesList.filter(title => title !== meal.title);
      heartButton.textContent = "♡";
    } else {
      favouritesList.push(meal.title);
      heartButton.textContent = "♥";
    }
  })

}

function filterCards(search) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  currentPageNumber = 0;

  if(search){ //SEARCH BAR
    filteredMeals = meals.filter(meal => meal.title.toLowerCase().includes(search));
  } else {
    filteredMeals = [...originalMeals];
  }

  if(filterIngredientsSize != 0){ //PREP SIZE OR INGREDIENT SIZE
    filteredMeals = filteredMeals.filter(meal => {
      if(filterIngredientsSize == 1) return meal.ingredients.length <= light;
      if(filterIngredientsSize == 2) return meal.ingredients.length >= moderate && meal.ingredients.length < advanced;
      if(filterIngredientsSize == 3) return meal.ingredients.length >= advanced;
    })
  };

  if(sortAlpha){ //ALPHABETICAL SORT
    filteredMeals.sort((x,y) => x.title.localeCompare(y.title));
  } else if (sortReverseAlpha){
    filteredMeals.sort((x,y) => y.title.localeCompare(x.title));
  }

  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  showCards();
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

  document.getElementById("sortAlphaButton").addEventListener("click", () => {
    sortAlpha = !sortAlpha;
    sortReverseAlpha = false;
    updateButtons();
    filterCards(document.getElementById("searchInput").value.toLowerCase());
  });

  document.getElementById("sortReverseAlphaButton").addEventListener("click", () => {
    sortReverseAlpha = !sortReverseAlpha;
    sortAlpha = false;
    updateButtons();
    filterCards(document.getElementById("searchInput").value.toLowerCase());
  });

  document.getElementById("prepFilter").addEventListener("change", function () {
    filterIngredientsSize = parseInt(this.value);
    filterCards(document.getElementById("searchInput").value.toLowerCase());
  });
});

function updateButtons(){
  let AZButton = document.getElementById("sortAlphaButton");
  let ZAButton = document.getElementById("sortReverseAlphaButton");

  if(sortAlpha){
    AZButton.classList.add("on");
    ZAButton.classList.remove("on");
  } else if(sortReverseAlpha){
    ZAButton.classList.add("on");
    AZButton.classList.remove("on");
  } else {
    AZButton.classList.remove("on");
    ZAButton.classList.remove("on");
  }
}


window.addEventListener("scroll", () => {
  const atBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
  if (atBottom) {
    showCards();
  }
});

function getIngredientsSizing(meals) { //Runs once to get the numbers never used again
  let sortedIngredientsLength = meals.map(meal => meal.estimatedCookTimeMins).sort((a, b) => a - b);
  let total =  sortedIngredientsLength.length;

  let smallIndex = Math.floor(total / 3);
  let mediumIndex = Math.floor((2 * total) / 3);

  let small = sortedIngredientsLength[smallIndex];
  let medium = sortedIngredientsLength[mediumIndex];

  console.log(`S: <= ${small} ingredients`);
  console.log(`M: ${small + 1} to ${medium} ingredients`);
  console.log(`L: >= ${medium + 1} ingredients`);
}
