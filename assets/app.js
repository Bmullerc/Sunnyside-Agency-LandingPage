const hamburger = document.getElementById('hamburger');
const menuList = document.getElementById('header-menu-list');

hamburger.addEventListener('click', () => {
    menuList.classList.toggle('show');
});