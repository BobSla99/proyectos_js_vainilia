const slides = document.querySelectorAll(".slide");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
let counter = 0;
//registrar los eventos de los bottone

nextBtn.addEventListener("click", (e) => {
  if (counter === slides.length - 1) {
    counter = 0;
  } else {
    counter++;
  }
  updateTranslate();
});
prevBtn.addEventListener("click", (e) => {
  if (counter === 0) {
    counter = slides.length - 1;
  } else {
    counter--;
  }
  updateTranslate();
});

//desplazar cada slide  100% * su offset
slides.forEach((slide, ind) => {
  slide.style.left = `${ind * 100}%`;
});

function updateTranslate() {
  slides.forEach((slide) => {
    slide.style.transform = `translateX(${counter * -100}%)`;
  });

  showstyle();
}

//como aceder a las propiedades de un node
function showstyle() {
  const slide1Style = window.getComputedStyle(slides[0]);
  console.log(slide1Style.fontSize);
  console.log("width:", slide1Style.width);
}
