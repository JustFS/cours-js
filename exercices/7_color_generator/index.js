function colorGenerator() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  const color = `rgb(${r},${g},${b})`;

  document.body.style.background = color;
  document.body.innerHTML = `<h2>${color}</h2>`;
}
setInterval(colorGenerator, 1000);

// console.log(Math.floor(3.6));
// console.log(Math.round(3.4));
// console.log(Math.ceil(3.2));

// background: linear-gradient(90deg, rgb(2,0,3), rgb(0,212,255))

// GRADIENT GENERATOR

// function gradientGenerator() {
//   const r = Math.floor(Math.random() * 255);
//   const g = Math.floor(Math.random() * 255);
//   const b = Math.floor(Math.random() * 255);

//   const rr = Math.floor(Math.random() * 255);
//   const gg = Math.floor(Math.random() * 255);

//   const deg = Math.floor(Math.random() * 360);

//   const color = `radial-gradient(rgb(${r},${g},${b}), rgb(${rr},${gg},${b}))`;

//   document.body.style.background = color;
//   document.body.innerHTML = `<h2>${color}</h2>`;
// }
// setInterval(gradientGenerator, 1000);
