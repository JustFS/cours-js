let countries;

async function fetchCountries() {
  await fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => (countries = data));

  console.log(countries);
  countriesDisplay();
}

function countriesDisplay() {
  document.body.innerHTML = countries
    .map((country) => `<h3>${country.name.common}</h3>`)
    .join("");
}

window.addEventListener("load", () => {
  fetchCountries();
});
