let menuHeader = document.getElementById('menuHeader');
let isMenuVisible = false;
let triggerOffset = 150;

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    if (scrollPosition > triggerOffset && !isMenuVisible) {
        menuHeader.style.top = '0';
        isMenuVisible = true;
    } else if (scrollPosition <= triggerOffset && isMenuVisible) {
        menuHeader.style.top = '-100px';
        isMenuVisible = false;
    }
});

let vid = document.getElementById("innoway")
function play(){
    vid.play();
}

let counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
 }, 3000); 