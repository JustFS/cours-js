// Types de données en JS
let chaine = "Je suis une chaine de caratère";
let bouleen = true;
let nombre = 45;

// Connaitre le type d'une variable
// console.log(typeof nombre);

let tableau = ["Je", "suis", "un", "tableau"];
// console.log(tableau[1][0]);
let complexArray = ["Bordeaux", 23, true, [42, true, "Paris"]];
// console.log(complexArray[3][2][4]);

let objet = {
  nom: "Denis",
  age: 32,
  admin: false,
  technos: ["React", "Nodejs"],
};

let autreVar = undefined;
let maVariable = null;

let arrayOfObjects = [
  {
    nom: "Denis",
    age: 32,
    admin: false,
  },
  {
    nom: "Julien",
    age: 42,
    admin: true,
  },
  {
    nom: "Samia",
    age: 21,
    admin: false,
  },
];

for (let i = 0; i < arrayOfObjects.length; i++) {
  document.body.innerHTML += `<li>${arrayOfObjects[i].nom}</li>`;
}

//----
// MAP
//----

document.body.innerHTML = arrayOfObjects
  .map(
    (user) => `
      <div class="user-card">
        <h2>${user.nom}</h2>
        <p>Age : ${user.age}</p>
        <p>${user.admin ? "Administrateur" : "Membre"}</p>
      </div>
    `
  )
  .join("");

//------------------
// Fonction ternaire
//------------------

nombre > 340 ? console.log("yes") : console.log("no");
