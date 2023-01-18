window.addEventListener("load", function () {
  let btn = document.querySelector(".person__btn-edit");
  let popop = document.querySelector(".popup");
  let btnClose = document.querySelector(".popup__btn-close");
  let formElement = document.querySelector(".popup__form");
  let nameInput = document.querySelector(".popup__input_content_name");
  let jobInput = document.querySelector(".popup__input_content_job");
  let personTitle = document.querySelector(".person__title");
  let personSubTitle = document.querySelector(".person__sub-title ");

  function popopToggle() {
    popop.classList.toggle("popup_opend");
    nameInput.value = personTitle.textContent;
    jobInput.value = personSubTitle.textContent;
  }

  function handleFormSubmit(evt) {
    evt.preventDefault();
    personTitle.textContent = nameInput.value;
    personSubTitle.textContent = jobInput.value;
    popopToggle();
  }

  btn.addEventListener("click", popopToggle);
  btnClose.addEventListener("click", popopToggle);
  formElement.addEventListener("submit", handleFormSubmit);
});
