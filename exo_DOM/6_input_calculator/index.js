// function addition(a, b) {
//   result.textContent = parseInt(a) + parseInt(b);
// }
// function inputControl() {
//   if (number1.value && number2.value) {
//     return true;
//   }
// }
// plus.addEventListener("click", () => {
//   if (inputControl()) {
//     addition(number1.value, number2.value);
//   } else {
//     alert("Veuillez remplir les 2 inputs");
//   }
// });

function addition(a, b) {
  result.textContent = a + b;
}
function substract(a, b) {
  result.textContent = a - b;
}
function multi(a, b) {
  result.textContent = a * b;
}
function divide(a, b) {
  result.textContent = a / b;
}
function inputControl() {
  if (number1.value && number2.value) {
    return true;
  }
}
document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let x = parseInt(number1.value);
    let y = parseInt(number2.value);

    if (inputControl()) {
      switch (e.target.id) {
        case "plus":
          addition(x, y);
          break;
        case "minus":
          substract(x, y);
          break;
        case "time":
          multi(x, y);
          break;
        case "div":
          divide(x, y);
          break;
        default:
          null;
      }
    } else {
      alert("Veuillez remplir les 2 inputs");
    }
  });
});
