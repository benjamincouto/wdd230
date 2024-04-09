document.addEventListener("DOMContentLoaded", function () {
  const currentLocation = window.location.href;
  const navLinks = document.querySelectorAll("nav a");

  navLinks.forEach((link) => {
    if (link.href === currentLocation) {
      link.classList.add("active-nav"); // or apply active styles directly
    }
  });
});
