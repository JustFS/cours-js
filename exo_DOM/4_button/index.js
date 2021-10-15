btn.addEventListener("mousemove", (e) => {
  btn.style.setProperty("--x", e.layerX + "px");
  btn.style.setProperty("--y", e.layerY + "px");
});
