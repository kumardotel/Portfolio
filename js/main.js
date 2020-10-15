var myNav = document.querySelector(".navbar");
var portspan = document.getElementById('portChange');
var menuLink = document.querySelectorAll('.link')
var menu = document.querySelector('.menu');
var hamburger = document.querySelector('.menu-btn');
var topBtn = document.querySelector('.backTopBtn');

window.addEventListener('scroll', function () {
    if (document.body.scrollTop >= 20 || document.documentElement.scrollTop >= 20) {
        myNav.classList.add("scroll");
        portspan.style.color = 'white';
        topBtn.style.display = 'block';

    } else {
        myNav.classList.remove("scroll");
        portspan.style.color = 'crimson'
        topBtn.style.display = 'none';
    }
});

topBtn.addEventListener('click', function () {
    window.scrollTo(0, 0);
});

hamburger.addEventListener('click', function () {
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
})

