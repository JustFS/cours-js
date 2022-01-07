const buttons = document.querySelectorAll("button");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let userData = [];
let ageSort;

async function fetchUser() {
  await fetch("https://randomuser.me/api/?results=48")
    .then((res) => res.json())
    .then((data) => (userData = data.results));

  console.log(userData);
  userDiplay();
}

function userDiplay() {
  app.innerHTML = userData
    .filter((user) => {
      if (women.checked && men.checked) {
        return user;
      } else if (women.checked) {
        return user.gender === "female";
      } else if (men.checked) {
        return user.gender === "male";
      }
    })
    .sort((a, b) => {
      if (ageSort === "youngToOld") {
        return a.dob.age - b.dob.age;
      } else if (ageSort === "oldToYoung") {
        return b.dob.age - a.dob.age;
      }
    })
    .map((user) => {
      // console.log(user);

      return `
        <div class="card" style="background: ${
          user.gender === "female" ? "pink" : "skyblue"
        }">
          <img src=${user.picture.large} alt="photo profil" >
          <h3>${user.name.first} ${user.name.last}</h3>
          <p>${user.location.city}, ${dateFormater(user.dob.date)}</p>
          <em>Membre depuis : ${dateCalculator(user.registered.date)} jours</em>
        </div>
      `;
    })
    .join("");
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

fetchUser();

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.id === "youngToOld") {
      ageSort = "youngToOld";
      userDiplay();
    } else if (e.target.id === "oldToYoung") {
      ageSort = "oldToYoung";
      userDiplay();
    }
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("input", () => {
    userDiplay();
  });
});

// Manipuler une chaine de caractères
// let dateDuJour = "1965-06-04T06:35:35.620Z";

// let newDate = dateDuJour.split("T")[0];
// let [aa, mm, jj] = newDate.split("-");
// console.log(jj, mm, aa);
