const h1 = document.querySelector("h1");

h1.addEventListener("click", () => {
  h1.classList.toggle("styleH1");
});

const btn1 = document.querySelector("#btn-1");
const popup = document.querySelector(".popup");

btn1.addEventListener("click", () => {
  // popup.style.visibility = "visible";
  popup.classList.add("popupDisplay");
});

const closeBtn = document.querySelector("#close");

closeBtn.addEventListener("click", () => {
  // popup.style.visibility = "hidden";
  popup.classList.remove("popupDisplay");
});

//--------------------------------------------
const btn2 = document.getElementById("btn-2");
const img = document.querySelector("#img");

btn2.addEventListener("click", () => {
  img.style.filter = "blur(3px) brightness(120%) sepia(70%)";
});

//--------------------------------------------
// MOUSEMOVE
//----------

img.addEventListener("mousemove", (e) => {
  // console.log(e);
  img.style.left = e.pageX + "px";
});

//---------------------------------------------
const c1 = document.querySelector(".c1");
const c2 = document.querySelector(".c2");
const c3 = document.querySelector(".c3");

window.addEventListener("mousemove", (e) => {
  c1.style.left = e.pageX + "px";
  c1.style.top = e.pageY + "px";

  c2.style.left = e.pageX + "px";
  c2.style.top = e.pageY + "px";

  c3.style.left = e.pageX + "px";
  c3.style.top = e.pageY + "px";
});

// Méthode avec forEach
// const circles = document.querySelectorAll(".circle");

// window.addEventListener("mousemove", (e) => {
//   circles.forEach((circle) => {
//     circle.style.left = e.pageX + "px";
//     circle.style.top = e.pageY + "px";
//   });
// });

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    // navbar n'est jamais déclaré car c'ets un id de "nav"
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-50px";
  }
});

//---------------------------------------------
// SWITCH & FOREACH
//-----------------

const themeButtons = document.querySelectorAll(".theme");

themeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);

    document.body.classList.remove(
      "dark-theme",
      "orange-theme",
      "skyblue-theme"
    );

    switch (e.target.id) {
      case "dark":
        document.body.classList.add("dark-theme");
        break;
      case "orange":
        document.body.classList.add("orange-theme");
        break;
      case "skyblue":
        document.body.classList.add("skyblue-theme");
        break;
      default:
        null;
    }

    // function getTheme(color) {
    //   document.body.classList.add(color + "-theme");
    // }
    // getTheme(e.target.id);
  });
});

//-------------------------------------------
// FORMULAIRE
//-----------

const inputName = document.getElementById("name");
const inputPassword = document.getElementById("password");
const gendersInput = document.querySelectorAll(".gender");
const form = document.querySelector("form");
const content = document.querySelector(".content");
let pseudo;
let password;
let gender = "femme";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

inputPassword.addEventListener("input", (e) => {
  password = e.target.value;
});

gendersInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    gender = e.target.id;
    console.log(e);
  });
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked && pseudo && password && gender) {
    const userData = {
      pseudo: pseudo,
      password: password,
      gender: gender,
    };
    console.log(userData);
    inputName.value = "";
    inputPassword.value = "";
    cgv.checked = false;

    // content.textContent = "Pour ne mettre QUE du texte"
    content.innerHTML =
      "<h1 class='password'>Votre mot de passe : " + password + "</h1>";
  } else {
    alert("Veuillez bien remplir tout svp !!!");
  }
});

//-------------------------------------
// KEYPRESS
//---------

const ball = document.querySelector(".ball");
let haut = 0;
let gauche = 0;

window.addEventListener("keypress", (e) => {
  // console.log(e.key);

  // Connaitre la position de la balle
  // console.log(ball.offsetLeft);
  // console.log(ball.offsetTop);

  // Hauteur et largeur de la fenetre en pixel
  // console.log(window.innerHeight);
  // console.log(window.innerWidth);

  switch (e.key) {
    case "z":
      if (haut > 0) {
        haut = haut - 40;
        ball.style.top = haut + "px";
      }
      break;
    case "s":
      haut = haut + 40;
      ball.style.top = haut + "px";
      break;
    case "q":
      gauche = gauche - 40;
      ball.style.left = gauche + "px";
      break;
    case "d":
      gauche = gauche + 40;
      ball.style.left = gauche + "px";
      break;
  }
});

// function ah() {
//   const audio = new Audio();
//   audio.src = "./sounds/z.mp3";
//   audio.play();
// }

// function drum() {
//   const audio = new Audio();
//   audio.src = "./sounds/e.mp3";
//   audio.play();
// }

function ring(letter) {
  const audio = new Audio();
  audio.src = "./sounds/" + letter + ".mp3";
  audio.play();
}

window.addEventListener("keypress", (e) => {
  console.log(e.key);

  if (e.key === ("a" || "z" || "e")) {
    ring(e.key);
  }

  // if (e.key === "a") {
  //   ring();
  // } else if (e.key === "z") {
  //   ah();
  // } else if (e.key === "e") {
  //   drum();
  // }

  // switch (e.key) {
  //   case "a":
  //     ring("a");
  //     break;
  //   case "z":
  //     ring("z");
  //     break;
  //   case "e":
  //     ring("e");
  //     break;
  //   default:
  //     null;
  // }
});

document.body.addEventListener("click", (e) => {
  console.log(e.target);

  if (e.target.tagName !== "BODY") {
    e.target.remove();
  }
});
