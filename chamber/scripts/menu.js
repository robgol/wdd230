document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var menu = document.getElementById('menu');

  menuIcon.addEventListener('click', function() {
    menu.classList.toggle('show');
  });
});
