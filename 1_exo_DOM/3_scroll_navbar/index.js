const nav = document.querySelector("nav");

// window.addEventListener("scroll", () => {
//   if (window.scrollY > 250) {
//     nav.style.top = 0;
//   } else {
//     nav.style.top = "-60px";
//   }
// });

let lastScroll = 0;

window.addEventListener("scroll", () => {
  if (window.scrollY < lastScroll) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-60px";
  }
  lastScroll = window.scrollY;
});
