const elHamburger = document.querySelector ('.hamburger')
const elHeader = document.querySelector ('.header')

elHamburger .addEventListener('click', () => {
    elHeader.classList.toggle('header--active')
})