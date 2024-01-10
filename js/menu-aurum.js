(function() {
    const openButton = document.querySelector(".nav-menu-open");
    const menu = document.querySelector('.menu-aurum');
    const closeMenu = document.querySelector('.menu-close');

    openButton.addEventListener('click', () => {
        menu.classList.toggle('menu-aurum-div');
        console.log('Botón de abrir menú clickeado');
    });

    closeMenu.addEventListener('click', () => {
        menu.classList.remove('menu-aurum-div', 'menu-aurum-div');
        console.log('Botón de cerrar menú clickeado');
    });
})();
