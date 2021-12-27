// window.addEventListener("mousemove", (e) => {
//   cursor.style.top = e.y + "px";
//   cursor.style.left = e.x + "px";

//   mouse1.style.top = e.y + "px";
//   mouse1.style.left = e.x + "px";

//   mouse2.style.top = e.y + "px";
//   mouse2.style.left = e.x + "px";
// });
window.addEventListener("mousemove", (e) => {
  document.querySelectorAll(".mouse").forEach((span) => {
    span.style.top = e.y + "px";
    span.style.left = e.x + "px";
  });
});
