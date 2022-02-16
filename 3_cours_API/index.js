// Structure d'un appel à l'API (fetch)
// fetch("mon-lien-api.com")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

const app = document.querySelector(".app");

function generateQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      app.innerHTML = `
        <p>${data.content}</p>
        <em>${data.author}</em>
      `;
    });
}

generateQuote();
app.addEventListener("click", generateQuote);
