const cube = document.querySelector(".cube");
let haut = 0;
let gauche = 0;

window.addEventListener("keydown", (e) => {
  console.log(e.key);

  switch (e.key) {
    case "ArrowDown":
      haut = haut + 40;
      cube.style.top = haut + "px";
      break;
    case "ArrowUp":
      haut = haut - 40;
      cube.style.top = haut + "px";
      break;
  }
});
