function getJoke() {
  fetch("https://api.blablagues.net/?rub=blagues")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      const { content } = data.data;

      app.innerHTML = `
        <h3>${content.text_head}</h3>
        <p>${content.text !== "" ? content.text : content.text_hidden}</p>
      `;
    });
}

getJoke();
app.addEventListener("click", getJoke);
