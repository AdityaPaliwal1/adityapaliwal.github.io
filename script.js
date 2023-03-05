let burger = document.querySelector('.burger');
let navbar = document.querySelector('.ap-navbar');
let navlinks = document.querySelector('.navbar-links');
let button = document.querySelector('.button');

burger.addEventListener( 'click',()=>{
    navbar.classList.toggle('h-nav');
    navlinks.classList.toggle('v-class');
    button.classList.toggle('v-class');
})