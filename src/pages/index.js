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
  btnChangeAvatar,
} from "../js/utils/constants";

import { api } from "../js/components/Api.js";
import { Card } from "../js/components/Card.js";
import { PopupConfirm } from "../js/components/PopupConfirm";
import { cardList } from "../js/components/Section.js";
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
    popupUserInfo.sending(false);
    const data = popupUserInfo.getInputValues();
    api
      .sendUserInfo(data)
      .then((res) => {
        userInfo.setUserInfo(res);
        popupUserInfo.close();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        popupUserInfo.sending(true);
      });
  },
  resetForm: () => {
    formPerson.resetValidation();
  },
});
popupUserInfo.setEventListeners();

const popupConfirm = new PopupConfirm({
  selector: "#popup-confirm",
  callback: (data) => {
    api
      .removeCard(data.id)
      .then((res) => {
        popupConfirm.close();
        data.removeCard();
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
    popupAvatar.sending(false);
    const data = popupAvatar.getInputValues();
    api
      .sendUserAvatar(data.userLinkImage)
      .then((res) => {
        userInfo.setUserAvatar(res);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        popupAvatar.sending(true);
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
    popupNewArticleForm.sending(false);
    const data = popupNewArticleForm.getInputValues();
    api
      .sendCard(data)
      .then((res) => {
        const cardElement = createCard(res);
        cardList.addItem(cardElement);
        popupNewArticleForm.close();
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        popupNewArticleForm.sending(true);
      });
  },
  resetForm: () => {
    formArticle.resetValidation();
  },
});
popupNewArticleForm.setEventListeners();

Promise.all([
  //в Promise.all передаем массив промисов которые нужно выполнить
  api.getUserInfo(),
  api.getCards(),
])
  .then((values) => {
    const userConfigFormServer = values[0];
    const cardsConfigFormServer = values[1].reverse();

    // Отрисовка данных пользователя
    userInfo.setUserAvatar(userConfigFormServer);
    userInfo.setUserInfo(userConfigFormServer);

    // Отрисовка карточек

    cardList.renderItems(cardsConfigFormServer, (item) => {
      const cardElement = createCard(item);
      cardList.addItem(cardElement);
    });
  })
  .catch((err) => {
    console.log(err);
  });

function createCard(item) {
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
          data.toggleLikeColor();
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
          data.toggleLikeColor();
        })
        .catch((err) => {
          console.log(err.message);
        });
    },
    () => userInfo.getUserInfo()
  );

  const cardElement = card.generateCard();
  return cardElement;
}

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
