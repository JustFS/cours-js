// Types de données en JS
let chaine = "Ma chaine de caratères";
let number = 42;
let booleen = true;

let tableau = ["Je", "suis", "un", "tableau"];
let complexArray = ["Bordeaux", 23, true, [23, true, "Paris"]];

let objet = {
  nom: "Denis",
  age: 32,
  admin: false,
  technos: ["React", "Nodejs"],
};

let maVariable = null;
let autreVar = undefined;

let arrayOfObject = [
  {
    nom: "Denis",
    age: 32,
    admin: false,
    technos: ["React", "Nodejs"],
  },
  {
    nom: "Patrice",
    age: 43,
    admin: true,
    technos: ["Rust", "Ruby"],
  },
  {
    nom: "Pascal",
    age: 22,
    admin: false,
    technos: ["Php", "Nodejs"],
  },
];

// MAP
document.body.innerHTML = arrayOfObject
  .map(
    (user) =>
      `
        <div class="card">
          <h2>${user.nom}</h2>
          <p>${user.age} ans</p>
        </div>
      `
    // AFFICHER l'AGE
    // AFFICHER SI L'utilisateur est admin
    // AFFICHER LES TECHNOS
    // Créer une class card en css pour donenr du style
  )
  .join("");
