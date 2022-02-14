// Afficher les données
alert("Yo !");
console.log(document.body);
document.body.textContent = "Cours Javascript";
document.body.innerHTML += "<h1>Cours Javascript</h1>";

//--------------------------------------
// Variables
var maVieilleVariable = "Coucou je suis un vielle variable";

// Const = valeur immuable
const prenom = "julien";

// Let = peut évoluer au fil du code
let cours = "Ceci est un cours blbalblabalbalabalbal";
cours = "test";

//------------------------------------
// Fonction classique
function faireQuelqueChose() {
  console.log("Je fais un quelque chose");
}

faireQuelqueChose();

function addition(a, b) {
  console.log(a + b);
}
addition(21, 484885);

// Struture des fonctions de base
function nomFonction() {
  // Algo des choses à faire
}

const nomDeLaFonction = () => {
  // Algo des choses à faire
};

//--------------------------------------
// Les événements

const maBalise = document.querySelector(".maBalise");

maBalise.addEventListener("type d'événement", fonction);

maBalise.addEventListener("click", () => {
  // La fonction s'éxecute au click sur la balise
});

//--------------------------------------
// Les structures contrôles

if (maVariable > 200) {
  // Valeur si vrai
} else {
  // Valeur si faux
}
