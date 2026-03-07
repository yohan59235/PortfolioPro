// const pages = document.querySelectorAll(".Page");

// let currentZ = 1

// function goToPage(pageId) {
//   pages.forEach((page) => {
//     page.classList.remove("active");
//   });
//   document.getElementById(pageId).classList.add("active");
// }
/******************************* */
// const zIndexCounter = 1;

// const pages = document.querySelectorAll(".Page");

// const firstPage = document.getElementById("Presentation");
// firstPage.classList.add("show");
// firstPage.style.zIndex = zIndexCounter;

// function goToPage(id) {
//   const page = document.getElementById(id);

//   if (!page) return;

//   zIndexCounter++;

//   page.style.zIndex = zIndexCounter;

//   page.classList.remove("show");

//   setTimeout(() => {
//     page.classList.add("show");
//   }, 10);
// }

/********************************** */

document.addEventListener("DOMContentLoaded", () => {
  const pages = document.querySelectorAll(".Page");

  let stack = [];

  window.goToPage = function (id) {
    const target = document.getElementById(id);
    if (!target) return;
    const current = stack[stack.length - 1];
    if (current && current.id === id) return;
    if (!stack.includes(target)) {
      stack.push(target);
    } else {
      stack = stack.slice(0, stack.indexOf(target) + 1);
    }
    pages.forEach((page) => page.classList.remove("show"));
    stack.forEach((page, index) => {
      page.style.zIndex = index + 1;
    });

    target.classList.add("show");
  };
});

/**********/

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
