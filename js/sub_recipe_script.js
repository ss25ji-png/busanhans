$(function () {
    $("#gnb>li").mouseenter(function () {
        $(".sub, .sub_bg").stop().fadeIn(400);
    });

    $("#gnb>li").mouseleave(function () {
        $(".sub, .sub_bg").stop().fadeOut(400);
    });

});


// 레시피
document.addEventListener("DOMContentLoaded", () => {

    const mainImg = document.querySelector(".main-img");
    const mainTag = document.querySelector(".main-card .tag");
    const mainTitle = document.querySelector(".main-card .title");
    const mainDesc = document.querySelector(".main-card .desc");
    const mainTime = document.querySelector(".main-card .time");
    const mainServings = document.querySelector(".main-card .servings");

    const mainIngContent = document.querySelector(".main-ingredient-overlay .ing-content");

    const subItems = document.querySelectorAll(".sub-item");

    subItems.forEach((item) => {

        item.addEventListener("click", () => {

            const tempImgSrc = mainImg.src;
            const tempImgAlt = mainImg.alt;
            const tempTag = mainTag.innerText;
            const tempTitle = mainTitle.innerText;
            const tempDesc = mainDesc.innerHTML;
            const tempTimeHTML = mainTime.innerHTML;
            const tempServingsHTML = mainServings.innerHTML;
            const tempIngHTML = mainIngContent.innerHTML;


            const subImg = item.querySelector("img");
            const subTitleEl = item.querySelector(".sub-info h3");
            const subTimeEl = item.querySelector(".sub-info .time");
            const subTagEl = item.querySelector(".sub-tag");
            const subDescEl = item.querySelector(".sub-desc");
            const subServingsEl = item.querySelector(".sub-servings");
            const subIngEl = item.querySelector(".sub-ing");


            mainImg.src = subImg.src;
            mainImg.alt = subImg.alt;
            mainTag.innerText = subTagEl.innerText;
            mainTitle.innerText = subTitleEl.innerText;
            mainDesc.innerHTML = subDescEl.innerHTML;
            mainTime.innerHTML = subTimeEl.innerHTML;
            mainServings.innerHTML = subServingsEl.innerHTML;

            mainIngContent.innerHTML = subIngEl.innerHTML;

            subImg.src = tempImgSrc;
            subImg.alt = tempImgAlt;
            subTitleEl.innerText = tempTitle;
            subTimeEl.innerHTML = tempTimeHTML;
            subTagEl.innerText = tempTag;
            subDescEl.innerHTML = tempDesc;
            subServingsEl.innerHTML = tempServingsHTML;

            subIngEl.innerHTML = tempIngHTML;
        });
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