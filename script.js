"use strict";

const firstButton = document.querySelector(".first_button");
const secondButton = document.querySelector(".second_button");
const firstFooter = document.querySelector(".footer");
const secondFooter = document.querySelector(".second_footer");

console.log(firstButton);
console.log(secondButton);
console.log(firstFooter);
console.log(secondFooter);

firstButton.addEventListener("click", function () {
  secondFooter.classList.toggle("hidden");
});

secondButton.addEventListener("click", function () {
  secondFooter.classList.toggle("hidden");
});

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b / marks.length, 0));
}

getAverage([1, 1, 1, 1, 1, 1, 1, 2]);
