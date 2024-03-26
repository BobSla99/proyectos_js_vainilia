const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");

const deadline = document.querySelector(".deadline");

const items = document.querySelectorAll(".deadline-format h4");

let daysL,
  hourL,
  minsL,
  secL = 0;

//mostrando la fecha limite
let futureDate = new Date(2025, 2, 26, 8, 15, 0);
const year = futureDate.getFullYear();
const day = futureDate.getDate();
const dayWeek = futureDate.getDay();
const month = futureDate.getMonth();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

const textGiveaway = `Giveaway ends on ${weekdays[dayWeek]} , ${day} ${
  months[month]
} ${year},${hour > 12 ? hour - 12 : hour < 10 ? "0" + hour : hour}:${
  min < 10 ? "0" + min : min
}
${hour < 12 ? "am" : "pm"}  `;
giveaway.textContent = textGiveaway;

//end mostrando la fecha limite.

//calculado el tiepo restante.
setInterval(() => {
  const futureTime = futureDate.getTime();

  let secsLeft = (futureTime - Date.now()) / 1000;
  daysL = Math.floor(secsLeft / (60 * 60 * 24));
  hourL = Math.floor(secsLeft / 3600);
  secsLeft = secsLeft % 3600;
  minsL = Math.floor(secsLeft / 60);
  secsLeft = secsLeft % 60;
  secL = Math.floor(secsLeft);

  // console.log("days:", daysL, " horas:", hourL, " min:", minsL, " secs:", secL);

  renderCounter();
}, 1000);

//funcion para actualizar los valores
function renderCounter() {
  const conters = document.querySelectorAll(".deadline h4");

  conters.forEach((counter) => {
    const idCon = counter.classList[0];
    switch (idCon) {
      case "days":
        counter.textContent = daysL;
        break;
      case "hours":
        counter.textContent = hourL;
        break;
      case "mins":
        counter.textContent = minsL;
        break;
      case "secs":
        counter.textContent = secL;
        break;
      default:
        break;
    }
  });
}
