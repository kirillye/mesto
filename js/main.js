window.addEventListener("load", function () {
  let body = document.querySelector(".body");
  let btn = document.querySelector(".header__btn-edit");
  let popop = document.querySelector(".popup");
  let btnClose = document.querySelector(".popup__btn-close");
  let formElement = document.querySelector(".popup__form");
  let nameInput = document.querySelector(".popup__input_content_name");
  let jobInput = document.querySelector(".popup__input_content_job");

  btn.addEventListener("click", popopToggle);
  btnClose.addEventListener("click", popopToggle);

  function popopToggle() {
    popop.classList.toggle("popup_opend");
    body.classList.toggle("body_blocked");
  }

  function handleFormSubmit(evt) {
    let headerTitle = document.querySelector(".header__title");
    let headerSubTitle = document.querySelector(".header__sub-title");
    evt.preventDefault();
    headerTitle.textContent = nameInput.value;
    headerSubTitle.textContent = jobInput.value;
    popopToggle();
  }

  formElement.addEventListener("submit", handleFormSubmit);
});
