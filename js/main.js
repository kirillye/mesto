window.addEventListener("load", function () {
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
  const template = document
    .querySelector("#card-template")
    .content.querySelector(".articles__item");
  const list = document.querySelector(".articles__grid");

  // popup image
  const popupImage = document.querySelector("#popup-image");
  const imagePopupContent = popupImage.querySelector(".popup-image__img");
  const imagePopupText = popupImage.querySelector(".popup__figcaption");

  // popup addArticle
  const popupAddArticle = document.querySelector("#popup-article");
  const btnAddArticle = document.querySelector(".person__add-article");
  const articleForm = document.forms.formArticle;
  const articleTitle = articleForm.articleTitle;
  const articleLinkImage = articleForm.linkImage;

  // articleTitle.addEventListener("input", () => {
  //   console.log(articleTitle.validity);
  // });

  // popup editorNameUser
  const pupupEditorName = document.querySelector("#popup");
  const formUser = document.forms.formUser;
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

  // enableValidation({
  //   formPlace: "formArticle",
  //   inputSelector: ".popup__input",
  //   submitButtonSelector: ".popup__btn",
  //   inactiveButtonClass: "popup__button_disabled",
  //   inputErrorClass: "popup__input_invalid",
  //   errorClass: "popup__form-item-error",
  // });

  enableValidation({
    formSelector: ".popup__form",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__btn",
    inactiveButtonClass: "popup__btn_disable",
    inputErrorClass: "popup__input_invalid",
    errorClass: "popup__form-item-error",
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

  function openImagePopup(popup, img) {
    imagePopupContent.src = img.src;
    imagePopupText.textContent = img.alt;
    imagePopupContent.alt = img.alt;

    openPopup(popup);
  }

  function openProfilePopup(popup) {
    nameInput.value = personTitle.textContent;
    jobInput.value = personSubTitle.textContent;

    openPopup(popup);
  }

  function handleProfileFormSubmit(evt) {
    evt.preventDefault();
    toggleButtonState(evt.target, { disable: true });
    personTitle.textContent = nameInput.value;
    personSubTitle.textContent = jobInput.value;
    closePopup(pupupEditorName);
  }

  function addArticle(evt) {
    const form = evt.target.closest(".form");
    const btn = evt.submitter;

    evt.preventDefault();
    toggleButtonState(btn, { disable: false });
    const titleArticle = articleTitle.value;
    const imageSrc = articleLinkImage.value;
    const newArticle = createArticle({
      name: titleArticle,
      link: imageSrc,
    });

    list.prepend(newArticle);
    resetForm(form);
    closePopup(popupAddArticle);
  }

  function createArticle(item) {
    const article = template.cloneNode(true);
    const articleImage = article.querySelector(".articles__image");
    article.querySelector(".articles__title").textContent = item.name;
    if (!item.name) {
      articleImage.alt = "Картинка статьи";
    } else {
      articleImage.alt = item.name;
    }
    articleImage.src = item.link;

    articleImage.addEventListener("click", function (evt) {
      openImagePopup(popupImage, evt.target);
    });
    article
      .querySelector(".articles__icon-trush")
      .addEventListener("click", () => {
        article.remove();
      });
    article
      .querySelector(".articles__icon-like")
      .addEventListener("click", (e) => {
        e.target.classList.toggle("articles__icon-like_active");
      });

    return article;
  }

  function renderCards() {
    const cards = initialCards.map(createArticle);
    list.append(...cards);
  }

  btnEditInfoPerson.addEventListener("click", () =>
    openProfilePopup(pupupEditorName)
  );
  btnAddArticle.addEventListener("click", () => openPopup(popupAddArticle));
  formUser.addEventListener("submit", handleProfileFormSubmit);
  articleForm.addEventListener("submit", addArticle);
  renderCards();
});
