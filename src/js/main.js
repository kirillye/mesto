import "../pages/index.css";

import {
  initialCards,
  cardListSelector,
  btnEditInfoPerson,
  btnAddArticle,
  nameInput,
  jobInput,
  personTitle,
  personSubTitle,
} from "./utils/constants";

import { Card } from "./classes/Card.js";
import { Section } from "./classes/Section.js";
import { FormValidator } from "./classes/FormValidator.js";
import { UserInfo } from "./classes/UserInfo.js";
import { PopupWithForm } from "./classes/PopupWithForm";
import { PopupWithImage } from "./classes/PopupWithImage";

const userInfo = new UserInfo({
  name: ".person__title",
  info: ".person__sub-title",
});

const popupUserInfo = new PopupWithForm({
  selector: "#popup",
  callback: (evt) => {
    evt.preventDefault();
    formPerson.toggleButtonState({ disable: false });
    const data = popupUserInfo.getInputValues();
    userInfo.setUserInfo(data);
    popupUserInfo.close();
  },
});
popupUserInfo.setEventListeners();

const popupWithImage = new PopupWithImage("#popup-image");
popupWithImage.setEventListeners();

const popupNewArticleForm = new PopupWithForm({
  selector: "#popup-article",
  callback: (evt) => {
    evt.preventDefault();
    formArticle.toggleButtonState({ disable: false });
    const data = popupNewArticleForm.getInputValues();
    const card = {
      name: data[0],
      link: data[1],
    };
    cardsList.renderer(card);
    popupNewArticleForm.close();
  },
});
popupNewArticleForm.setEventListeners();

const formPerson = new FormValidator(
  {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__btn",
    inactiveButtonClass: "popup__btn_disable",
    inputErrorClass: "popup__input_invalid",
    errorClass: "popup__form-item-error",
  },
  "formUser"
);
formPerson.enableValidation();

const formArticle = new FormValidator(
  {
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__btn",
    inactiveButtonClass: "popup__btn_disable",
    inputErrorClass: "popup__input_invalid",
    errorClass: "popup__form-item-error",
  },
  "formArticle"
);
formArticle.enableValidation();

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card({ name: item.name, link: item.link }, (data) =>
        popupWithImage.open(data)
      );
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
  },
  cardListSelector
);

cardsList.renderItems();

btnEditInfoPerson.addEventListener("click", () => {
  popupUserInfo.open();
  nameInput.value = personTitle.textContent;
  jobInput.value = personSubTitle.textContent;
});
btnAddArticle.addEventListener("click", () => popupNewArticleForm.open());
