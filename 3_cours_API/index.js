// Structure d'un fetch
// fetch('mon-api.com')
//   .then((res) => res.json())
//   .then((data) => console.log(data))

function getQuote() {
  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);

      document.body.innerHTML = `
        <div class="quote">
          <p>"${data.content}</p>
          <em>${data.author}</em>
        </div>
      `;
    });
}
getQuote();
document.body.addEventListener("click", getQuote);
