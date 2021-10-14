const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");

window.addEventListener("mousemove", (e) => {
  c1.style.left = e.x + "px";
  c1.style.top = e.y + "px";

  c2.style.left = e.x + "px";
  c2.style.top = e.y + "px";

  c3.style.left = e.x + "px";
  c3.style.top = e.y + "px";
});
