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
        <p>${user.admin ? "Est admin" : "N'est pas admin"}</p>
        <ul>
        <li>${user.technos[0]}</li>
        <li>${user.technos[1]}</li>
        </ul>
      </div>
      `
  )
  .join("");

let numberArray = [1, 34, 485, 2, 13989, 45, 5];
let numberArray2 = [234, 34, 856];

// On initialise ; jusqu'où doit aller al boucle ; comportement à adopter tant que la boucle n'est pas finie
for (i = 0; i < numberArray.length; i++) {
  // console.log(numberArray[i]);
}

// Fusionner 2 tableaux
let newArray = [...numberArray, ...numberArray2];
// console.log(newArray);

// Filter / Trier les données
console.log(newArray.filter((num) => num > 7).sort((a, b) => a - b));
