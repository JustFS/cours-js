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

//--------------------------------------------
const btn2 = document.getElementById("btn-2");
const img = document.querySelector("#img");

btn2.addEventListener("click", () => {
  img.style.filter = "blur(3px) brightness(120%) sepia(70%)";
});

//--------------------------------------------
// MOUSEMOVE
//----------

img.addEventListener("mousemove", (e) => {
  console.log(e);
  img.style.left = e.pageX + "px";
});
