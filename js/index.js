const burger = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.list-nav')
burger.addEventListener('click',() => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
})

const allLinks = document.querySelectorAll('li');

allLinks.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.toggle('active')
    })
})