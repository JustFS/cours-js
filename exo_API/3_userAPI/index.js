let userData = [];

async function fetchUser() {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData);
  userDiplay();
}

function dateFormater(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function dateCalculator(date) {
  let today = new Date();
  let todayTimestamp = Date.parse(today);
  let registeredTimestamp = Date.parse(date);
  return Math.ceil((todayTimestamp - registeredTimestamp) / 86400000);
}

function userDiplay() {
  document.body.innerHTML = userData
    .map((user) => {
      console.log(user);

      return `
        <div class="card">
          <img src=${user.picture.large} alt="photo profil" >
          <h3>${user.name.first} ${user.name.last}</h3>
          <p>${user.location.city}, ${dateFormater(user.dob.date)}</p>
          <em>Membre depuis : ${dateCalculator(user.registered.date)} jours</em>
        </div>
      `;
    })
    .join("");
}

fetchUser();

// Manipuler une chaine de caractères
// let dateDuJour = "1965-06-04T06:35:35.620Z";

// let newDate = dateDuJour.split("T")[0];
// let [aa, mm, jj] = newDate.split("-");
// console.log(jj, mm, aa);
