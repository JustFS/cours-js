const input = document.getElementById("search");
const result = document.getElementById("result");
const form = document.querySelector("form");
let meals = [];

async function fetchMeals(search) {
  await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + search)
    .then((res) => res.json())
    .then((data) => (meals = data.meals));

  console.log(meals);
}

function mealsDisplay() {
  result.innerHTML = meals
    .map((meal) => {
      let ingredient = [];
      for (i = 1; i < 21; i++) {
        if (meal[`strIngredient${i}`]) {
          ingredient.push(
            "<li>" +
              meal[`strIngredient${i}`] +
              " - " +
              meal[`strMeasure${i}`] +
              "</li>"
          );
          console.log(ingredient);
        }
      }

      return `
        <li class="meal">
          <h2>${meal.strMeal}</h2>
          <p>${meal.strArea}</p>
          <img src=${meal.strMealThumb} alt="photo ${meal.strMeal}" >
          <iframe width="449" height="253" src=${meal.strYoutube.replace(
            "watch?v=",
            "embed/"
          )} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <ul>${ingredient.join("")}</ul>
        </li>
    `;
    })
    .join("");
}

input.addEventListener("input", () => {
  fetchMeals(input.value);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mealsDisplay();
});
