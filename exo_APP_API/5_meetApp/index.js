const buttons = document.querySelectorAll("button");
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let usersData = [];

async function fetchUsers() {
  await fetch("https://randomuser.me/api/?results=48")
    .then((res) => res.json())
    .then((data) => (usersData = data.results));

  console.log(usersData);
  usersDisplay();
}

function dateFormater(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function usersDisplay(sort) {
  appDisplay.innerHTML = usersData
    .filter((user) => {
      if (men.checked && women.checked) {
        return user;
      } else if (men.checked) {
        return user.gender === "male";
      } else if (women.checked) {
        return user.gender === "female";
      }
    })
    .sort((a, b) => {
      if (sort === "youngToOld") {
        return a.dob.age - b.dob.age;
      } else if (sort === "oldToYoung") {
        return b.dob.age - a.dob.age;
      }
    })
    .map(
      (user) => `
        <div class="card" style="background: ${
          user.gender === "male" ? "skyblue" : "pink"
        }">
          <img src=${user.picture.large} alt="photo ${user.name.first}" >
          <h3>${user.name.first} ${user.name.last}</h3>
          <p>${user.location.city}, ${dateFormater(user.dob.date)}</p>
          <em>Membre depuis : ${Math.ceil(
            (new Date() - new Date(user.registered.date)) / (1000 * 3600 * 24)
          )} jours</em>
        </div>
        `
    )
    .join("");
}

window.addEventListener("load", fetchUsers);

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    usersDisplay(e.target.id);
  });
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("input", usersDisplay);
});

// Manipuler une chaine de caractère
// let date = "1974-04-01T22:16:16.674Z";
// let newDate = date.split("T")[0];
// let [aa, mm, jj] = newDate.split("-");
// console.log(jj, mm, aa);
