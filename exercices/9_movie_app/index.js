const movieApp = document.querySelector(".movie-app");
let sortMovies = false;

const dateFormater = (date) => {
  let [y, m, d] = date.split("-");
  return [d, m, y].join("/");
};

const fetchMovies = () => {
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${
      searchInput.value !== "" ? searchInput.value : "code"
    }&language=fr-FR`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);

      movieApp.innerHTML = data.results
        .slice(0, rangeInput.value)
        .sort((a, b) => {
          if (sortMovies) {
            return b.vote_average - a.vote_average;
          }
        })
        .map(
          (movie) => `
        <div class="movie-card">
        <img src=${
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
            : `./poster.jpg`
        } alt="affiche ${movie.title}" />
        <h2>${movie.title}</h2>
        <p>Sorti le : ${dateFormater(movie.release_date)}</p>
        <p>${movie.vote_average} ⭐</p>
        <h5>Synopsis</h5>
        <p>${movie.overview}</p>
        </div>
        `
        )
        .join("");
    });
};

window.addEventListener("load", fetchMovies);

searchInput.addEventListener("input", fetchMovies);

rangeInput.addEventListener("input", () => {
  fetchMovies();
  rangeInputValue.textContent = rangeInput.value;
});

btnSort.addEventListener("click", () => {
  sortMovies = true;
  console.log(sortMovies);
  fetchMovies();
});
