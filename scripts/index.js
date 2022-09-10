const popupEdit = document.querySelector('.popup_edit');
const editButton = document.querySelector('.profile-head__edit-button');
const formEdit = popupEdit.querySelector('.popup__form');
<<<<<<< HEAD
const nameInput = formEdit.querySelector('.popup__input-name');
const bioInput = formEdit.querySelector('.popup__input-bio');
const currentName = document.querySelector('.profile-head__title');
const currentBio = document.querySelector('.profile-head__bio');

const popupAdd = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile-head__add-button');
const formAdd = popupAdd.querySelector('.popup__form');
const titleInput = formAdd.querySelector('.popup__input-title');
const linkInput = formAdd.querySelector('.popup__input-link');

const popupOpen = document.querySelector('.popup_open');
const popupOpenImage = popupOpen.querySelector('.popup__image');
const popupOpenTitle = popupOpen.querySelector('.popup__image-title');

const closeButtons = document.querySelectorAll('.popup__close');

const feedList = document.querySelector('.profile-feed__list');
const cardTemplate = document.querySelector('.template').content;

//ОТКРЫТИЕ-ЗАКРЫТИЕ ПОПАП
function openPopup(popup) {
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

//ФОРМА EDIT ПРИ ОТКРЫТИИ
function openProfileEditPopup() {
  openPopup(popupEdit);
=======
const popupCloseEdit = popupEdit.querySelector('.popup__close');

const nameInput = formEdit.querySelector('.popup__input-name');
const bioInput = formEdit.querySelector('.popup__input-bio');
const currentName = document.querySelector('.profile-head__title');
const currentBio = document.querySelector('.profile-head__bio');

const popupAdd = document.querySelector('.popup_add');
const addButton = document.querySelector('.profile-head__add-button');
const formAdd = popupAdd.querySelector('.popup__form');
const titleInput = formAdd.querySelector('.popup__input-title');
const linkInput = formAdd.querySelector('.popup__input-link');
const popupAddClose = popupAdd.querySelector('.popup__close');

const popupOpen = document.querySelector('.popup_open');
const popupOpenImage = popupOpen.querySelector('.popup__image');
const popupOpenTitle = popupOpen.querySelector('.popup__image-title');
const popupOpenClose = popupOpen.querySelector('.popup__close');

const feedList = document.querySelector('.profile-feed__list');

//ОТКРЫТИЕ-ЗАКРЫТИЕ ПОПАП
function togglePopup(popup) {
  popup.classList.toggle('popup_opened');
}

//ФОРМА EDIT ПРИ ОТКРЫТИИ
function formEditHandler() {
  togglePopup(popupEdit);
>>>>>>> c6bd0b06d3148ebbfdb01d44aec657bbff2c2a3c
  nameInput.value = currentName.textContent;
  bioInput.value = currentBio.textContent;
}

//ФУНКЦИЯ ПЕРЕЗАПИСИ EDIT
<<<<<<< HEAD
function submitFormEditHandler(evt) {
  evt.preventDefault();

  currentName.textContent = nameInput.value;
  currentBio.textContent = bioInput.value;
  closePopup(popupEdit);
}

//ФОРМА ADD ПРИ ОТКРЫТИИ
function openProfileAddPopup() {
  titleInput.value = '';
  linkInput.value = '';
  openPopup(popupAdd);
}

//ФУНКЦИЯ СОЗДАНИЯ НОВОЙ ФОТОГРАФИИ
function submitFormAddHandler(evt) {
  evt.preventDefault();

  const titleInputValue = titleInput.value;
  const linkInputValue = linkInput.value;
  addCard(titleInputValue, linkInputValue);
  closePopup(popupAdd);
}

//ДОБАВЛЕНИЕ ФОТОГРАФИИ В НАЧАЛО
function addCard(text, link) {
  const newCard = printCard(text, link);
  feedList.prepend(newCard);
=======
function formSubmitEditHandler(evt) {
  evt.preventDefault();

  const nameInputValue = popupEdit.querySelector('.popup__input-name').value;
  const jobInputValue = popupEdit.querySelector('.popup__input-bio').value;

  currentName.textContent = nameInputValue;
  currentBio.textContent = jobInputValue;
  togglePopup(popupEdit);
}

//ФОРМА ADD ПРИ ОТКРЫТИИ
function formAddHandler() {
  titleInput.value = '';
  linkInput.value = '';
  togglePopup(popupAdd);
}

//ФУНКЦИЯ СОЗДАНИЯ НОВОЙ ФОТОГРАФИИ
function formSubmitAddHandler(evt) {
  evt.preventDefault();

  const titleInputValue = popupAdd.querySelector('.popup__input-title').value;
  const linkInputValue = popupAdd.querySelector('.popup__input-link').value;
  addCard(titleInputValue, linkInputValue);
  togglePopup(popupAdd);
>>>>>>> c6bd0b06d3148ebbfdb01d44aec657bbff2c2a3c
}

//РАБОТА КАРТИНКИ В МОДАЛЬНОМ ОКНЕ
function openImageHandler(src, text) {
<<<<<<< HEAD
  openPopup(popupOpen);
=======
  togglePopup(popupOpen);
>>>>>>> c6bd0b06d3148ebbfdb01d44aec657bbff2c2a3c
  popupOpenImage.src = src;
  popupOpenImage.alt = text;
  popupOpenTitle.textContent = text;
}

//СОЗДАНИЕ ТЕКУЩЕЙ ЛЕНТЫ ФОТОГРАФИЙ
function createCurrentCards() {
  initialCards.forEach((e) => {
    addCard(e.name, e.link);
  });
}
createCurrentCards ();

//РАБОТА КАРТОЧЕК С ФОТОГРАФИЯМИ
function printCard(text, link) {
<<<<<<< HEAD
  const cardElement = cardTemplate.cloneNode(true);
  const image = cardElement.querySelector('.profile-feed__picture');
  const imageTitle = cardElement.querySelector('.profile-feed__name');
  const like = cardElement.querySelector('.profile-feed__like-button');
  const trash = cardElement.querySelector('.profile-feed__trash-button');

  image.src = link;
  image.alt = text;
=======
  const placeCard = document.querySelector('.template');
  const cardHTML = placeCard.content.cloneNode(true);
  const image = cardHTML.querySelector('.profile-feed__picture');
  const imageTitle = cardHTML.querySelector('.profile-feed__name');
  const like = cardHTML.querySelector('.profile-feed__like-button');
  const trash = cardHTML.querySelector('.profile-feed__trash-button');

  image.src = link;
>>>>>>> c6bd0b06d3148ebbfdb01d44aec657bbff2c2a3c
  imageTitle.textContent = text;

  like.addEventListener('click', () =>
    like.classList.toggle('profile-feed__like-button_active')
  );

  trash.addEventListener('click', () =>
<<<<<<< HEAD
    trash.closest('.card-item').remove()
=======
    trash.closest('.profile-feed__item').remove()
>>>>>>> c6bd0b06d3148ebbfdb01d44aec657bbff2c2a3c
  );

  image.addEventListener('click', () =>
    openImageHandler(image.src, imageTitle.textContent)
  );
<<<<<<< HEAD
  return cardElement;
}

// РАБОТА КНОПКИ CLOSE
closeButtons.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

// СЛУШАТЕЛИ СОБЫТИЙ
editButton.addEventListener('click', openProfileEditPopup);
addButton.addEventListener('click', openProfileAddPopup);
formEdit.addEventListener('submit', submitFormEditHandler);
formAdd.addEventListener('submit', submitFormAddHandler);
=======
  return cardHTML;
}

//ДОБАВЛЕНИЕ ФОТОГРАФИИ В НАЧАЛО
function addCard(text, link) {
  const newCard = printCard(text, link);
  feedList.prepend(newCard);
}

// СЛУШАТЕЛИ СОБЫТИЙ
editButton.addEventListener('click', formEditHandler);
addButton.addEventListener('click', formAddHandler);
formEdit.addEventListener('submit', formSubmitEditHandler);
formAdd.addEventListener('submit', formSubmitAddHandler);
popupCloseEdit.addEventListener('click', () => togglePopup(popupEdit));
popupAddClose.addEventListener('click', () => togglePopup(popupAdd));
popupOpenClose.addEventListener('click', () => togglePopup(popupOpen));



>>>>>>> c6bd0b06d3148ebbfdb01d44aec657bbff2c2a3c
