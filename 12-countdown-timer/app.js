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
console.log(items);

//mostrando la fecha limite
let futureDate = new Date(2024, 2, 26, 0, 1, 0);
console.log(futureDate.getMinutes());
const year = futureDate.getFullYear();
const day = futureDate.getDate();
const dayWeek = futureDate.getDay();
const month = futureDate.getMonth();
const hour = futureDate.getHours();
const min = futureDate.getMinutes();

const textGiveaway = `Giveaway ends on ${weekdays[dayWeek]} , ${day} ${
  months[month]
} ${year},${hour > 12 ? hour - 12 : hour}:${min}
${hour < 12 ? "am" : "pm"}  `;
giveaway.textContent = textGiveaway;

//end mostrando la fecha limite.

//calculado el tiepo restante.
setInterval(() => {
  const futureTime = futureDate.getTime();

  let secsLeft = (futureTime - Date.now()) / 1000;
  const daysL = Math.floor(secsLeft / (60 * 60 * 24));
  const hourL = Math.floor(secsLeft / 3600);
  secsLeft = secsLeft % 3600;
  const minsL = Math.floor(secsLeft / 60);
  secsLeft = secsLeft % 60;
  const secL = Math.floor(secsLeft);

  console.log("days:", daysL, " horas:", hourL, " min:", minsL, " secs:", secL);
}, 1000);
