const counterDisplay = document.querySelector('h3');
const precisionDisplay = document.querySelector('h4');
let score = 0;
let totalClick = 0;
let bubbleNumber = 0;

const bubbleMaker = () => {
  const bubble = document.createElement("span");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.left = Math.random() * 100 + "%";
  bubble.style.top = Math.random() * 100 + 50 + "%";

  bubbleNumber++;
  console.log(bubbleNumber);
  setTimeout(() => {
    bubble.remove();
  }, 8000);

  bubble.addEventListener('click', () => {
    score++;
    counterDisplay.textContent = score;
    bubble.remove();
  })
};

setInterval(bubbleMaker, 300);

document.body.addEventListener('click', () => {
  totalClick++;
  precisionDisplay.textContent = `Précision : ${Math.round(score / totalClick * 100)}%`;
})

