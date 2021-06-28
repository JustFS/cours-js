const countriesContainer = document.querySelector(".countries-container");
const inputSearch = document.getElementById("search");
let countriesArray = [];
let search = "";

async function fetchCountries() {
  await fetch(
    "https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag"
  )
    .then((res) => res.json())
    .then((data) => (countriesArray = data));

  console.log(countriesArray);
}

async function countriesDisplay() {
  await fetchCountries();

  countriesContainer.innerHTML = countriesArray
    .filter((country) =>
      country.name.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.population - a.population)
    .map(
      (country) =>
        `
        <div class="card">
          <img src=${country.flag} alt="Drapeau de ${country.name}" >
          <h2>${country.name}</h2>
          <h4>${country.capital}</h4>
          <p>Population : ${country.population.toLocaleString()}</p>
        </div>
      `
    )
    .join("");
}

countriesDisplay();

inputSearch.addEventListener("input", (e) => {
  search = inputSearch.value;
  countriesDisplay();
});
