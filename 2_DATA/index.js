// Types de données en JS
let chaine = "Ma chaine de caractère";
let number = 42;
let booleen = true;
// console.log(typeof booleen);

let array = ["Je", "suis", "un", "tableau"];
let complexArray = ["Bordeaux", 23, true, [23, true, "Paris"]];
// console.log(complexArray[3][2][0]);

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
  },
  {
    nom: "Julien",
    age: 22,
    admin: true,
  },
  {
    nom: "David",
    age: 62,
    admin: false,
  },
];
// accédéer au "s" de Denis
// console.log(arrayOfObject[0].nom[4]);
// console.log(arrayOfObject[2].admin);

//-----------
// Boucle for
//-----------
// On crée une variable pour incrémenter le tableau
let notAdmin = [];

// On initiliase i; jusqu'où doit aller la boucle; comportement à adopter tant que la boucle n'est pas terminée
for (i = 0; i < arrayOfObject.length; i++) {
  // console.log(arrayOfObject[i].admin);

  if (arrayOfObject[i].admin === false) {
    notAdmin.push(arrayOfObject[i].nom);
    // console.log(notAdmin);
  }
}

//----
// MAP
//----

document.body.innerHTML = arrayOfObject
  .map(
    (user) =>
      `
        <div class="card">
          <h2 class="titre">${user.nom}</h2>
          <span>Age : ${user.age}</span>
          <p>${user.admin ? "Administrateur" : "Membre"}</p>
        </div>
      `
  )
  .join("");

//------------------
// Fonction ternaire
//------------------
// C'est un if/else sur une seule ligne
number < 23 ? console.log("vrai") : console.log("faux");

let numberArray = [1, 34, 486, 129393, 35, 312];
let numberArray2 = [234, 32, 844];

// ...spread operator : permet de casser le tableau en question
// numberArray.push(...numberArray2);

let newArray = [...numberArray, ...numberArray2];

// Méthode sort basique
// newArray.sort((a, b) => {
//   return a - b;
// });

let newFilter = newArray
  .filter((num) => num > 45)
  .sort((a, b) => {
    return a - b;
  });

console.log(newFilter);
