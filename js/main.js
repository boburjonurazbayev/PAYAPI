const elHamburger = document.querySelector ('.hamburger');
const elHamburgerS = document.querySelector ('.hamburger--second');
const elHeader = document.querySelector ('.header');

elHamburger .addEventListener('click', () => {
    elHeader.classList.toggle('header--active')
})

elHamburgerS .addEventListener('click', () => {
    elHeader.classList.toggle('header--active')
})