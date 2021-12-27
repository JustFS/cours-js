function getInputValue() {
  if (isNaN(choice.value)) {
    alert("Entrez un nombre avant que je me fâche");
  } else {
    let startingMinutes = choice.value;
    choice.value = "";

    let time = startingMinutes * 60;

    let interval = setInterval(updateCountdown, 1000);

    function updateCountdown() {
      const minutes = Math.floor(time / 60);
      let seconds = time % 60;

      seconds = seconds < 10 ? "0" + seconds : seconds;

      countdown.textContent = `${minutes} : ${seconds}`;
      if (time > 0) {
        time--;
      } else {
        countdown.textContent = `C'est terminé !`;
        clearInterval(interval);
      }
    }
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getInputValue();
});
