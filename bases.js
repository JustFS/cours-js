// variables

// const = immuable
const prenom = "Julien";

// let = peuvent évoluer au fil du code
let cours = "voici 8585838 un super cours";
cours = "c'est un nouveau cours";

//////////////////////////////////////

// fonctions classique
function faireQuelqueChose() {
  console.log("Je fais un truc");
}

// fonction flechée
const faireUnTruc = (tache) => {
  // concaténation 1
  console.log(`Je fais : ${tache} on remet du texte`);
  // concaténation 2
  console.log("Concaténation numéro 2" + tache);
};

faireUnTruc("la vaisselle");
faireUnTruc("les courses");
