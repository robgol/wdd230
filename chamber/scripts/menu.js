document.addEventListener("DOMContentLoaded", function() {
    const toggle = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
  
    toggle.addEventListener("click", function() {
      navMenu.classList.toggle("active");
    });
  });
  