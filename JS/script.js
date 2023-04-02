

document.addEventListener('keydown', honseEvent,false);


var secretScroll = ['h','o','n','s','e'];
var current = 0;
function honseEvent(evt){
    if(secretScroll.indexOf(evt.key) < 0 || evt.key !== secretScroll[current]){
        current = 0;
        return;
    }
    current++;

    if(secretScroll.length === current){
        current = 0;
        alert("Praise be to him")
    }
}

const mingus = document.querySelector(".mingus");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");
mingus.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
mingus.classList.toggle("active");
navMenu.classList.toggle("active");
}

function closeMenu() {
mingus.classList.remove("active");
navMenu.classList.remove("active");
}
