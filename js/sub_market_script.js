$(function () {
  $("#gnb>li").mouseenter(function () {
    $(".sub, .sub_bg").stop().fadeIn(400);
  });

  $("#gnb>li").mouseleave(function () {
    $(".sub, .sub_bg").stop().fadeOut(400);
  });

});


// 수산물
const fishButtons = document.querySelectorAll('.fish_click');

fishButtons.forEach(fish => {
  fish.addEventListener('mouseenter', function (e) {

    const fishItem = this.closest('.fish_item');

    fishItem.classList.toggle('active');

  });
});

// 농산물 
const farmItems = document.querySelectorAll('.farm-item');
const infoBox = document.getElementById('info-box');
const infoImg = document.getElementById('info-img');
const infoTitle = document.getElementById('info-title');
const infoDesc = document.getElementById('info-desc');

let autoFlipInterval;
const flipSpeed = 2000;

function activateFarmItem(item) {
  if (item.classList.contains('active')) return;

  farmItems.forEach(i => i.classList.remove('active'));
  item.classList.add('active');


  infoBox.classList.remove('fade-in');
  void infoBox.offsetWidth;


  const targetImgPath = item.getAttribute('data-img');
  infoImg.setAttribute('src', targetImgPath);
  infoTitle.textContent = item.getAttribute('data-title');
  infoDesc.textContent = item.getAttribute('data-desc');

  infoBox.classList.add('fade-in');
}


function startAutoFlip() {
  autoFlipInterval = setInterval(() => {
    const currentActive = document.querySelector('.farm-item.active');
    const currentIndex = Array.from(farmItems).indexOf(currentActive);


    const nextIndex = (currentIndex + 1) % farmItems.length;


    activateFarmItem(farmItems[nextIndex]);
  }, flipSpeed);
}


farmItems.forEach(item => {
  item.addEventListener('click', () => {
    clearInterval(autoFlipInterval);

    activateFarmItem(item);

    startAutoFlip();
  });
});

startAutoFlip();



//축산물

const meatItems = document.querySelectorAll('.meat-item');
const meatInfoBox = document.getElementById('meat-info-box');
const meatBadge = document.getElementById('meat-badge');
const meatDesc1 = document.getElementById('meat-desc1');
const meatDesc2 = document.getElementById('meat-desc2');
const meatCookList = document.getElementById('meat-cook-list');

let meatAutoInterval;
const meatFlipSpeed = 2500;

function activateMeatItem(item) {
  if (item.classList.contains('active')) return;

  meatItems.forEach(i => i.classList.remove('active'));
  item.classList.add('active');


  if (meatInfoBox) {
    meatInfoBox.classList.remove('fade-in');
    meatInfoBox.classList.add('fade-out');
  }

  setTimeout(() => {
    if (meatBadge) meatBadge.textContent = item.getAttribute('data-title');
    if (meatDesc1) meatDesc1.textContent = item.getAttribute('data-desc1');
    if (meatDesc2) meatDesc2.textContent = item.getAttribute('data-desc2');
    if (meatCookList) meatCookList.textContent = item.getAttribute('data-cook');

    if (meatInfoBox) {
      meatInfoBox.classList.remove('fade-out');
      meatInfoBox.classList.add('fade-in');
    }
  }, 200);
}

function startMeatAutoFlip() {
  meatAutoInterval = setInterval(() => {
    const currentActive = document.querySelector('.meat-item.active');
    if (!currentActive) return;

    const currentIndex = Array.from(meatItems).indexOf(currentActive);
    const nextIndex = (currentIndex + 1) % meatItems.length;

    activateMeatItem(meatItems[nextIndex]);
  }, meatFlipSpeed);
}

meatItems.forEach(item => {
  item.addEventListener('click', () => {
    clearInterval(meatAutoInterval);
    activateMeatItem(item);
    startMeatAutoFlip();
  });
});


startMeatAutoFlip();

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
