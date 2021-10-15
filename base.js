// Afficher les données
alert("Yo !");
console.log("Coucou la console");
document.body.textContent = "Hello Javascript";
document.body.innerHTML += "<h1>Hello Javascript</h1>";

//--------------------------------------
// Variables
var maVieilleVariable = "Coucou je suis une variable très agée";

// Const = valeur immuable
const prenom = "Julien";

// Let = peut évoluezr au fil du code
let cours = "Cours JS - Blablablablabalablal";
cours = "Cours JS 2.0 - Blbalba";

//---------------------------------------
// Fonction classique
function faireQuelqueChose() {
  console.log("Je fais un truc");
}
// Appel de la fonction
faireQuelqueChose();

function addition(a, b) {
  console.log(a + b);
}
addition(2, 23);

// Fonction flêchée
const faireUnTruc = (tache) => {
  console.log("Je fais " + tache);
};
faireUnTruc("les courses");
faireUnTruc("le ménage");
faireUnTruc(cours);

// Structures des fonctions de base
function nomFonction() {
  // Algo des choses à faire
}

const nomDeLaFonction = () => {
  // Algo des choses à faire
};

//-------------------------------------------
// Les événements

// Pointer un élément sur le DOM
const title = document.querySelector("h1");

// Structure de l'event listener
maBalise.addEventListener("type d'event", maFonction);

title.addEventListener("click", faireQuelqueChose);

title.addEventListener("click", () => {
  document.body.style.color = "red";
  title.style.border = "2px solid green";
});
