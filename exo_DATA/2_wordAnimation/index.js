// Principe pour les mots
// const words = ["harder", "better", "faster", "stronger"];
// counter = 0;

// const loop = setInterval(() => {
//   if (counter < 4) {
//     document.body.innerHTML = words[counter];
//     counter++;
//   } else {
//     counter = 0;
//     document.body.innerHTML = words[counter];
//     counter++;
//   }
//   console.log(counter);
// }, 1000);

const words = ["harder", "better", "faster", "stronger"];
counter = 0;

const loop = setInterval(() => {
  if (counter < 4) {
    document.body.innerHTML = words[counter];
    counter++;
  } else {
    counter = 0;
    document.body.innerHTML = words[counter];
    counter++;
  }
  console.log(counter);
}, 1000);
