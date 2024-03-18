//set initial value
let count = 0;

value = document.querySelector("#value");
btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const style = e.target.classList;
    if (style.contains("decrease")) {
      count--;
    } else if (style.contains("increase")) {
      count++;
    } else if (style.contains("reset")) {
      count = 0;
    }
    value.textContent = count;
    count < 0 ? (value.style.color = "red") : null;
    count > 0 ? (value.style.color = "green") : null;
    count === 0 ? (value.style.color = "black") : null;
  });
});

function renderValue() {}
