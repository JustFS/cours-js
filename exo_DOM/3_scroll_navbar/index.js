window.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY > 225) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }
});

// Solution alternative, la Navbar sort quand l'utilisateur remonte
let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    navbar.style.top = 0;
  } else {
    navbar.style.top = "-60px";
  }

  lastScroll = window.scrollY;
});
