import { Popup } from "./popup.js";

export class PopupWithForm extends Popup {
  constructor({ selector, callback, resetForm }) {
    super(selector);
    this.form = this.element.querySelector(".form");
    this.callback = callback;
    this.resetForm = resetForm;
    this._inputList = this.form.querySelectorAll(".popup__input");
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
    this.resetForm();
  }

  getInputValues() {
    this._formValues = {};

    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }
}
