const chiffreAuHasard = () => {
  // Math.random() génére un chiffre entre 0 et 1
  console.log(Math.floor(Math.random() * 10));
};

// setInterval(chiffreAuHasard, 1000);

///////////////////////////////////////////////

fetch("https://api.quotable.io/random")
  .then((res) => res.json())
  .then((data) => console.log(data));
