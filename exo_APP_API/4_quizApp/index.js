// Créer un tableau avec des objets de questions
// Créer une fonction d'affichage, afficher la question 1

let score = 0;
let index = 0;
let quizData = [
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
  quiz.innerHTML = `
    <h3>${quizData[index].question}</h3>
    <ul>${quizData[index].choices
      .map((choice) => "<li id=" + choice + ">" + choice + "</li>")
      .join("")}</ul>
    <p>Question ${index + 1}/${quizData.length}</p>
  `;

  document.querySelectorAll("li").forEach((li) => {
    li.addEventListener("click", () => {
      if (index < quizData.length - 1) {
        // Bonne réponse
        if (li.id === quizData[index].answer) {
          score++;
          index++;
          answerDisplay(true);
          quizDisplay();
          // Mauvaise réponse
        } else {
          index++;
          answerDisplay(false);
          quizDisplay();
        }
      } else {
        finishDisplay();
      }
    });
  });
}

function finishDisplay() {
  quiz.innerHTML = `
    <h3>Quiz terminé</h3>
    <h5>Votre score est de ${score}/${quizData.length}</h5>
    <button id="restart">Recommencer</button>
  `;
  restart.addEventListener("click", () => {
    index = 0;
    score = 0;
    quizDisplay();
  });
}

function answerDisplay(success) {
  if (success) {
    result.textContent = "Bonne réponse !";
    result.classList.add("true");
    setTimeout(() => {
      result.textContent = "";
      result.classList.remove("true");
    }, 700);
  } else {
    result.textContent = "Mauvaise réponse !";
    result.classList.add("false");
    setTimeout(() => {
      result.textContent = "";
      result.classList.remove("false");
    }, 700);
  }
}

quizDisplay();
