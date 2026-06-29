
// 
const introLayer = document.getElementById('intro-layer');
const introVideo = document.getElementById('intro-video');


if (!sessionStorage.getItem('visited')) {

    sessionStorage.setItem('visited', 'true');

    introVideo.addEventListener('ended', function () {
        closeIntro();
    });
} else {
    introLayer.style.display = 'none';
    introVideo.pause();
}

function closeIntro() {
    introLayer.classList.add('hide');
}

//gnb sub
$(function () {
    $("#gnb>li").mouseenter(function () {
        $(".sub, .sub_bg").stop().fadeIn(400);
    });

    $("#gnb>li").mouseleave(function () {
        $(".sub, .sub_bg").stop().fadeOut(400);
    });


    //md픽 

    $(document).ready(function () {
        $('.tabs li a').click(function (e) {
            e.preventDefault();

            $('.tabs li').removeClass('active');
            $(this).parent('li').addClass('active');

            var targetTab = $(this).find('span').attr('tabs');

            $('.tab_content').stop().fadeOut(200, function () {
                if ($('.tab_content:visible').length === 0) {
                    $(targetTab).stop().fadeIn(200, function () {
                        window.dispatchEvent(new Event('resize'));
                    });
                }
            });
        });
    });
    $(document).ready(function () {
        $('.slider-wrapper').each(function () {
            var $wrapper = $(this);
            var $track = $wrapper.find('.slider-track');
            var $cards = $track.find('.product-card');

            var cardWidth = 293;
            var gap = 20;
            var moveWidth = cardWidth + gap;

            var cloneCount = 4;
            var $firstClones = $cards.slice(0, cloneCount).clone();
            var $lastClones = $cards.slice(-cloneCount).clone();

            $track.append($firstClones);
            $track.prepend($lastClones);

            var currentIndex = cloneCount;
            var totalCards = $track.find('.product-card').length;
            var isTransitioning = false;

            function updatePosition(animate) {
                var offset = -(currentIndex * moveWidth);
                if (animate) {
                    isTransitioning = true;
                    $track.css({
                        'transition': 'transform 0.4s ease-in-out',
                        'transform': 'translateX(' + offset + 'px)'
                    });
                } else {
                    $track.css({
                        'transition': 'none',
                        'transform': 'translateX(' + offset + 'px)'
                    });
                }
            }

            updatePosition(false);

            function nextSlide() {
                if (isTransitioning) return;
                currentIndex++;
                updatePosition(true);

                if (currentIndex === totalCards - cloneCount) {
                    setTimeout(function () {
                        currentIndex = cloneCount;
                        updatePosition(false);
                        isTransitioning = false;
                    }, 400);
                } else {
                    setTimeout(function () {
                        isTransitioning = false;
                    }, 400);
                }
            }

            function prevSlide() {
                if (isTransitioning) return;
                currentIndex--;
                updatePosition(true);

                if (currentIndex === 0) {
                    setTimeout(function () {
                        currentIndex = totalCards - (cloneCount * 2);
                        updatePosition(false);
                        isTransitioning = false;
                    }, 400);
                } else {
                    setTimeout(function () {
                        isTransitioning = false;
                    }, 400);
                }
            }

            $wrapper.find('.next-btn').click(nextSlide);
            $wrapper.find('.prev-btn').click(prevSlide);

            var autoPlayTimer;

            function startAutoPlay() {
                stopAutoPlay();
                autoPlayTimer = setInterval(function () {
                    nextSlide();
                }, 2000); // 2초
            }

            function stopAutoPlay() {
                clearInterval(autoPlayTimer);
            }

            startAutoPlay();
            $wrapper.hover(
                function () { stopAutoPlay(); },
                function () { startAutoPlay(); }
            );
        });
    });

});

// 세로 배너 슬라이더 
let currentTopMargin = 0;
const moveAmountHeight = 250;

const totalSlides = $(".banner-card").length;
const maxTopMargin = -(moveAmountHeight * (totalSlides - 1));

let autoSlideTimer;

function moveSlide(direction) {
    if (direction === "next") {
        if (currentTopMargin > maxTopMargin) {
            currentTopMargin -= moveAmountHeight;
        } else {
            currentTopMargin = 0;
        }
    } else if (direction === "prev") {
        if (currentTopMargin < 0) {
            currentTopMargin += moveAmountHeight;
        } else {
            currentTopMargin = maxTopMargin;
        }
    }

    $(".banner-track").stop().animate({
        marginTop: currentTopMargin + 'px'
    }, 500);
}

// 자동 슬라이드
function startAutoSlide() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(function () {
        moveSlide("next");
    }, 2000);
}


function stopAutoSlide() {
    clearInterval(autoSlideTimer);
}

$(".banner-track").on("wheel mousewheel", function (e) {
    if ($(this).is(":animated")) return;

    e.preventDefault();
    stopAutoSlide();

    const delta = e.originalEvent.deltaY || -e.originalEvent.wheelDelta;

    if (delta > 0) {
        moveSlide("next");
    } else {
        moveSlide("prev");
    }

    startAutoSlide();
});

$(".banner-track").mouseenter(stopAutoSlide).mouseleave(startAutoSlide);

startAutoSlide();

// --- 인스타그램 독립 자동 슬라이더 기능---
$(document).ready(function () {
    const $instaTrack = $('#instaSliderTrack');
    const $originalCards = $instaTrack.children();
    $originalCards.clone().appendTo($instaTrack);
});

$(document).ready(function () {

    const $trackLeft = $('#partnerTrackLeft');
    const $cardsLeft = $trackLeft.children();


    $trackLeft.append($cardsLeft.clone());


    const $trackRight = $('#partnerTrackRight');
    const $cardsRight = $trackRight.children();


    $trackRight.append($cardsRight.clone());


    let leftOffset = 0;
    let rightOffset = 0;


    const cardTotalWidth = ($cardsLeft.first().outerWidth() + 24) * $cardsLeft.length;


    function playPartnerTicker() {

        const speed = 0.5;

        leftOffset -= speed;

        if (Math.abs(leftOffset) >= cardTotalWidth) {
            leftOffset = 0;
        }
        $trackLeft.css('transform', `translateX(${leftOffset}px)`);


        rightOffset += speed;

        if (rightOffset >= 0) {
            rightOffset = -cardTotalWidth;
        }
        $trackRight.css('transform', `translateX(${rightOffset}px)`);


        requestAnimationFrame(playPartnerTicker);
    }


    rightOffset = -cardTotalWidth;


    playPartnerTicker();
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
