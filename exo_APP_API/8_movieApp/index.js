const form = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const resultDisplay = document.getElementById("result");
let movies = [];
let list = [];
let search = "";

const fetchMovies = async () => {
  await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
  )
    .then((res) => res.json())
    .then((data) => (movies = data.results));

  // le console.log attend l'exécution du fetch (await)
  console.log(movies);
};

const fetchList = async () => {
  await fetch(
    "https://api.themoviedb.org/3/list/7094088?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR"
  )
    .then((res) => res.json())
    .then((data) => (list = data.items));

  console.log(list);
};

const moviesDisplay = async (array) => {
  array.length = 12;

  const dateParser = (date) => {
    [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  resultDisplay.innerHTML = array
    .sort((a, b) => {
      return b.vote_average - a.vote_average;
    })
    .map(
      (movie) =>
        `
          <li class="movie-card">
            <h2>${movie.title}</h2>
            ${
              movie.release_date
                ? "<p>Date de sortie :" +
                  dateParser(movie.release_date) +
                  "</p>"
                : ""
            }
            
            <img src=${
              movie.poster_path
                ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path
                : "./img/poster.jpg"
            }  >
            <p>${movie.overview}</p>
            <h4>Note moyenne : ${movie.vote_average}/10 ${
          movie.vote_average > 6.5 ? "🔥" : "❄️"
        }</h4>
          </li>
        `
    )
    .join("");
};

searchInput.addEventListener("input", (e) => {
  search = e.target.value;
  fetchMovies();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  moviesDisplay(movies);
});

buttonList.addEventListener("click", async () => {
  await fetchList();
  moviesDisplay(list);
});

// https://api.themoviedb.org/3/list/7094088?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR

// https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=land&language=fr-FR

// https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=en-US
