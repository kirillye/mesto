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
  btnPopupConfirm,
  btnChangeAvatar,
} from "../js/utils/constants";

import { api } from "../js/components/Api.js";
import { Card } from "../js/components/Card.js";
import { PopupConfirm } from "../js/components/PopupConfirm";
import { Section } from "../js/components/Section.js";
import { FormValidator } from "../js/components/FormValidator.js";
import { UserInfo } from "../js/components/UserInfo.js";
import { PopupWithForm } from "../js/components/PopupWithForm";
import { PopupWithImage } from "../js/components/PopupWithImage";

const formPerson = new FormValidator(formDate, "formUser");
formPerson.enableValidation();

const formArticle = new FormValidator(formDate, "formArticle");
formArticle.enableValidation();

const formUserAvatar = new FormValidator(formDate, "formUserAvatar");
formUserAvatar.enableValidation();

const userInfo = new UserInfo({
  name: ".person__title",
  info: ".person__sub-title",
  avatar: ".person__avatar",
});

const popupUserInfo = new PopupWithForm({
  selector: "#popup",
  callback: (evt) => {
    evt.preventDefault();
    const data = popupUserInfo.getInputValues();
    api
      .sendUserInfo(data)
      .then(() => {
        formPerson.sendingForm(true);
      })
      .then(() => {
        formPerson.sendingForm(false);
        userInfo.setUserInfo(data);
        popupUserInfo.close();
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  resetForm: () => {
    formPerson.resetValidation();
  },
});
popupUserInfo.setEventListeners();

const popupConfirm = new PopupConfirm({
  selector: "#popup-confirm",
  btn: btnPopupConfirm,
  callback: (data) => {
    api
      .removeCard(data.id)
      .then((res) => {
        popupConfirm.close();
        data._removeCard();
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
});
popupConfirm.setEventListeners();

const popupWithImage = new PopupWithImage("#popup-image");
popupWithImage.setEventListeners();

const popupAvatar = new PopupWithForm({
  selector: "#popup-avatar",
  callback: (evt) => {
    evt.preventDefault();
    const data = popupAvatar.getInputValues();
    api
      .sendUserAvatar(data.userLinkImage)
      .then(() => {
        formUserAvatar.sendingForm(true);
      })
      .then(() => {
        userInfo.setUserAvatar(data.userLinkImage);
        popupAvatar.close();
        formUserAvatar.sendingForm(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  resetForm: () => {
    formUserAvatar.resetValidation();
  },
});
popupAvatar.setEventListeners();

const popupNewArticleForm = new PopupWithForm({
  selector: "#popup-article",
  callback: (evt) => {
    evt.preventDefault();
    const data = popupNewArticleForm.getInputValues();
    api
      .sendCard(data)
      .then((res) => {
        formArticle.sendingForm(true);
        return res;
      })
      .then((res) => {
        formArticle.sendingForm(false);
        cardsList.renderer(res);
        popupNewArticleForm.close();
      })
      .catch((err) => {
        console.log(err.message);
      });
  },
  resetForm: () => {
    formArticle.resetValidation();
  },
});
popupNewArticleForm.setEventListeners();

let cardsList;

api
  .getCards()
  .then((res) => {
    cardsList = new Section(
      {
        items: res,
        renderer: (item) => {
          // console.log(item.likes);
          const card = new Card(
            {
              name: item.name,
              link: item.link,
              likes: item.likes.length,
              likeUsers: item.likes,
              id: item._id,
              owner: item.owner,
            },
            cardSelector,
            (data) => popupWithImage.open(data),
            (data) => {
              popupConfirm.open(data);
            },
            (data) => {
              api
                .putLike(data.id)
                .then((res) => {
                  data.changeSumLike(res.likes.length);
                })
                .catch((err) => {
                  console.log(err.message);
                });
            },
            (data) => {
              api
                .removeLike(data.id)
                .then((res) => {
                  data.changeSumLike(res.likes.length);
                })
                .catch((err) => {
                  console.log(err.message);
                });
            },
            () => userInfo.getUserInfo()
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
    userInfo.setUserAvatar(data.src);
    userInfo.setUserInfo(data);
  })
  .catch((err) => {
    console.log(err.message);
  });

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

btnChangeAvatar.addEventListener("click", () => {
  popupAvatar.open();
  formArticle.toggleButtonState({ disable: false });
});
