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
