// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const ulLink = document.querySelector("ul");
const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
 
    ulLink.classList.toggle("show-links")

  //   ulLink.style.height = "0";
  //   ulLink.style.overflow = "hidden";

  //   console.log(ulLink.style.height);
});
