const app = document.querySelector(".app");

const getJoke = () => {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data.content);
      const joke = data.data.content;

      app.innerHTML = `
        <h3>${joke.text_head}</h3>
        <p>${joke.text !== "" ? joke.text : joke.text_hidden}</p>
    `;
    });
};
// getJoke();
app.addEventListener("click", getJoke);
