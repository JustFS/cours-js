const picApi = document.querySelector("#pic");
const quoteApi = document.querySelector("#quote");

const getPicture = () => {
  fetch("https://picsum.photos/2000/1000").then((res) => {
    picApi.innerHTML = `<img src=${res.url} alt="img-picsum">`;
  });

  fetch("https://api.quotable.io/random")
    .then((res) => res.json())
    .then(
      (data) =>
        (quoteApi.innerHTML = `${data.content} <br><br><em>${data.author}</em>`)
    );
};

quoteApi.addEventListener("click", () => {
  getPicture();
});

getPicture();
