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

  const template = document
    .querySelector("#card-template")
    .content.querySelector(".articles__item");
  const list = document.querySelector(".articles__grid");

  const btn = document.querySelector(".person__btn-edit");
  const btnAddPopup = document.querySelector(".person__add-article");
  const popop = document.querySelector("#popup");
  const imagePopup = document.querySelector("#popup-image");
  let imagePopupContent = document.querySelector(".popup-image__img");

  let btnClose = document.querySelector(".popup__btn-close");
  let formElement = document.querySelector(".popup__form");
  let nameInput = document.querySelector(".popup__input_content_name");
  let jobInput = document.querySelector(".popup__input_content_job");
  let personTitle = document.querySelector(".person__title");
  let personSubTitle = document.querySelector(".person__sub-title ");

  function popopToggle(item = popop) {
    console.log(item);
    item.classList.toggle("popup_opend");
  }

  function popupOpen(isPopupImage = false, img) {
    if (!isPopupImage) {
      nameInput.value = personTitle.textContent;
      jobInput.value = personSubTitle.textContent;
      console.log("работаем");
    } else if (isPopupImage) {
      console.log("Подставляем карктинку");
      imagePopupContent.src = img.src;
    }
    popopToggle();
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    personTitle.textContent = nameInput.value;
    personSubTitle.textContent = jobInput.value;
    popopToggle();
  }

  function renderCards() {
    initialCards.forEach((item) => {
      const card = template.cloneNode(true);
      card.addEventListener("click", (e) => {
        let item = e.target;
        if (item.classList.contains("articles__image")) {
          popupOpen(true, item);
          popopToggle(imagePopup);
        }
      });
      card.querySelector(".articles__title").textContent = item.name;
      card.querySelector(".articles__image").src = item.link;
      list.append(card);
    });
  }

  btn.addEventListener("click", () => popupOpen());
  btnClose.addEventListener("click", () => popopToggle());
  formElement.addEventListener("submit", handleFormSubmit);
  btnAddPopup.addEventListener("click", popupOpen);
  renderCards();
});
