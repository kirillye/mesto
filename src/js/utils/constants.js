// object with cards
export const initialCards = [
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

export const formDate = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__btn",
  inactiveButtonClass: "popup__btn_disable",
  inputErrorClass: "popup__input_invalid",
  errorClass: "popup__form-item-error",
};

// List articles
export const cardListContainer = document.querySelector(".articles__grid");
export const cardSelector = "#card-template";

// popup addArticle
export const btnAddArticle = document.querySelector(".person__add-article");

// popup editorNameUser
export const nameInput = formUser.userName;
export const jobInput = formUser.userJob;
export const personTitle = document.querySelector(".person__title");
export const personSubTitle = document.querySelector(".person__sub-title ");
export const btnEditInfoPerson = document.querySelector(".person__btn-edit");
