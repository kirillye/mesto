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

  // List articles
  const template = document
    .querySelector("#card-template")
    .content.querySelector(".articles__item");
  const list = document.querySelector(".articles__grid");

  // popup image
  const popupImage = document.querySelector("#popup-image");
  let imagePopupContent = popupImage.querySelector(".popup-image__img");
  let imagePopupText = popupImage.querySelector(".popup__figcaption");

  // popup addArticle
  const popupAddArticle = document.querySelector("#popup-article");
  const btnAddArticle = document.querySelector(".person__add-article");
  const formAtricle = popupAddArticle.querySelector(".popup__form");
  let articleTitle = popupAddArticle.querySelector("#popup__article-title");
  let articleLinkImage = popupAddArticle.querySelector(
    "#popup__article-link-image"
  );
  const articleForm = popupAddArticle.querySelector(".popup__form");

  // popup editorNameUser
  const pupupEditorName = document.querySelector("#popup");
  const formElement = pupupEditorName.querySelector(".popup__form");
  let nameInput = pupupEditorName.querySelector(".popup__input_content_name");
  let jobInput = pupupEditorName.querySelector(".popup__input_content_job");
  let personTitle = document.querySelector(".person__title");
  let personSubTitle = document.querySelector(".person__sub-title ");
  const btnEditInfoPerson = document.querySelector(".person__btn-edit");

  const btnsClose = document.querySelectorAll(".popup__btn-close");

  function popopToggle(popup) {
    popup.classList.toggle("popup_opend");
  }

  function popupOpen(popup = pupupEditorName, img) {
    if (popup == pupupEditorName) {
      nameInput.value = personTitle.textContent;
      jobInput.value = personSubTitle.textContent;
    } else if (popup == popupImage) {
      imagePopupContent.src = img.src;
      imagePopupText.textContent = img.alt;
    } else if (popup == popupAddArticle) {
      articleTitle.value = "Название";
      articleLinkImage.value = "Ссылка на картинку";
    }
    popopToggle(popup);
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    personTitle.textContent = nameInput.value;
    personSubTitle.textContent = jobInput.value;
    popopToggle(pupupEditorName);
  }

  function addArticle(evt) {
    evt.preventDefault();
    let titleArticle = articleTitle.value;
    let imageSrc = articleLinkImage.value;
    if (!imageSrc || "Ссылка на картинку") {
      imageSrc =
        "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg";
    }
    const newArticle = createArticle({
      name: titleArticle,
      link: imageSrc,
    });

    list.prepend(newArticle);
    popopToggle(popupAddArticle);
  }

  function createArticle(item) {
    const article = template.cloneNode(true);
    article.querySelector(".articles__title").textContent = item.name;
    article.querySelector(".articles__image").alt = item.name;
    article.querySelector(".articles__image").src = item.link;

    article
      .querySelector(".articles__image")
      .addEventListener("click", function () {
        popupOpen(popupImage, this);
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
    const cards = initialCards.map((item) => {
      return createArticle(item);
    });

    list.append(...cards);
  }

  btnEditInfoPerson.addEventListener("click", () => popupOpen());
  btnAddArticle.addEventListener("click", () => popupOpen(popupAddArticle));
  btnsClose.forEach((item) => {
    item.addEventListener("click", () => {
      let popup = item.parentElement.parentElement;
      if (popup.classList.contains("popup")) {
        popopToggle(popup);
      } else {
        console.log("popup не найден");
      }
    });
  });
  formElement.addEventListener("submit", handleFormSubmit);
  articleForm.addEventListener("submit", addArticle);
  renderCards();
});
