const popupEdit = document.querySelector('.popup_edit');
const editButton = document.querySelector('.profile-head__edit-button');
const formEdit = popupEdit.querySelector('.popup__form');
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
  nameInput.value = currentName.textContent;
  bioInput.value = currentBio.textContent;
}

//ФУНКЦИЯ ПЕРЕЗАПИСИ EDIT
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
}

//РАБОТА КАРТИНКИ В МОДАЛЬНОМ ОКНЕ
function openImageHandler(src, text) {
  togglePopup(popupOpen);
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
  const placeCard = document.querySelector('.template');
  const cardHTML = placeCard.content.cloneNode(true);
  const image = cardHTML.querySelector('.profile-feed__picture');
  const imageTitle = cardHTML.querySelector('.profile-feed__name');
  const like = cardHTML.querySelector('.profile-feed__like-button');
  const trash = cardHTML.querySelector('.profile-feed__trash-button');

  image.src = link;
  imageTitle.textContent = text;

  like.addEventListener('click', () =>
    like.classList.toggle('profile-feed__like-button_active')
  );

  trash.addEventListener('click', () =>
    trash.closest('.profile-feed__item').remove()
  );

  image.addEventListener('click', () =>
    openImageHandler(image.src, imageTitle.textContent)
  );
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



