const firstBurgerLine = document.getElementById('first-line');
const secondBurgerLine = document.getElementById('second-line');
const thirdBurgerLine = document.getElementById('third-line');

const burgerIcon = document.querySelector('.burger-icon');

function switchBurgerIcon() {
    firstBurgerLine.classList.toggle('burger-icon__line_animation_first-line');
    secondBurgerLine.classList.toggle('burger-icon__line_animation_second-line');
    thirdBurgerLine.classList.toggle('burger-icon__line_animation_third-line');
}

burgerIcon.addEventListener('click', switchBurgerIcon);
