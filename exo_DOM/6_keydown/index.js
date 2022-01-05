const cube = document.querySelector(".cube");
let haut = 0;
let gauche = 0;

window.addEventListener("keydown", (e) => {
  // console.log(e.key);

  switch (e.key) {
    case "ArrowDown":
      haut = haut + 40;
      cube.style.top = haut + "px";
      break;
    case "ArrowUp":
      haut = haut - 40;
      cube.style.top = haut + "px";
      break;
    case "ArrowLeft":
      gauche = gauche - 40;
      cube.style.left = gauche + "px";
      break;
    case "ArrowRight":
      gauche = gauche + 40;
      cube.style.left = gauche + "px";
      break;
  }

  // connaitre l'emplacement d'une div
  console.log("gauche :" + cube.offsetLeft);
  console.log("haut :" + cube.offsetTop);

  // connaitre les dimensions de l'écran du client
  // console.log(window.innerHeight);
  // console.log(window.innerWidth);
});
