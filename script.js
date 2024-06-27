const toggleButton = document.querySelector('.navbar-toggler-icon');
const navMenu = document.querySelector('.nav-menu');

toggleButton.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});
