const slides = document.querySelectorAll(".carrousel_inner > div");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });

  slides[index].style.display = "block";
}

function showPrevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide(currentSlide);
}

function showNextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

prevButton.addEventListener("click", showPrevSlide);
nextButton.addEventListener("click", showNextSlide);

showSlide(currentSlide);
