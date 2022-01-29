const form = document.querySelector("form");
const searchInput = document.getElementById("search-input");
const btnFilter = document.querySelectorAll(".btn-sort");
let movies = [];
let list = [];
let search = "";
let sortGoodBad;
let currentData;

const fetchMovies = async () => {
  await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${search}&language=fr-FR`
  )
    .then((res) => res.json())
    .then((data) => (movies = data.results));
  console.log(movies);
};

const fetchList = async () => {
  await fetch(
    "https://api.themoviedb.org/3/list/7094088?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR"
  )
    .then((res) => res.json())
    .then((data) => (list = data.items));
};

const moviesDisplay = async (array) => {
  const dateFormater = (date) => {
    [yy, mm, dd] = date.split("-");
    return [dd, mm, yy].join("/");
  };

  result.innerHTML = array
    .slice(0, 12)
    .sort((a, b) => {
      if (sortGoodBad === "goodToBad") {
        return b.vote_average - a.vote_average;
      } else if (sortGoodBad === "badToGood") {
        return a.vote_average - b.vote_average;
      }
    })
    .map((movie) => {
      function genreFinder() {
        let genreArray = [];
        for (i = 0; i < movie.genre_ids.length; i++) {
          switch (movie.genre_ids[i]) {
            case 28:
              genreArray.push(`<li>Action</li>`);
              break;
            case 12:
              genreArray.push(`<li>Aventure</li>`);
              break;
            case 16:
              genreArray.push(`<li>Animation</li>`);
              break;
            case 35:
              genreArray.push(`<li>Comédie</li>`);
              break;
            case 80:
              genreArray.push(`<li>Policier</li>`);
              break;
            case 99:
              genreArray.push(`<li>Documentaire</li>`);
              break;
            case 18:
              genreArray.push(`<li>Drama</li>`);
              break;
            case 10751:
              genreArray.push(`<li>Famille</li>`);
              break;
            case 14:
              genreArray.push(`<li>Fantasy</li>`);
              break;
            case 36:
              genreArray.push(`<li>Histoire</li>`);
              break;
            case 27:
              genreArray.push(`<li>Horreur</li>`);
              break;
            case 10402:
              genreArray.push(`<li>Musique</li>`);
              break;
            case 9648:
              genreArray.push(`<li>Mystère</li>`);
              break;
            case 10749:
              genreArray.push(`<li>Romance</li>`);
              break;
            case 878:
              genreArray.push(`<li>Science-fiction</li>`);
              break;
            case 10770:
              genreArray.push(`<li>Téléfilm</li>`);
              break;
            case 53:
              genreArray.push(`<li>Thriller</li>`);
              break;
            case 10752:
              genreArray.push(`<li>Guerre</li>`);
              break;
            case 37:
              genreArray.push(`<li>Western</li>`);
              break;
            default:
              break;
          }
        }

        return genreArray.join("");
      }

      return `
        <div class="movie-card">
          <img src=${
            movie.poster_path
              ? "https://image.tmdb.org/t/p/w500/" + movie.poster_path
              : "./img/poster.jpg"
          }  >
          <h2>${movie.title}</h2>
          ${
            movie.release_date
              ? "<p>Sorti le : " + dateFormater(movie.release_date) + "</p>"
              : ""
          }
          <h4> ${movie.vote_average}/10 ⭐</h4>
          
          <ul>${genreFinder()}</ul>
        
          ${movie.overview ? "<h3>Synopsis</h3>" : ""}
          <p>${movie.overview}</p>
          
          <div class="btn">Acheter des places</div>
        </div>
      `;
    })
    .join("");
};

searchInput.addEventListener("input", (e) => {
  search = e.target.value;
  fetchMovies();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentData = movies;
  moviesDisplay(currentData);
});

buttonList.addEventListener("click", async () => {
  await fetchList();
  currentData = list;
  moviesDisplay(currentData);
});

btnFilter.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    sortGoodBad = e.target.id;
    moviesDisplay(currentData);
  });
});

// https://api.themoviedb.org/3/list/7094088?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR

// https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=land&language=fr-FR

// https://api.themoviedb.org/3/genre/movie/list?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=en-US
