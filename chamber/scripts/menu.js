// Toggle mobile menu visibility
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu ul');

hamburgerMenu.addEventListener('click', () => {
    navMenu.classList.toggle('visible');
});

// Add CSS for the visible class in your CSS
