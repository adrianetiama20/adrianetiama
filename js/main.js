const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navitem = document.querySelectorAll('.navitem');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        menuBranding.classList.add('show');
        navitem.forEach(items => items.classList.add("show"));
        $('body').css('overflow', 'hidden');

        showMenu = true;
    } else {

        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        menuBranding.classList.remove('show');
        navitem.forEach(items => items.classList.remove('show'));
        $('body').css('overflow', 'auto');

        showMenu = false;

    }
}