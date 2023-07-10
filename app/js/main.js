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

const modal = document.getElementById('modal');
const modalBtn = document.getElementById('modal-btn');
const closeModal = document.getElementById('close-modal');
const email = document.getElementById('sign-email');
const modalErr = document.getElementById('modal-err')

modalBtn.addEventListener('click', () => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    modal.style.display = "block";
    document.body.classList.add("stop-scrolling");
    modalErr.style.display = "none";
    document.body.style.paddingRight = '15px'
  } else {
    modalErr.style.display = "block";
  }
});

closeModal.addEventListener('click', () => {
  modal.style.display = "none";
  document.body.classList.remove("stop-scrolling")
  document.body.style.paddingRight = 'unset'
})

const dropdown = document.getElementById('dropdown');
const dropdownBtn = document.getElementById('dropdown-btn');

dropdownBtn.addEventListener('click', (event) => {
  dropdown.style.display = "block";
  event.stopPropagation();
})

document.addEventListener('click', (event) => {
  if (!event.target.matches('#dropdown')) {
    dropdown.style.display = "none";
  }
})