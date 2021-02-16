const btn = document.getElementById("btn");
const text = document.getElementById("text");
const btn2 = document.getElementById("btn2");
const img = document.querySelector(".img");
const mouseEvent = document.querySelector(".mouse-event");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");

// CLICK
// premier paramètre : événement // 2ème : action
btn.addEventListener("click", () => {
  text.classList.toggle("show");
});

btn2.addEventListener("click", () => {
  img.classList.toggle("show");
});

// MOUSEMOVE
mouseEvent.addEventListener("mousemove", (event) => {
  horizontal.innerHTML = event.x;
  vertical.innerHTML = event.y;
  mouseEvent.style.left = (event.x / window.innerWidth) * 100 + "%";
  mouseEvent.style.top = (event.y / window.innerHeight) * 100 + "%";

  if (event.x > 400) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
});
