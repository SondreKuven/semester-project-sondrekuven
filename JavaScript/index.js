document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".hero-img");
  const leftArrow = document.querySelector(".hero-arrow-left");
  const rightArrow = document.querySelector(".hero-arrow-right");

  if (slides.length > 0 && leftArrow && rightArrow) {
    let index = 0;

    slides.forEach((slide) => {
      slide.style.transition = "opacity 0.5s ease";
    });

    function showSlide(i) {
      slides.forEach((slide) => slide.classList.remove("active"));
      slides[i].classList.add("active");
    }

    document.querySelector(".hero-arrow-left").addEventListener("click", () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });

    document.querySelector(".hero-arrow-right").addEventListener("click", () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });
  }

  const navToggle = document.querySelector(".nav-toggle");
  const mainNav = document.querySelector(".main-nav");

  if (navToggle && mainNav) {
    navToggle.setAttribute("aria-expanded", "false");

    navToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("open");
      navToggle.classList.toggle("active", isOpen);
      navToggle.setAttribute("aria-expanded", isOpen);
    });
  }
});
