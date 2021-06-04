function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
  document.body.style.color = color;
}

setInterval(randomColor, 1000);

// console.log(Math.floor(2.9));
// console.log(Math.round(2.4));
// console.log(Math.ceil(2.1));
