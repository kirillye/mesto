import { submitToDo } from "../main.js";

export class FormValidator {
  constructor(config) {
    this._config = config;
    this.form = document.forms[this._config.formName];
    this.buttonSubmitFormPlace = this.form.querySelector(
      `${this._config.submitButtonSelector}`
    );
    this.formPlaceFields = Array.from(
      this.form.querySelectorAll(`${this._config.inputSelector}`)
    );
    this.invalidFieldClass = this._config.inputErrorClass;
    this.popupBtnInactive = this._config.inactiveButtonClass;
  }

  enableValidation() {
    this._setEventListeners();
    this.formPlaceFields.forEach((itemField) => {
      const errorTextContainerSelector = `.popup__form-item-error_field_${itemField.name}`;
      const elementError = document.querySelector(errorTextContainerSelector);
      itemField.addEventListener("input", (e) => {
        const field = e.target;
        this._checkFormValidity();
        this._checkFieldValidity(itemField, elementError);
      });
    });
  }

  _focusHandler({ target }) {
    target.select();
  }

  _toggleButtonState({ disable }) {
    if (disable) {
      this.buttonSubmitFormPlace.removeAttribute("disabled");
      this.buttonSubmitFormPlace.classList.remove(`${this.popupBtnInactive}`);
    } else {
      this.buttonSubmitFormPlace.setAttribute("disabled", "disabled");
      this.buttonSubmitFormPlace.classList.add(`${this.popupBtnInactive}`);
    }
  }

  _checkFormValidity() {
    this._toggleButtonState({ disable: true });
    const formIsValid = this.formPlaceFields.every(
      ({ validity }) => validity.valid
    );

    if (!formIsValid) {
      this._toggleButtonState({ disable: false });
    }

    return formIsValid;
  }

  _setFieldError(
    elementField,
    elementError,
    { validationMessage, valid, invalidFieldClass }
  ) {
    elementError.textContent = validationMessage;
    if (valid) {
      elementField.classList.remove(invalidFieldClass);
    } else {
      elementField.classList.add(invalidFieldClass);
    }
  }

  _checkFieldValidity(elementField, elementError) {
    const {
      validationMessage,
      validity: { valid },
    } = elementField;
    const invalidFieldClass = this.invalidFieldClass;
    const params = {
      validationMessage,
      valid,
      invalidFieldClass,
    };

    this._setFieldError(elementField, elementError, params);
    return valid;
  }

  _setEventListeners() {
    this.form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._toggleButtonState({ disable: false });
      const form = evt.target.closest(".popup__form");
      submitToDo(form);
    });
  }
}
