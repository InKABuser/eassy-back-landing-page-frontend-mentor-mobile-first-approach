const nav = document.querySelector('nav')
const navContainer = document.querySelector('.nav-container');
const navList = document.querySelector('.nav-list');
const mainNavlist = document.querySelector('.main-nav-container');
const navBurger = document.querySelector('.burger');



navBurger.addEventListener('click', () => {
  if (navBurger.classList.contains('open') === false) {
    navBurger.classList.add('open')
    mainNavlist.classList.add('active')
  } else {
    navBurger.classList.remove('open')
    mainNavlist.classList.remove('active')
  }
})

window.addEventListener('resize', () => {
    if (window.innerWidth > 760 && navBurger.classList.contains('open')) {
      navBurger.classList.remove('open')
      mainNavlist.classList.remove('active')
    }
})