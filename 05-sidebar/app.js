const sidebar = document.querySelector(".sidebar");

document.querySelector("button>i").addEventListener("click", (e) => {
  sidebar.classList.toggle("show-sidebar");
});

document.querySelector(".close-btn>i").addEventListener("click", (e) => {
  sidebar.classList.remove("show-sidebar");
});
