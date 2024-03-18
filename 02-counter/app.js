let value = 0;

btnDecre = document.querySelector(".decrease");
btnReset = document.querySelector(".reset");
btnIncre = document.querySelector(".increase");

btnDecre.addEventListener("click", () => {
  value--;
  renderValue();
});

btnReset.addEventListener("click", () => {
  value=0;
  renderValue();
});

btnIncre.addEventListener("click", () => {
  value++;
  renderValue();
});

function renderValue() {
  const valueE = document.querySelector("#value");
  valueE.textContent = value;
  value < 0 ? (valueE.style.color = "red") : null;
  value > 0 ? (valueE.style.color = "green") : null;
  value === 0 ? (valueE.style.color = "black") : null;
}
