// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const dateSpan = document.querySelector("#date");
const date = new Date();
dateSpan.textContent = date.getFullYear();

// ********** close links ************
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navToggle.addEventListener("click", (e) => {
  //   linksContainer.classList.toggle("show-links");

  const contaierHeight = linksContainer.getBoundingClientRect().height;
  const linksHeight = links.getBoundingClientRect().height;
  linksContainer.style.height = linksHeight.height;
  if (contaierHeight === 0) {
    linksContainer.style.height = Math.round(linksHeight.toString()) + "px";
  } else {
    linksContainer.style.height = "0";
  }
});

// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const toplink = document.querySelector(".top-link");

window.addEventListener("scroll", (e) => {
  const scrollHeight = window.pageYOffset;
  const navBarHeigth = navbar.getBoundingClientRect().height;
  if (scrollHeight > navBarHeigth) {
    navbar.classList.add("fixed-nav");
  } else navbar.classList.remove("fixed-nav");

  if (scrollHeight > 1000) {
    toplink.classList.add("show-link");
  } else {
    toplink.classList.remove("show-link");
  }
});

// ********** smooth scroll ************
// select links
const scrollLinks = document.querySelectorAll(".scroll-link");
scrollLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const id = e.target.getAttribute("href").slice(1);
    //navigate to specific spot
    const element = document.getElementById(id);
    //calculate the height of the nav
    const navbarH = navbar.getBoundingClientRect().height;
    console.log(navbarH);
    const containerH = linksContainer.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    console.log(" container heigh", containerH);

    let positionY = element.offsetTop - navbarH;

    if (!fixedNav) {
      positionY = positionY - navbarH;
    }

    console.log(containerH);
    if (navbarH>82) {
      positionY = positionY + containerH;
    }

    //scroll a una posiciony
    window.scrollTo({
      left: 0,
      top: positionY,
      behavior: "smooth",
    });
    //oculta la barra al darle click
    linksContainer.style.height = "0";
  });
});
