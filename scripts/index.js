const popupLink = document.querySelector('#popup-link')
const popup = document.querySelector('.popup');
const popupСloseButton = popup.querySelector('.popup__close-button_container');
const containerCloseButton = popup.querySelector('.popup__close-button_image-container');
const illustrationLink = popup.querySelector('.popup__link');
const popupImageContainer = popup.querySelector('.popup__image-container');

function openPopup(evt) {
	evt.preventDefault();
	popup.classList.add('popup_opened');
}

function closePopup() {
	popup.classList.remove('popup_opened');
	closePopupIllustration();
}

function openPopupIllustration(evt) {
	evt.preventDefault();
	illustrationLink.classList.remove('popup__link_active');
	popupImageContainer.classList.add('popup__image-container_opened');
}

function closePopupIllustration() {
	popupImageContainer.classList.remove('popup__image-container_opened');
	illustrationLink.classList.add('popup__link_active');
}

popupLink.addEventListener('click', openPopup);
popupСloseButton.addEventListener('click', closePopup);
illustrationLink.addEventListener('click', openPopupIllustration);
containerCloseButton.addEventListener('click', closePopupIllustration);