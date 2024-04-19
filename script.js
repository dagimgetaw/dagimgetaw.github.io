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

const countersEl = document.querySelectorAll(".counter");

countersEl.forEach((counterEl) => {
  counterEl.innerText = "0";
  incrementCounter();
  function incrementCounter() {
    let currentNum = +counterEl.innerText;
    const dataCeil = counterEl.getAttribute("data-ceil");
    const increment = dataCeil / 15;
    currentNum = Math.ceil(currentNum + increment);

    if (currentNum < dataCeil) {
      counterEl.innerText = currentNum;
      setTimeout(incrementCounter, 50);
    } else {
      counterEl.innerText = dataCeil;
    }
  }
});
