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

const imageElement = document.getElementById("carouselImage");

document.getElementById("prevBtn").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  imageElement.src = images[currentIndex];
});

document.getElementById("nextBtn").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  imageElement.src = images[currentIndex];
});

imageElement.src = images[0];

