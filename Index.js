// let isAnimating = false;

// function goToPage(targetClass) {
//   const current = document.querySelector("section.active");
//   const target = document.querySelector("." + targetClass);

//   if (!current || !target || current === target || isAnimating) return;
//   isAnimating = true;

//   current.classList.add("flip-out");

//   setTimeout(() => {
//     current.classList.remove("active", "flip-out");
//     target.classList.add("active", "flip-in");
//   }, 300);

//   setTimeout(() => {
//     target.classList.remove("flip-in");
//     isAnimating = false;
//   }, 900);
// }

const pages = document.querySelectorAll(".PageContainer section");

let currentPage = 0;

function goToPage(pageId) {
  const targetIndex = [...pages].findIndex((p) => p.id === pageId);

  if (targetIndex === -1) return;

  if (targetIndex > currentPage) {
    for (let i = currentPage; i < targetIndex; i++) {
      pages[i].classList.add("folded");
    }
  } else {
    for (let i = currentPage - 1; i >= targetIndex; i--) {
      pages[i].classList.remove("folded");
    }
  }

  currentPage = targetIndex;
}

// const slides = document.querySelectorAll(".carrousel_inner > div");
// const prevButton = document.getElementById("prev");
// const nextButton = document.getElementById("next");

// let currentSlide = 0;

// function showSlide(index) {
//   slides.forEach((slide) => {
//     slide.style.display = "none";
//   });

//   slides[index].style.display = "block";
// }

// function showPrevSlide() {
//   currentSlide--;
//   if (currentSlide < 0) {
//     currentSlide = slides.length - 1;
//   }
//   showSlide(currentSlide);
// }

// function showNextSlide() {
//   currentSlide++;
//   if (currentSlide >= slides.length) {
//     currentSlide = 0;
//   }
//   showSlide(currentSlide);
// }

// prevButton.addEventListener("click", showPrevSlide);
// nextButton.addEventListener("click", showNextSlide);

// showSlide(currentSlide);
