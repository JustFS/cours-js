function dateParser(date) {
  return new Date(date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function dateCalc(date) {
  const today = new Date();
  const todayTimestamp = Date.parse(today);
  const timestamp = Date.parse(date);

  return Math.ceil((todayTimestamp - timestamp) / 8.64e7);
}

function getUser() {
  fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results);

      document.body.innerHTML = data.results
        .map(
          (user) => `
          <div class="card">
            <img src=${user.picture.large} alt="photo de ${user.name.first}" >
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.location.city}, ${dateParser(user.dob.date)}</p>
            <em>Membre depuis : ${dateCalc(user.registered.date)} jours</em>
          </div>
      `
        )
        .join("");
    });
}

getUser();
