import "./index.css";

import {
  initialCards,
  cardListContainer,
  btnEditInfoPerson,
  btnAddArticle,
  nameInput,
  jobInput,
  personTitle,
  personSubTitle,
  formDate,
  cardSelector,
} from "../js/utils/constants";

import { Card } from "../js/components/Card.js";
import { Section } from "../js/components/Section.js";
import { FormValidator } from "../js/components/FormValidator.js";
import { UserInfo } from "../js/components/UserInfo.js";
import { PopupWithForm } from "../js/components/PopupWithForm";
import { PopupWithImage } from "../js/components/PopupWithImage";

const formPerson = new FormValidator(formDate, "formUser");
formPerson.enableValidation();

const formArticle = new FormValidator(formDate, "formArticle");
formArticle.enableValidation();

const userInfo = new UserInfo({
  name: ".person__title",
  info: ".person__sub-title",
});

const popupUserInfo = new PopupWithForm({
  selector: "#popup",
  callback: (evt) => {
    evt.preventDefault();
    // formPerson.toggleButtonState({ disable: false });
    const data = popupUserInfo.getInputValues();
    userInfo.setUserInfo(data);
    popupUserInfo.close();
  },
  resetForm: () => {
    formPerson.resetValidation();
  },
});
popupUserInfo.setEventListeners();

const popupWithImage = new PopupWithImage("#popup-image");
popupWithImage.setEventListeners();

const popupNewArticleForm = new PopupWithForm({
  selector: "#popup-article",
  callback: (evt) => {
    evt.preventDefault();
    // formArticle.toggleButtonState({ disable: false });
    const data = popupNewArticleForm.getInputValues();
    const card = {
      name: data.articleTitle,
      link: data.linkImage,
    };
    cardsList.renderer(card);
    popupNewArticleForm.close();
  },
  resetForm: () => {
    formArticle.resetValidation();
  },
});
popupNewArticleForm.setEventListeners();

const cardsList = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const card = new Card(
        { name: item.name, link: item.link },
        cardSelector,
        (data) => popupWithImage.open(data)
      );
      const cardElement = card.generateCard();
      cardsList.addItem(cardElement);
    },
  },
  cardListContainer
);

cardsList.renderItems();

btnEditInfoPerson.addEventListener("click", () => {
  popupUserInfo.open();
  const { info, name } = userInfo.getUserInfo();
  nameInput.value = name;
  jobInput.value = info;
});
btnAddArticle.addEventListener("click", () => {
  popupNewArticleForm.open();
  formArticle.toggleButtonState({ disable: false });
});
