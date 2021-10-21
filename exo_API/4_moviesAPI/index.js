const moviesContainer = document.querySelector(".movies-container");
const form = document.querySelector("form");
let moviesData = [];

async function fetchMovies() {
  await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${searchInput.value}&language=fr-FR`
  )
    .then((res) => res.json())
    .then((data) => (moviesData = data.results));

  console.log(moviesData);
}

function moviesDisplay() {
  function dateFormater(date) {
    [y, m, d] = date.split("-");
    return [d, m, y].join("/");
  }

  moviesContainer.innerHTML = moviesData
    .map(
      (movie) => `
      <div class="movie-card">
        <h2>${movie.title}</h2>
        <p>Date de sortie : ${
          movie.release_date ? dateFormater(movie.release_date) : "inconnue"
        }</p>

        <img src=${
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : "./poster.jpg"
        } alt="Affiche ${movie.title}">

        <p>${movie.overview}</p>
        <h4>Note moyenne : ${movie.vote_average} ${
        movie.vote_average > 6.5 ? "🥰" : "🤮"
      }</h4>

      </div>`
    )
    .join("");
}

searchInput.addEventListener("input", () => {
  fetchMovies();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  moviesDisplay();
});
