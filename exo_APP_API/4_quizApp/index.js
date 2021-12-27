let score = 0;
let index = 0;
let quiz = [
  {
    question:
      "Quelle méthode Javascript permet de filtrer les éléments d'un tableau",
    choices: ["indexOf()", "map()", "filter()", "reduce()"],
    answer: "filter()",
  },
  {
    question:
      "Quelle méthode Javascript permet de vérifier si un élément figure dans un tableau",
    choices: ["isNaN()", "includes()", "findIndex()", "isOdd()"],
    answer: "includes()",
  },
  {
    question: "Quelle méthode transforme du JSON en un objet Javascript ?",
    choices: ["JSON.parse()", "JSON.stringify()", "JSON.object()", "JSON.toJS"],
    answer: "JSON.parse()",
  },
  {
    question:
      "Quel objet Javascript permet d'arrondir à l'entier le plus proche",
    choices: ["Math.ceil()", "Math.floor()", "Math.round()", "Math.random()"],
    answer: "Math.round()",
  },
];

function quizDisplay() {
  app.innerHTML = `
    <h3>${quiz[index].question}<h3>
    <ul>${quiz[index].choices
      .map((choice) => "<li id=" + choice + ">" + choice + "</li>")
      .join("")}</ul>
    <p>Question ${index + 1}/${quiz.length}</p>
  `;

  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      if (index < quiz.length - 1) {
        // Bonne réponse
        if (li.id === quiz[index].answer) {
          score++;
          index++;
          quizDisplay();
          // Mauvaise réponse
        } else {
          index++;
          quizDisplay();
        }
      } else {
        console.log("c'est fini la !");
        finishDisplay();
      }
    });
  });
}

function finishDisplay() {
  app.innerHTML = `
    <h3>Quiz terminé</h3>
    <h5>Votre score est de ${score}/${quiz.length}</h5>
    <button id="restart">Recommencer</button>
  `;
  restart.addEventListener("click", () => {
    index = 0;
    score = 0;
    quizDisplay();
  });
}

quizDisplay();
