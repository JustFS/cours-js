const circles = document.querySelectorAll(".circles");

window.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    circle.style.left = e.x + "px";
    circle.style.top = e.y + "px";
  });
});

// window.addEventListener("mousemove", (e) => {
//   circle1.style.left = e.x + "px";
//   circle1.style.top = e.y + "px";

//   circle2.style.left = e.x + "px";
//   circle2.style.top = e.y + "px";

//   circle3.style.left = e.x + "px";
//   circle3.style.top = e.y + "px";
// });
