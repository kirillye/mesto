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

import { api } from "../js/components/Api.js";
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
  avatar: ".person__avatar",
});

const popupUserInfo = new PopupWithForm({
  selector: "#popup",
  callback: (evt) => {
    evt.preventDefault();
    // formPerson.toggleButtonState({ disable: false });
    const data = popupUserInfo.getInputValues();
    // api
    //   .sendUserInfo(data)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err.message);
    //   });
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
    api
      .sendUserInfo(data)
      .then((response) => {
        response.json();
        console.log(res);
      })
      .catch((err) => {
        console.log(err.message);
      });
    cardsList.renderer(card);
    popupNewArticleForm.close();
  },
  resetForm: () => {
    formArticle.resetValidation();
  },
});
popupNewArticleForm.setEventListeners();

let cardsList;

api
  .getTasks()
  .then((res) => {
    cardsList = new Section(
      {
        items: res,
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
  })
  .then(() => {
    cardsList.renderItems();
  })
  .catch((err) => {
    console.log(err.message);
  });

api
  .getUserInfo()
  .then((res) => {
    const data = {
      userName: res.name,
      userJob: res.about,
      src: res.avatar,
    };
    console.log(res);
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

// const data = popupUserInfo.getInputValues();
// api
//   .sendUserInfo(data)
//   .then((response) => {
//     response.json();
//   })
//   .catch((err) => {
//     console.log(err.message);
//   });

// const cardsList = new Section(
//   {
//     items: initialCards,
//     renderer: (item) => {
//       const card = new Card(
//         { name: item.name, link: item.link },
//         cardSelector,
//         (data) => popupWithImage.open(data)
//       );
//       const cardElement = card.generateCard();
//       cardsList.addItem(cardElement);
//     },
//   },
//   cardListContainer
// );

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
