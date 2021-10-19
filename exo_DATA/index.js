function colorGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r}, ${g}, ${b})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
}

setInterval(colorGenerator, 2000);

// console.log(Math.floor(3.6));
// console.log(Math.round(3.5));
// console.log(Math.ceil(3.4));
