const scoreDisplay = document.querySelector(".score");
let score = 0;
let totalClick = 0;

function bubbleMaker() {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);

  let size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.top = Math.random() * 100 + 50 + "%";

  setTimeout(() => {
    bubble.remove();
  }, 10000);

  bubble.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    bubble.remove();
  });
}

setInterval(bubbleMaker, 300);

document.body.addEventListener("click", () => {
  totalClick++;
  console.log((score / totalClick) * 100 + "%");
});
