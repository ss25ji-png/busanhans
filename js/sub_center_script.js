$(function () {
    $("#gnb>li").mouseenter(function () {
        $(".sub, .sub_bg").stop().fadeIn(400);
    });

    $("#gnb>li").mouseleave(function () {
        $(".sub, .sub_bg").stop().fadeOut(400);
    });
});

// 이벤트
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".event-card");
    let activeIdx = 1;

    let autoPlayInterval;

    function updateCarousel() {
        cards.forEach((card, i) => {

            card.classList.remove("active", "prev", "next");


            if (i === activeIdx) {
                card.classList.add("active");
            } else if (i === (activeIdx - 1 + cards.length) % cards.length) {
                card.classList.add("prev");
            } else {
                card.classList.add("next");
            }
        });
    }

    function nextCard() {
        activeIdx = (activeIdx + 1) % cards.length;
        updateCarousel();
    }
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextCard, 3000);
    }

    function stopAutoPlay() {
        clearInterval(autoPlayInterval);
    }

    cards.forEach((card, index) => {
        card.addEventListener("click", () => {
            stopAutoPlay();

            activeIdx = index;
            updateCarousel();

            startAutoPlay();
        });
    });

    updateCarousel();
    startAutoPlay();
});


//큐앤에이
document.addEventListener("DOMContentLoaded", () => {
    const qaItems = document.querySelectorAll(".qa-item");

    qaItems.forEach(item => {
        const header = item.querySelector(".qa-header");

        header.addEventListener("click", () => {

            qaItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });

            item.classList.toggle("active");
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