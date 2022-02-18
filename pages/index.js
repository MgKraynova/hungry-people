const firstBurgerLine = document.getElementById('first-line');
const secondBurgerLine = document.getElementById('second-line');
const thirdBurgerLine = document.getElementById('third-line');

const burgerIcon = document.querySelector('.burger-icon');
const burgerMenu = document.querySelector('.burger__list');

const bookingButton = document.querySelector('.booking__button');

function switchBurgerIcon() {
    firstBurgerLine.classList.toggle('burger-icon__line_animation_first-line');
    secondBurgerLine.classList.toggle('burger-icon__line_animation_second-line');
    thirdBurgerLine.classList.toggle('burger-icon__line_animation_third-line');

    burgerMenu.classList.toggle('burger__list_active');
}

burgerIcon.addEventListener('click', switchBurgerIcon);

class Popup {
    constructor(popupSelector) {
        this._popup = document.querySelector(popupSelector);
        this._closeButton = this._popup.querySelector('.popup__close-button');
    }

    openPopup() {
        this._popup.classList.add('popup_opened');
    }

    closePopup() {
        this._popup.classList.remove('popup_opened');
        this._removeEventListeners();
    }

    _closePopupByPressEsc(evt) {
        if (evt.key === 'Escape') {
            this.closePopup();
        }
    }

    _closePopupByClickOnOverlay(evt) {
        if (evt.target === this._popup) {
            this.closePopup();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', () => {
            this.closePopup();
        });

        document.addEventListener('keydown', (evt) => {
            this._closePopupByPressEsc(evt);
        });

        this._popup.addEventListener('mousedown', (evt) => {
            this._closePopupByClickOnOverlay(evt);
        });
    }

    _removeEventListeners() {
        this._closeButton.removeEventListener('click', () => {
            this.closePopup();
        });

        document.removeEventListener('keydown', (evt) => {
            this._closePopupByPressEsc(evt);
        });

        this._popup.removeEventListener('mousedown', (evt) => {
            this._closePopupByClickOnOverlay(evt);
        });
    }
}

const popupConfirmation = new Popup('.popup');
popupConfirmation.setEventListeners();

bookingButton.addEventListener('click', (e) => {
    // e.preventDefault();
    popupConfirmation.openPopup();
})