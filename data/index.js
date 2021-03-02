let chaine = "Je suis une chaine";
let nombre = 24;
let booleen = true;
let object = [
  {
    nom: "julien",
    age: "33",
  },
  {
    nom: "denis",
    age: "22",
  },
];
let arrayString = ["Je", "suis", "un", "tableau"];
let arrayVarie = ["Coucou", 24, false, ["hello", "bonjour", 22]];

// 1er param = variable (i)
// 2ème param = jusqu'à où on doit énumérer
// 3ème param = quel comportement faire à chaque tour
for (let i = 0; i < arrayVarie.length; i++) {
  // ce qui est entre accolade est exécuté à chaque tour
  console.log(arrayVarie[i]);
}

const display = document.querySelector(".display-array");

// MAP
display.innerHTML = array
  .map(
    (element) =>
      `
        <div>${element}</div>
      `
  )
  .join("");

const numbers = [21, 45, 22, 44, 7];

console.log(
  numbers.sort((a, b) => {
    return b - a;
  })
);
