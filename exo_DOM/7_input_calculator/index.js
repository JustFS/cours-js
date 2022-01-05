const buttons = document.querySelectorAll("button");

function addition() {
  result.textContent = parseInt(number1.value) + parseInt(number2.value);
}
function substract() {
  result.textContent = parseInt(number1.value) - parseInt(number2.value);
}
function multi() {
  result.textContent = parseInt(number1.value) * parseInt(number2.value);
}
function divide() {
  result.textContent = parseInt(number1.value) / parseInt(number2.value);
}

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);

    if (number1.value && number2.value) {
      switch (e.target.id) {
        case "plus":
          addition();
          break;
        case "minus":
          substract();
          break;
        case "time":
          multi();
          break;
        case "div":
          divide();
          break;
        default:
          null;
      }
    } else {
      alert("Veuillez remplir les 2 inputs");
    }
  });
});
