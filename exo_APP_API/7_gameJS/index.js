let counter = 0;
let counterOnce = true;

function jump() {
  if (character.classList == "animate") {
    return;
  } else {
    character.classList.add("animate");
    setTimeout(() => {
      character.classList.remove("animate");
    }, 300);
  }
}

function startGame() {
  block.style.animation = "block 1s infinite linear";

  let gameCheck = setInterval(() => {
    let charLeft = character.offsetLeft + character.offsetWidth;
    let charTop = character.offsetHeight + character.offsetTop;

    if (charLeft >= block.offsetLeft + 12 && block.offsetTop < charTop) {
      alert("Perdu, votre score est de : " + counter);
      counter = 0;
      scoreSpan.textContent = counter;
      block.style.animation = "none";
      clearInterval(gameCheck);
    } else if (block.offsetLeft < 20) {
      if (counterOnce) {
        counter++;
        scoreSpan.textContent = counter;
        counterOnce = false;
        setTimeout(() => {
          counterOnce = true;
        }, 700);
      }
    }
  }, 10);
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    startGame();
  }
});

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    jump();
  }
});
