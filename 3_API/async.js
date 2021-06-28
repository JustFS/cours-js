let userArray;

async function fetchUser() {
  await fetch("https://randomuser.me/api/?results=24")
    .then((res) => res.json())
    .then((data) => (userArray = data.results));

  console.log(userArray);
}

async function userDisplay() {
  await fetchUser();

  document.body.innerHTML = userArray
    .map((user) => `<h1>${user.name.first}</h1>`)
    .join("");

  console.log(userArray);
}

userDisplay();
