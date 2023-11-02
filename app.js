let header = document.querySelector(".header");

let menu = document.querySelector(".mobile-navbar-btn");

const toggle = () => {
  header.classList.toggle("active");
};

menu.addEventListener("click", toggle);

let nav_links = document.querySelectorAll(".navbar-link");

Array.from(nav_links).forEach((e) => {
  e.addEventListener("click", toggle);
});
