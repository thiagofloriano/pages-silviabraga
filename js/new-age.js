/*!
 * Silvia Braga — Psicologia Cognitivo-Comportamental
 * Vanilla JS (no jQuery). Bootstrap 5 loaded via CDN.
 */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    const mainNav = document.querySelector("#mainNav");

    // 1. Navbar shrink on scroll: toggle `navbar-shrink` past 100px.
    if (mainNav) {
      const toggleShrink = () => {
        mainNav.classList.toggle("navbar-shrink", window.scrollY > 100);
      };
      toggleShrink(); // run once on load (page may not be at top)
      window.addEventListener("scroll", toggleShrink, { passive: true });
    }

    // 2. Close the mobile collapsed menu when a nav link is clicked.
    const navbarCollapse = document.querySelector("#navbarResponsive");
    document
      .querySelectorAll("#mainNav .nav-link, #mainNav .js-scroll-trigger")
      .forEach((link) => {
        link.addEventListener("click", () => {
          if (
            navbarCollapse &&
            navbarCollapse.classList.contains("show") &&
            window.bootstrap
          ) {
            window.bootstrap.Collapse.getOrCreateInstance(navbarCollapse).hide();
          }
        });
      });
  });
})();
