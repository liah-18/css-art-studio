/* MOBILE MENU */
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenu');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn.addEventListener('click', () => {
  menu.classList.remove('active');
});


/* IMAGE CAROUSEL */
const images = [
  "images/octopus.png",
  "images/popsicle.jpeg",
  "images/shark.png",
  "images/zombie.png"
];

let currentIndex = 0;

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + imagess.length) % images.length;
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("carouselImage").src = images[currentIndex];
});

document.getElementById("carouselImage").src = images[0];

const imageElement = document.getElementById("carouselImage");

