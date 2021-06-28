let countriesArray = [];

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

  document.body.innerHTML = countriesArray
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

// Trier les pays par population (décroissant)

// Créer un input dans lequel on peut filtrer les pays par nom
