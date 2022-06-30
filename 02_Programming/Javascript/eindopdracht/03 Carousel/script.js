const slider = document.querySelector('.container__slider');
const carousel = document.querySelector('.container__carousel');

const next = document.querySelector('.container__next');
const prev = document.querySelector('.container__prev');

let direction = -1;

next.addEventListener('click', function () {
    if (direction = 1) {
        direction = -1;
    }
    // slider.prepend(slider.lastElementChild);
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-20%)';

    console.log(direction)
});

prev.addEventListener('click', function () {
    if (direction === -1) {
        direction = 1;
        slider.appendChild(slider.firstElementChild);
    }
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(20%)';


    console.log(direction)
});

slider.addEventListener('transitionend', function () {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    } else {
        slider.appendChild(slider.firstElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(function () {
        slider.style.transition = 'all 2s';
    })
});