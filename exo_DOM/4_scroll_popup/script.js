let playOnce = true;

window.addEventListener("scroll", () => {
  // NAVBAR EFFECT
  if (window.scrollY > 50) {
    navbar.style.height = "45px";
  } else {
    navbar.style.height = "90px";
  }

  scrollValue =
    (window.innerHeight + window.scrollY) / document.body.offsetHeight;

  // IMAGE APPEAR (APPEAR AT 42% OF SCROLL)
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = "1";
    imgImprovise.style.transform = "none";
  }

  // NEWSLETTER POPUP (APPEAR AT 84% OF SCROLL)

  if (scrollValue > 0.84 && playOnce) {
    setTimeout(() => {
      popup.style.opacity = "1";
      popup.style.transform = "none";
    }, 1500);
    playOnce = false;
  }
});

closeBtn.addEventListener("click", () => {
  popup.style.opacity = "0";
  popup.style.transform = "translateX(500px)";
});
