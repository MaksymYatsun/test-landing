const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const menu = document.getElementById('menu');
const hamburger = document.getElementById('burger-btn');
const closeIcon = document.getElementById('close');
const openIcon = document.getElementById('open');

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    openIcon.style.display = "block";
    document.body.classList.remove("stop-scrolling")
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    openIcon.style.display = "none";
    document.body.classList.add("stop-scrolling")
  }
}

hamburger.addEventListener("click", toggleMenu);