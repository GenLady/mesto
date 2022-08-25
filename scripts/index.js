let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile-head__edit-button_open-popup');
let closeButton = popup.querySelector ('.popup__close');

let popupForm = popup.querySelector('.popup__form');
let currentName = document.querySelector('.profile-head__name');
let currentBio = document.querySelector('.profile-head__bio');
let nameInput = popupForm.querySelector('.popup__input-name');
let bioInput = popupForm.querySelector('.popup__input-bio');

const togglePopup = function () {

  popup.classList.toggle('popup_opened');

  nameInput.value = currentName.textContent;
  bioInput.value = currentBio.textContent;
}

editButton.addEventListener('click', togglePopup);
closeButton.addEventListener('click', togglePopup);

function formSubmitHandler (evt) {
  evt.preventDefault();

  let nameInputValue = document.querySelector('.popup__input-name').value;
  let bioInputValue = document.querySelector('.popup__input-bio').value;

  currentName.getAttribute('value');
  currentBio.getAttribute('value');

  currentName.textContent = nameInputValue;
  currentBio.textContent = bioInputValue;
  togglePopup();
}

popupForm.addEventListener('submit', formSubmitHandler);
