const circles = document.querySelectorAll(".circles");

window.addEventListener("mousemove", (e) => {
  circles.forEach((circle) => {
    circle.style.left = e.x + "px";
    circle.style.top = e.y + "px";
  });
});
