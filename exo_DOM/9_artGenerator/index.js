let mouseTop = 0;
let mouseLeft = 0;
let deleteBox = true;
let intervalPlaying = true;

function boxMaker() {
  const box = document.createElement("span");
  document.body.appendChild(box);

  let size = Math.random() * inputRange.value + inputRange.value + "px";
  box.style.height = size;
  box.style.width = size;
  box.style.left = mouseTop + "px";
  box.style.top = mouseLeft + "px";
  box.style.background = inputColor.value;

  // forme de la boite
  let number = Math.floor(Math.random() * 100);
  box.style.clipPath = `polygon(${number}% 0%, ${number}% 0%, 100% ${number}%, 100% 70%, ${number}% 100%, ${number}% 100%, 0% ${number}%, 0% ${number}%)`;
}
function playInterval() {
  if (intervalPlaying) {
    clearInterval(inter);
    intervalPlaying = false;
  } else {
    inter = setInterval(boxMaker, 100);
    intervalPlaying = true;
  }
}

let inter = setInterval(boxMaker, 100);
document.body.addEventListener("click", boxMaker);

document.body.addEventListener("mousemove", (e) => {
  mouseTop = e.x;
  mouseLeft = e.y;
});

btn1.addEventListener("click", playInterval);

window.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.code === "Space") {
    playInterval();
  } else if (e.key === "r") {
    document.querySelectorAll("span").forEach((box) => {
      box.remove();
    });
  }
});
