const $navMenu = document.querySelector('.navbar-mobile')
const $burgerButton = document.querySelector('#burger-button')
const $body = document.querySelector('body')



$burgerButton.addEventListener('click', () => {
    $navMenu.classList.toggle('active')
    $body.classList.toggle('scroll')
    $burgerButton.classList.toggle('active')
})


