const btn = document.getElementById("btn");
const text = document.getElementById("text");
const btn2 = document.getElementById("btn2");
const img = document.querySelector(".img");
const mouseEvent = document.querySelector(".mouse-event");
const horizontal = document.querySelector(".horizontal");
const vertical = document.querySelector(".vertical");
const question = document.querySelector("#question");
const themeButton = document.querySelectorAll(".theme");

// CLICK
// premier paramètre : événement // 2ème : action
btn.addEventListener("click", () => {
  text.classList.toggle("show");
});

btn2.addEventListener("click", () => {
  img.classList.toggle("show");
});

// MOUSEMOVE
mouseEvent.addEventListener("mousemove", (event) => {
  horizontal.innerHTML = event.x;
  vertical.innerHTML = event.y;
  mouseEvent.style.left = (event.x / window.innerWidth) * 100 + "%";
  mouseEvent.style.top = (event.y / window.innerHeight) * 100 + "%";

  if (event.x > 400) {
    document.body.style.filter = "blur(3px)";
  } else {
    document.body.style.filter = "none";
  }
});

// INPUT event
question.addEventListener("input", (event) => {
  // event.target.value recupère ce qui est tapé dans l'input
  console.log(event.target.value);
  // document.querySelector(".result").innerHTML = event.target.value;
});

// SWITCH
themeButton.forEach((button) => {
  button.addEventListener("click", (event) => {
    document.body.classList.remove("dark-theme", "yellow-theme", "green-theme");

    switch (event.target.id) {
      case "dark":
        document.body.classList.add("dark-theme");
        break;
      case "yellow":
        document.body.classList.add("yellow-theme");
        break;
      case "green":
        document.body.classList.add("green-theme");
        break;
      // toujous finir le switch par un default case
      default:
        null;
    }
  });
});
