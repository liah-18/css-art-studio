/* MOBILE MENU */
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeMenu');

hamburger?.addEventListener('click', () => {
  menu.classList.add('active');
});

closeBtn?.addEventListener('click', () => {
  menu.classList.remove('active');
});


/* IMAGE CAROUSEL */
const imageElement = document.getElementById("carouselImage");

if (imageElement) {
  const images = [
    "images/octopus.png",
    "images/popsicle.jpeg",
    "images/shark.png",
    "images/zombie.png"
  ];

  let currentIndex = 0;

  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    imageElement.src = images[currentIndex];
  });

  nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    imageElement.src = images[currentIndex];
  });

  imageElement.src = images[0];
}

/* RUN CODE BUTTON */
document.getElementById("runButton")?.addEventListener("click", () => {
  const html = document.getElementById("htmlBox").value;
  const css = document.getElementById("cssBox").value;

  const iframe = document.getElementById("preview");
  const iframeDoc = iframe.contentWindow.document;

  iframeDoc.open();
  iframeDoc.write(`
    <style>${css}</style>
    ${html}
  `);
  iframeDoc.close();
});

/* HOMEPAGE LIVE PREVIEW — only runs on index.html */
const homeHtml = document.getElementById("homeHtmlBox");
const homeCss  = document.getElementById("homeCssBox");
const homePreview = document.getElementById("homePreview");

function updateHomePreview() {
  const iframeDoc = homePreview.contentWindow.document;
  iframeDoc.open();
  iframeDoc.write(`
    <style>${homeCss.value}</style>
    ${homeHtml.value}
  `);
  iframeDoc.close();
}

if (homeHtml && homeCss && homePreview) {
  // Update as the user types
  homeHtml.addEventListener("input", updateHomePreview);
  homeCss.addEventListener("input", updateHomePreview);

  // Load default preview content on page load
  updateHomePreview();
}