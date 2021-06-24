fetch("https://api.blablagues.net/?rub=blagues")
  .then((res) => res.json())
  .then((data) => {
    console.log(data.data.date);
    const content = data.data.content;

    function dateParser(date) {
      let [yy, mm, dd] = date.split(" ")[0].split("-");
      return [dd, mm, yy].join("/");
    }

    document.body.innerHTML = `
      <div class="joke">
        <h2>${content.text_head}</h2>
        <h3>${content.text !== "" ? content.text : content.text_hidden}</h3>
        <p>${dateParser(data.data.date)}</p>
      </div>
    `;
  });
