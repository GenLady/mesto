const popupEdit = document.querySelector('.popup_type_edit');
const buttonEdit = document.querySelector('.profile-head__edit-button');
const formEdit = popupEdit.querySelector('.popup__form');
const nameInput = formEdit.querySelector('.popup__input-name');
const bioInput = formEdit.querySelector('.popup__input-bio');
const profileName = document.querySelector('.profile-head__title');
const profileBio = document.querySelector('.profile-head__bio');

const popupAdd = document.querySelector('.popup_type_add');
const buttonAdd = document.querySelector('.profile-head__add-button');
const formAdd = popupAdd.querySelector('.popup__form');
const titleInput = formAdd.querySelector('.popup__input-title');
const linkInput = formAdd.querySelector('.popup__input-link');

const popupOpen = document.querySelector('.popup_open');
const popupOpenImage = popupOpen.querySelector('.popup__image');
const popupOpenTitle = popupOpen.querySelector('.popup__image-title');

const buttonClose = document.querySelectorAll('.popup__close');

const feedList = document.querySelector('.profile-feed__list');
const cardTemplate = document.querySelector('.template').content;

const popups = document.querySelectorAll('.popup');
const buttonSave = document.querySelector('.popup__save-button',);

/** Открытие-закрытие попап */
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleBtnEsc);
};

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleBtnEsc);
};

/** Закрытие попап кнопкой ESC */
function handleBtnEsc(evt) {
  if (evt.key === "Escape") {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
};

/** Закрытие попап по свободному полю */
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup__fade')) {
      closePopup(popup);
    }
  })
});

/** Форма EDIT при открытии */
function openProfileEditPopup() {
  nameInput.value = profileName.textContent;
  bioInput.value = profileBio.textContent;
  setHandlers(formEdit, validationConfig);
  openPopup(popupEdit);
};

/** Функция перезаписи EDIT */
function submitFormEditHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileBio.textContent = bioInput.value;
  closePopup(popupEdit);
};

/** Форма ADD при открытии */
function openProfileAddPopup() {
  titleInput.value = '';
  linkInput.value = '';
  setHandlers(formAdd, validationConfig);
  openPopup(popupAdd);
};

/** Функция создания новой фотографии */
function submitFormAddHandler(evt) {
  evt.preventDefault();
  addCard(titleInput.value, linkInput.value);
  closePopup(popupAdd);
};

/** Добавление фотографии в начало */
function addCard(text, link) {
  const newCard = createCard(text, link);
  feedList.prepend(newCard);
};

/** Работа картинки в модальном окне */
function openImageHandler(src, text) {
  popupOpenImage.src = src;
  popupOpenImage.alt = text;
  popupOpenTitle.textContent = text;
  openPopup(popupOpen);
};

/** Создание текущей ленты фотографий */
function createCurrentCards() {
  initialCards.forEach((e) => {
    addCard(e.name, e.link);
  })
};
createCurrentCards();

/** Срабатывание кнопки LIKE */
function likeCard(e) {
  e.target.classList.toggle('profile-feed__like-button_active');
};

/** Срабатывание кнопки TRASH */
function deleteCard(e) {
  const cardItem = e.target.closest('.card-item');
  cardItem.remove();
};

/** Работа карточек с фотографиями */
function createCard(text, link) {
  const cardElement = cardTemplate.cloneNode(true);
  const image = cardElement.querySelector('.profile-feed__picture');
  const imageTitle = cardElement.querySelector('.profile-feed__name');
  const like = cardElement.querySelector('.profile-feed__like-button');
  const trash = cardElement.querySelector('.profile-feed__trash-button');

  image.src = link;
  image.alt = text;
  imageTitle.textContent = text;

  like.addEventListener('click', likeCard);
  trash.addEventListener('click', deleteCard);
  image.addEventListener('click', () => {
    openImageHandler(image.src, imageTitle.textContent);
  });

  return cardElement;
};

/** Работа кнопки CLOSE */
buttonClose.forEach((button) => {
  const popup = button.closest('.popup');
  button.addEventListener('click', () => closePopup(popup));
});

/** Слушатели событий */
buttonEdit.addEventListener('click', openProfileEditPopup);
buttonAdd.addEventListener('click', openProfileAddPopup);
formEdit.addEventListener('submit', submitFormEditHandler);
formAdd.addEventListener('submit', submitFormAddHandler);
