$(function () {
    $("#gnb>li").mouseenter(function () {
        $(".sub, .sub_bg").stop().fadeIn(400);
    });

    $("#gnb>li").mouseleave(function () {
        $(".sub, .sub_bg").stop().fadeOut(400);
    });

});
//마우스
const cursor = document.getElementById('cursor');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

const speed = 0.08;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {

    cursorX += (mouseX - cursorX) * speed;
    cursorY += (mouseY - cursorY) * speed;

    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';

    requestAnimationFrame(animateCursor);
}


animateCursor();

const hoverElements = document.querySelectorAll('a, button, .top_btn');
hoverElements.forEach((element) => {
    element.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    element.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});