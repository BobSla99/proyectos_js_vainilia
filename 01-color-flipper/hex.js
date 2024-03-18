const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  let color = "";

  for (let length = 0; length < 6; length++) {
    let index = Math.floor(Math.random() * 16);
    color = color.concat(hex[index]);
  }
  color = "#" + color;
  console.log(color);

  document.querySelector("main").style.backgroundColor = color;
  document.querySelector("span").textContent = color;
});
