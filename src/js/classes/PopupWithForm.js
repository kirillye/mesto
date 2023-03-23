import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
  constructor({ selector, callback }) {
    super(selector);
    this.form = this.element.querySelector(".form");
    this.callback = callback;
    this.formPlaceFields = Array.from(
      this.form.querySelectorAll(".popup__input")
    );
  }

  setEventListeners() {
    super.setEventListeners();
    this.form.addEventListener("submit", (evt) => {
      this.callback(evt);
    });
  }

  close() {
    super.close();
    this.form.reset();
    this.formPlaceFields.forEach((itemField) => {
      const errorTextContainerSelector = `.popup__form-item-error_field_${itemField.name}`;
      const elementError = document.querySelector(errorTextContainerSelector);
      elementError.textContent = "";
      if (itemField.classList.contains("popup__input_invalid")) {
        itemField.classList.remove("popup__input_invalid");
      }
    });
  }

  getInputValues() {
    return this.formPlaceFields.map((item) => item.value);
  }
}
