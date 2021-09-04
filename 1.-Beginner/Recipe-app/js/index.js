const button = document.getElementById("button");
const meal = document.getElementById("container");
const MEAL_API = `https://www.themealdb.com/api/json/v1/1/random.php`;

button.addEventListener("click", async () => {
  const {
    data: { meals },
  } = await axios.get(MEAL_API);
  console.log(meals[0]);
  showMeal(meals[0]);
});

const showMeal = (meals) => {
  const { strInstructions, strMeal, strMealThumb, strYoutube } = meals;
  const ingredientes = breakData(meals);
  meal.innerHTML = `
     <div class="cont-meal-ing">
      <img class="img" src=${strMealThumb}>
      <div class="meal-ingredients">
        <h4>${strMeal}</h4>
        <div class="instrutions">
        <p>${strInstructions}</p>
        </div>
      </div>
      </div>
      <div class='ingredients'>
      <h4>Ingredients</h4>
      <ul class='list'>
        ${ingredientes.map((ingredient) => `<li>${ingredient}</li>`).join("")}
      </ul>
      <h4>Video</h4>
      <iframe class='vid'
          src='https://www.youtube.com/embed/${strYoutube.slice(-11)}' >
          </iframe>
      </div>
  `;

  console.log(strInstructions, strMeal, strMealThumb, strYoutube, ingredientes);
};

const breakData = (meals) => {
  const ingredientes = [];
  let count = 1;
  while (count <= 20) {
    if (meals[`strIngredient${count}`]) {
      ingredientes.push(
        `${meals[`strIngredient${count}`]} - ${meals[`strMeasure${count}`]}`
      );
    }
    count++;
  }

  return ingredientes;
};
