const bubbleMaker = () => {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.top = Math.random() * 100 + 50 + "%";
};

setInterval(bubbleMaker, 300);

// for (i = 0; i < 300; i++) {
//   bubbleMaker();
// }
