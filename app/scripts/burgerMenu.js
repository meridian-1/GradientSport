export function initBurgerMenu(lenis) {
  const burgerMenu = document.querySelector('.menu-button__menu');
  const menuBackground = document.querySelector('.main-menu-background');
  const mainMenu = document.querySelector('.main-menu');

  if (burgerMenu && menuBackground && mainMenu) {
    burgerMenu.addEventListener('click', function () {
      burgerMenu.classList.toggle('active');
      if (burgerMenu.classList.contains('active')) {
        lenis.stop();
        menuBackground.classList.add('active');
        mainMenu.classList.add('active');
      } else {
        lenis.start();
        menuBackground.classList.remove('active');
        mainMenu.classList.remove('active');
      }
    });

    menuBackground.addEventListener('click', function () {
      burgerMenu.classList.remove('active');
      menuBackground.classList.remove('active');
      mainMenu.classList.remove('active');
    });
  }
}
