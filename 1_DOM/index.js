const title = document.querySelector(".title");
const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const imgMain = document.getElementById("main-img");
const popup = document.querySelector(".popup");
const btnPopup = document.querySelector("#popup-btn");

btn1.addEventListener("click", () => {
  imgMain.style.filter = "blur(1px) sepia(70%)";
});

btn2.addEventListener("click", () => {
  document.body.style.animation = "shake 1s";
});

btn3.addEventListener("click", () => {
  popup.style.right = "10px";
});

btnPopup.addEventListener("click", () => {
  popup.style.right = "-300px";
});

// Injecter une classe
title.addEventListener("click", () => {
  // title.classList.add("active");
  // title.classList.remove("title");

  // Le toggle teste si la classe est présente, si elle l'est il la supprime, si elle ne l'est pas il l'ajoute
  title.classList.toggle("active");
});

//-----------------------------------------------------------
// MOUSEMOVE

// le paramètre "e" (e pour Event) récupère donne les données de l'événement
imgMain.addEventListener("mousemove", (e) => {
  imgMain.style.left = e.x + "px";
});

//-------------------------------------
// SWITCH & FOREACH
const themeButtons = document.querySelectorAll(".theme");

themeButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // e.target.id montre l'élément cliqué
    console.log(e.target.id);

    document.body.classList.remove("dark-theme", "lime-theme", "peru-theme");

    switch (e.target.id) {
      case "dark":
        document.body.classList.add("dark-theme");
        break;
      case "lime":
        document.body.classList.add("lime-theme");
        break;
      case "peru":
        document.body.classList.add("peru-theme");
        break;
      default:
        null;
    }

    // function setTheme(color) {
    //   document.body.classList.add(color + "-theme");
    // }
    // setTheme(e.target.id);
  });
});

//-------------------------------------
// KEYDOWN
//---------

window.addEventListener("keydown", (e) => {
  console.log(e.key);
});

function ring(letter) {
  const audio = new Audio();
  audio.src = "./sounds/" + letter + ".mp3";
  audio.play();
}

window.addEventListener("keydown", (e) => {
  if (e.key == "a" || "z" || "e") {
    console.log("yes");
    ring(e.key);
  }

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

//------------------------------
// SCROLL

window.addEventListener("scroll", () => {
  // window.scrollY affiche la niveau de la scrollBar
  console.log(window.scrollY);
});

//--------------------------------------
// INPUT

const nom = document.querySelector("#nom");
const error = document.querySelector(".error");
let retourNom = "";

nom.addEventListener("input", (e) => {
  retourNom = e.target.value;

  if (retourNom.length < 3) {
    error.textContent = "Le nom doit faire 3 caractères minimum";
  } else {
    error.textContent = "";
  }
});

//-----------------------------------------
const genreInputs = document.querySelectorAll(".genre");
let genre = "";

genreInputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    genre = e.target.id;
    console.log(genre);
  });
});

//--------------------------------------
// SUBMIT

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (retourNom.length > 2 && cgv.checked) {
    alert("Merci votre formulaire est bien envoyé");
    nom.value = "";
    cgv.checked = false;
  } else {
    alert("Veuillez remplir correctement les champs wesh !");
  }
});

//--------------------------------------
// SUPPRIMER ELEMENT SUR LE DOM

document.body.addEventListener("click", (e) => {
  if (e.target.tagName !== "BODY") {
    e.target.remove();
  }
});
