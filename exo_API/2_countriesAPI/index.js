const countriesContainer = document.querySelector(".countries-container");
let search = "";

function countriesDisplay() {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      countriesContainer.innerHTML = data
        .filter((country) =>
          country.translations.fra.common
            .toLowerCase()
            .includes(search.toLocaleLowerCase())
        )
        // .sort((a, b) => a.name.common.localeCompare(b.name.common))
        .sort((a, b) => b.population - a.population)
        .slice(0, 12)
        .map(
          (country) =>
            `
              <div class="card">
              <img src=${country.flags.svg} alt="Drapeau ${
              country.translations.fra.common
            }" >
              <h2>${country.translations.fra.common}</h2>
              <h4>${country.capital}</h4>
              <p>Population : ${country.population.toLocaleString()}</p>
              </div>
      `
        )
        .join("");
    });
}

countriesDisplay();

inputSearch.addEventListener("input", () => {
  search = inputSearch.value;
  countriesDisplay();
});
