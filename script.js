const moon = document.querySelector("#changeColor");
const icon = moon.querySelector(".color");

moon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  icon.classList.toggle("fa-moon");
  icon.classList.toggle("fa-sun");
});

const menu = document.querySelector(".bar");
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-bars");
  menu.classList.toggle("fa-xmark");
});
