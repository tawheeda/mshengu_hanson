let slideIndex = 1; // Global index for slideshow

document.addEventListener("DOMContentLoaded", () => {
  // === Mobile Menu Toggle ===
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    // Default ARIA
    if (!menuToggle.hasAttribute("aria-expanded")) {
      menuToggle.setAttribute("aria-expanded", "false");
    }

    // Toggle menu on click
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
      menuToggle.setAttribute("aria-expanded", String(!isExpanded));
    });

    // Close menu when a nav link is clicked (mobile UX)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  // === Initialize Slideshow ===
  const slides = document.getElementsByClassName("slide");
  if (slides.length > 0) {
    showSlides(slideIndex);
  }
});

/**
 * Increment or decrement slide index
 * @param {number} n
 */
function plusSlides(n) {
  showSlides(slideIndex += n);
}

/**
 * Show the current slide, hide others
 * @param {number} n
 */
function showSlides(n) {
  const slides = document.getElementsByClassName("slide");
  if (slides.length === 0) return;

  if (n > slides.length) slideIndex = 1;
  if (n < 1) slideIndex = slides.length;

  // Hide all slides
  Array.from(slides).forEach(slide => {
    slide.style.display = "none";
  });

  // Show the current slide
  slides[slideIndex - 1].style.display = "block";
}
