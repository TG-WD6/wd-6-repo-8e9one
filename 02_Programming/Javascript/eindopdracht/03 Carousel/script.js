const slider = document.querySelector('.container__slider');
const carousel = document.querySelector('.container__carousel');
const carouselImg = document.querySelectorAll('.container__slider img');

const next = document.querySelector('.container__next');
const prev = document.querySelector('.container__prev');

let direction = 1;
const size = carouselImg[0].clientWidth;

slider.style.transform = `translateX(${-size * direction}px)`;


next.addEventListener('click', function () {
    slider.style.transition = 'transform 0.4s ease-in-out';
    direction++;
    slider.style.transform = `translateX(${-size * direction}px)`;
});

prev.addEventListener('click', function () {
    slider.style.transition = 'transform 0.4s ease-in-out';
    direction--;
    slider.style.transform = `translateX(${-size * direction}px)`;
});

slider.addEventListener('transitionend', function () {
    if (carouselImg[direction].id === 'cloneLast') {
        slider.style.transition = 'none';
        direction = carouselImg.length - 2;
        slider.style.transform = `translateX(${-size * direction}px)`;
    }

    if (carouselImg[direction].id === 'cloneFirst') {
        slider.style.transition = 'none';
        direction = carouselImg.length - direction;
        slider.style.transform = `translateX(${-size * direction}px)`;
    }

});