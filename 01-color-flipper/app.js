const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
let index = 0;
const btn = document.querySelector("#btn").addEventListener("click", (e) => {
  if (index == colors.length) {
    index = 0;
  }
  const main = document.querySelector("main");
  main.style.background = colors[index];
  const colorLabel=document.querySelector(".color");
  colorLabel.textContent=colors[index];
  console.log(index, colors.length);
  index++;
});
