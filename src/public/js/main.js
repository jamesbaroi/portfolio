// MENU ----------------------------------------------------------------------/
// Open / close menu and change icon to x or hamburger
const menu = document.querySelector('.menu-btn');
menu.addEventListener('click', () => {
  document.body.classList.toggle('menu-btn-clk');
});
