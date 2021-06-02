// VARIABLES

var MaVieilleVariable =
  "poijpoijf^poeifj poejf ^poiez sudf^poezj sdpof^j epof jds";

// Const = valeur immuable
const prenom = "Julien";

// Let = peut évoluer au fil du code
let cours2 = "Javascript trop cool";
cours2 = "Super !";
cours2 = false;
cours2 = 34;

//------------------------------------------

// Fonction classique
function faireQuelqueChose() {
  console.log("Je fais un truc");
}

// Appel de la fonction
faireQuelqueChose();

// Fonction flêchée
const faireUnTruc = (tache) => {
  console.log("Je fais : " + tache);
};

faireUnTruc("les courses");
faireUnTruc("le ménage");
faireUnTruc(cours2);
