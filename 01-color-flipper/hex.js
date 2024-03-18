const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector("span");
btn.addEventListener("click", (e) => {
  let hexColor = "#";

  for (let length = 0; length < 6; length++) {
    let index = Math.floor(Math.random() * hex.length);
    hexColor += hex[index];
  }

  document.querySelector("main").style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
