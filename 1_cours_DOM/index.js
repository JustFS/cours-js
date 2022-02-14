const title = document.querySelector("h1");
const btn1 = document.getElementById("btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const popup = document.querySelector(".popup");

title.addEventListener("click", () => {
  title.style.fontFamily = "Verdana";
  title.textContent = "Super cours JS";
});

// Ajout classe
btn1.addEventListener("click", () => {
  // Ajouter classe
  // mainImg.classList.add("active");

  // Supprimer classe
  // mainImg.classList.remove("active");

  // Le toggle teste si la classe est présente dans la balise, si elle y est on la supprime et inversement.
  mainImg.classList.toggle("active");
});

btn2.addEventListener("click", () => {
  document.body.style.animation = "animBody 1s";
});

btn3.addEventListener("click", () => {
  popup.style.right = "10px";
});

popupBtn.addEventListener("click", () => {
  popup.style.right = "-450px";
});

//-----------------------------------------------------
// MOUSEMOVE

// "e" représente toutes les données ratachées à l'Event
title.addEventListener("mousemove", (e) => {
  title.style.left = e.x + "px";
  title.style.top = e.y + "px";
});

//------------------------------------------------------
// SCROLL

window.addEventListener("scroll", (e) => {
  // console.log(window.innerWidth);
  // console.log(window.innerHeight);
  console.log(window.scrollY);
});
