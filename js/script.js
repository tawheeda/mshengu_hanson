document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    // Ensure id + aria-controls
    if (!navLinks.id) navLinks.id = "primary-nav";
    menuToggle.setAttribute("aria-controls", navLinks.id);

    if (!menuToggle.hasAttribute("aria-expanded")) {
      menuToggle.setAttribute("aria-expanded", "false");
    }

    const closeMenu = () => {
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    };

    const openMenu = () => {
      navLinks.classList.add("active");
      menuToggle.setAttribute("aria-expanded", "true");
    };

    menuToggle.addEventListener("click", () => {
      const expanded = menuToggle.getAttribute("aria-expanded") === "true";
      expanded ? closeMenu() : openMenu();
    });

    // Close menu when a link is clicked (mobile UX)
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeMenu();
    });

    // Close on outside click
    document.addEventListener("click", (e) => {
      const isOpen = navLinks.classList.contains("active");
      if (!isOpen) return;

      const clickedInsideNav = navLinks.contains(e.target);
      const clickedToggle = menuToggle.contains(e.target);
      if (!clickedInsideNav && !clickedToggle) closeMenu();
    });
  }
});
