const errorPseudo = document.querySelector(".error-pseudo");
const errorPassword = document.querySelector(".error-password");
let pseudoContent;

pseudo.addEventListener("input", (e) => {
  pseudoContent = e.target.value;

  if (pseudoContent.length > 2 && pseudoContent.length < 17) {
    errorPseudo.textContent = "Pseudo correct";
    errorPseudo.style.color = "green";
  } else {
    errorPseudo.textContent = "Le pseudo doit être entre 3 et 16 caractères";
    errorPseudo.style.color = "red";
  }
});

password.addEventListener("input", (e) => {
  if (
    password.value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    console.log("true");
  } else {
    console.log("false");
  }
});

passwordConfirmation.addEventListener("input", () => {
  if (password.value === passwordConfirmation.value) {
    errorPassword.style.color = "green";
    errorPassword.textContent = "Les mots de passe correspondent";
  } else {
    errorPassword.style.color = "red";
    errorPassword.textContent = "Les mots de passe ne correspondent pas";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  console.log();

  if (
    pseudoContent.length > 2 &&
    pseudoContent.length < 17 &&
    password.value === passwordConfirmation.value &&
    charte.checked
  ) {
    alert("BINGO");
    pseudo.value = "";
    password.value = "";
    passwordConfirmation.value = "";
    charte.checked = false;
    errorPassword.textContent = "";
    errorPseudo.textContent = "";
  } else {
    alert("Merci de bien renseigner les champs");
  }
});
