const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  h1.classList.toggle("styleH1");
});

const btn1 = document.querySelector("#btn-1");
const popup = document.querySelector(".popup");

btn1.addEventListener("click", () => {
  // popup.style.visibility = "visible";
  popup.classList.add("popupDisplay");
});

const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", () => {
  // popup.style.visibility = "hidden";
  popup.classList.remove("popupDisplay");
});
