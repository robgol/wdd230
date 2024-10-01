// Select the toggle button and the body element
const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Check for saved user preference in localStorage
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.classList.add(currentTheme);
}

// Toggle dark mode on button click
toggleButton.addEventListener('click', () => {
    // If dark mode is active, remove it and switch to light mode
    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light-mode');  // Save preference
        toggleButton.textContent = "🌙";  // Change icon to moon for dark mode
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark-mode');   // Save preference
        toggleButton.textContent = "☀️";  // Change icon to sun for light mode
    }
});
