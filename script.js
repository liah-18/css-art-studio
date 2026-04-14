/* MOBILE MENU */
const menu = document.getElementById("mobileMenu");
const hamburger = document.getElementById("hamburger");
const closeMenu = document.getElementById("closeMenu");

hamburger.addEventListener("click", () => {
  menu.style.left = "0px"
});

closeMenu.addEventListener("click", () => {
  menu.style.left = "-270px";
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

