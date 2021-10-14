const title = document.querySelector(".title");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const imgMain = document.getElementById("main-img");
const popup = document.querySelector(".popup");
const btnPopup = document.querySelector("#popup-btn");

btn1.addEventListener("click", () => {
  imgMain.style.filter = "blur(1px) sepia(70%)";
});

btn2.addEventListener("click", () => {
  document.body.style.animation = "shake 1s";
});

btn3.addEventListener("click", () => {
  popup.style.right = "10px";
});

btnPopup.addEventListener("click", () => {
  popup.style.right = "-300px";
});

// Injecter une classe
title.addEventListener("click", () => {
  // title.classList.add("active");
  // title.classList.remove("title");

  // Le toggle teste si la classe est présente, si elle l'est il la supprime, si elle ne l'est pas il l'ajoute
  title.classList.toggle("active");
});

//-----------------------------------------------------------
// MOUSEMOVE

// le paramètre "e" (e pour Event) récupère donne les données de l'événement
imgMain.addEventListener("mousemove", (e) => {
  imgMain.style.left = e.x + "px";
});
