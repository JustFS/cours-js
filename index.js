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
  // console.log(e);
  img.style.left = e.pageX + "px";
});

//---------------------------------------------
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");

window.addEventListener("mousemove", (e) => {
  c1.style.left = e.pageX + "px";
  c1.style.top = e.pageY + "px";

  c2.style.left = e.pageX + "px";
  c2.style.top = e.pageY + "px";

  c3.style.left = e.pageX + "px";
  c3.style.top = e.pageY + "px";
});

// Méthode avec forEach
// const circles = document.querySelectorAll(".circle");

// window.addEventListener("mousemove", (e) => {
// circles.forEach((circle) => {
//   circle.style.left = e.pageX + "px";
//   circle.style.top = e.pageY + "px";
// });
// });

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // navbar n'est jamais déclaré car c'ets un id de "nav"
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-50px";
  }
});
