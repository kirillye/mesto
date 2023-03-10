import { Card } from "./classes/Card.js";
import { FormValidator } from "./classes/FormValidator.js";

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popups = document.querySelectorAll(".popup");
popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_opend")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

// List articles
const list = document.querySelector(".articles__grid");

// popup image
const popupImage = document.querySelector("#popup-image");
const imagePopupContent = popupImage.querySelector(".popup-image__img");
const imagePopupText = popupImage.querySelector(".popup__figcaption");

// popup addArticle
const popupAddArticle = document.querySelector("#popup-article");
const btnAddArticle = document.querySelector(".person__add-article");
const articleForm = document.forms.formArticle;
let formArticle = "";
const articleTitle = articleForm.articleTitle;
const articleLinkImage = articleForm.linkImage;

// popup editorNameUser
const pupupEditorName = document.querySelector("#popup");
const formUser = document.forms.formUser;
let formPerson = "";
const nameInput = formUser.userName;
const jobInput = formUser.userJob;
const personTitle = document.querySelector(".person__title");
const personSubTitle = document.querySelector(".person__sub-title ");
const btnEditInfoPerson = document.querySelector(".person__btn-edit");

// Кнопка закрытия
const closeButtons = document.querySelectorAll(".popup__btn-close");

closeButtons.forEach((button) => {
  const popup = button.closest(".popup");
  button.addEventListener("click", () => closePopup(popup));
});

function closePopup(popup) {
  popup.classList.remove("popup_opend");
  document.removeEventListener("keydown", closeByEscape);
}

function openPopup(popup) {
  popup.classList.add("popup_opend");
  document.addEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opend");
    closePopup(openedPopup);
  }
}

function resetForm(form) {
  form.reset();
}

function openArcticlePopup() {
  formArticle.resetValidation();
  formArticle.toggleButtonState({ disable: false });
  resetForm(articleForm);
  openPopup(popupAddArticle);
}

function openImagePopup(img) {
  imagePopupContent.src = img.src;
  imagePopupText.textContent = img.alt;
  imagePopupContent.alt = img.alt;

  openPopup(popupImage);
}

function openProfilePopup(popup) {
  nameInput.value = personTitle.textContent;
  jobInput.value = personSubTitle.textContent;
  formPerson.resetValidation();
  openPopup(popup);
}

function createCard(item) {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();
  return cardElement;
}

function renderCards() {
  const cards = initialCards.map((date) => createCard(date));
  list.append(...cards);
}
renderCards();

function submitFormDefauld(evt) {
  evt.preventDefault();
}

function submitFormArticle(evt) {
  submitFormDefauld(evt);
  formArticle.toggleButtonState({ disable: false });
  const card = createCard({
    name: articleTitle.value,
    link: articleLinkImage.value,
  });
  list.prepend(card);
  closePopup(popupAddArticle);
}

function submitFormUserInfo(evt) {
  submitFormDefauld(evt);
  formPerson.toggleButtonState({ disable: false });
  personTitle.textContent = nameInput.value;
  personSubTitle.textContent = jobInput.value;
  closePopup(pupupEditorName);
}

function renderValidate() {
  formPerson = new FormValidator(
    {
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__btn",
      inactiveButtonClass: "popup__btn_disable",
      inputErrorClass: "popup__input_invalid",
      errorClass: "popup__form-item-error",
    },
    "formUser"
  );

  formArticle = new FormValidator(
    {
      inputSelector: ".popup__input",
      submitButtonSelector: ".popup__btn",
      inactiveButtonClass: "popup__btn_disable",
      inputErrorClass: "popup__input_invalid",
      errorClass: "popup__form-item-error",
    },
    "formArticle"
  );
  formPerson.enableValidation();
  formArticle.enableValidation();
}
renderValidate();

btnEditInfoPerson.addEventListener("click", () =>
  openProfilePopup(pupupEditorName)
);
btnAddArticle.addEventListener("click", () => openArcticlePopup());

articleForm.addEventListener("submit", submitFormArticle);
formUser.addEventListener("submit", submitFormUserInfo);

export { openImagePopup };
