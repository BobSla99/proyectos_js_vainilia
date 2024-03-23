// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://www.course-api.com/images/people/person-1.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://www.course-api.com/images/people/person-2.jpeg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://www.course-api.com/images/people/person-4.jpeg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://www.course-api.com/images/people/person-3.jpeg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//selecionar los elementos
const authorE = document.querySelector("#author");
let jobE = document.querySelector("#job");
let infoE = document.querySelector("#info");
let imgE = document.querySelector("#person-img");
let btns = document.querySelectorAll("button");

let currentReviews = 0;

// all cargar muestra el currentReviews
document.addEventListener("DOMContentLoaded", (e) => {
  // console.log(reviews[0]);
  renderReviews();
});

//muestra el reviews almacenado en currenReviews
function renderReviews() {
  const { job, name, img, text } = reviews[currentReviews];
  jobE.textContent = job;
  authorE.textContent = name;
  infoE.textContent = text;
  imgE.src = img;
}

//eventos para los botones
btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (e.target.classList.contains("fa-chevron-left")) {
      currentReviews =
        currentReviews < 1 ? reviews.length - 1 : currentReviews - 1;
    } else if (e.target.classList.contains("fa-chevron-right")) {
      currentReviews =
        currentReviews < reviews.length - 1 ? currentReviews + 1 : 0;
    } else {
      currentReviews = getRandomReview();
    }
    renderReviews();
  });
});

function getRandomReview() {
  let lastReviews = currentReviews;
  let newReview = Math.floor(Math.random() * reviews.length);
  if (lastReviews == newReview) getRandomReview();
  return newReview;
}

// select items
// const img = document.getElementById('person-img');
// const author = document.getElementById('author');
// const job = document.getElementById('job');
// const info = document.getElementById('info');

// const prevBtn = document.querySelector('.prev-btn');
// const nextBtn = document.querySelector('.next-btn');
// const randomBtn = document.querySelector('.random-btn');

// // set starting item
// let currentItem = 0;

// // load initial item
// window.addEventListener('DOMContentLoaded', function () {
//   const item = reviews[currentItem];
//   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// });

// // show person based on item
// function showPerson(person) {
//   const item = reviews[person];
//   img.src = item.img;
//   author.textContent = item.name;
//   job.textContent = item.job;
//   info.textContent = item.text;
// }
// // show next person
// nextBtn.addEventListener('click', function () {
//   currentItem++;
//   if (currentItem > reviews.length - 1) {
//     currentItem = 0;
//   }
//   showPerson(currentItem);
// });
// // show prev person
// prevBtn.addEventListener('click', function () {
//   currentItem--;
//   if (currentItem < 0) {
//     currentItem = reviews.length - 1;
//   }
//   showPerson(currentItem);
// });
// // show random person
// randomBtn.addEventListener('click', function () {
//   console.log('hello');

//   currentItem = Math.floor(Math.random() * reviews.length);
//   showPerson(currentItem);
// });