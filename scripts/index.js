const popupEdit = document.querySelector('.popup_edit');
const editButton = document.querySelector('.profile-head__edit-button');
const formEdit = popupEdit.querySelector('.popup__form');
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
  nameInput.value = currentName.textContent;
  bioInput.value = currentBio.textContent;
  openPopup(popupEdit);
}

//ФУНКЦИЯ ПЕРЕЗАПИСИ EDIT
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
}

//РАБОТА КАРТИНКИ В МОДАЛЬНОМ ОКНЕ
function openImageHandler(src, text) {
  openPopup(popupOpen);
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
createCurrentCards();

//РАБОТА КАРТОЧЕК С ФОТОГРАФИЯМИ
function printCard(text, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const image = cardElement.querySelector('.profile-feed__picture');
  const imageTitle = cardElement.querySelector('.profile-feed__name');
  const like = cardElement.querySelector('.profile-feed__like-button');
  const trash = cardElement.querySelector('.profile-feed__trash-button');

  image.src = link;
  image.alt = text;
  imageTitle.textContent = text;

  like.addEventListener('click', () =>
    like.classList.toggle('profile-feed__like-button_active')
  );
  trash.addEventListener('click', () =>
    trash.closest('.card-item').remove()
  );
  image.addEventListener('click', () =>
    openImageHandler(image.src, imageTitle.textContent)
  );
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
