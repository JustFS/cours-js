const dataLowerCase = "azertyuiopqsdghjklmwxcvbn";
const dataUpperCase = dataLowerCase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&é'\"(-è_çà)=$^*ù!:;,?./%£+°";
const passwordOutput = document.querySelector("#password-output");

function generatePassword() {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowerCase);
  if (uppercase.checked) data.push(...dataUpperCase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner au moins 1 critère");
    return;
  }

  for (i = 0; i < displayPasswordLength.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
  }

  passwordOutput.value = password;
  passwordOutput.select();
  document.execCommand("copy");

  generate.textContent = "Copié !";
  setTimeout(() => {
    generate.textContent = "Générer un mot de passe";
  }, 2000);
}

generate.addEventListener("click", generatePassword);
