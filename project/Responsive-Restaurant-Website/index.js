const navItem = document.querySelector("nav__item");
const openToggler = document.querySelector("#menu-btn");
const closeToggler = document.querySelector("#close-btn");

openToggler.addEventListener("click", () => {
  navItem.style.display = "flex";
});
