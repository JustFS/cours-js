const errorPseudo = document.querySelector(".error-pseudo");
const errorConfirmPassword = document.querySelector(".error-confirmPassword");
const form = document.querySelector("form");

pseudo.addEventListener("input", () => {
  if (pseudo.value !== "") {
    if (pseudo.value.length > 2 && pseudo.value.length < 17) {
      errorPseudo.textContent = "Pseudo correct";
      errorPseudo.style.color = "green";
    } else {
      errorPseudo.textContent = "Le pseudo doit être entre 3 et 16 caractères";
      errorPseudo.style.color = "red";
    }
  } else {
    errorPseudo.textContent = "";
  }
});

password.addEventListener("input", () => {
  if (
    password.value.match(
      /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,24}$/
    )
  ) {
    console.log("True");
  } else {
    console.log("False");
  }
});

confirmPassword.addEventListener("input", () => {
  if (password.value === confirmPassword.value) {
    errorConfirmPassword.textContent = "Les mots de passe correspondent";
    errorConfirmPassword.style.color = "green";
  } else {
    errorConfirmPassword.textContent = "Les mots de passe ne correspondent pas";
    errorConfirmPassword.style.color = "red";
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (
    pseudo.value.length > 2 &&
    pseudo.value.length < 17 &&
    password.value === confirmPassword.value &&
    charte.checked
  ) {
    alert("Votre formulaire a été soumis");
    clearForm();
  } else {
    alert("Veuillez tout remplir svp !");
  }
});

function clearForm() {
  pseudo.value = "";
  password.value = "";
  confirmPassword.value = "";
  charte.checked = false;
  errorConfirmPassword.textContent = "";
  errorPseudo.textContent = "";
}
