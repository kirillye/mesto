export class FormValidator {
  constructor(config, formName) {
    this._config = config;
    this.form = document.forms[formName];
    this.buttonSubmitFormPlace = this.form.querySelector(
      `${this._config.submitButtonSelector}`
    );
    this.formPlaceFields = Array.from(
      this.form.querySelectorAll(`${this._config.inputSelector}`)
    );
    this._btnTextDefault = this.buttonSubmitFormPlace.textContent;
    this.invalidFieldClass = this._config.inputErrorClass;
    this.popupBtnInactive = this._config.inactiveButtonClass;
  }

  enableValidation() {
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

  // sendingForm(sending) {
  //   if (sending) {
  //     this.buttonSubmitFormPlace.textContent = "Сохранение...";
  //   } else {
  //     this.buttonSubmitFormPlace.textContent = this._btnTextDefault;
  //   }
  // }

  toggleButtonState({ disable }) {
    if (disable) {
      this.buttonSubmitFormPlace.removeAttribute("disabled");
      this.buttonSubmitFormPlace.classList.remove(`${this.popupBtnInactive}`);
    } else {
      this.buttonSubmitFormPlace.setAttribute("disabled", "disabled");
      this.buttonSubmitFormPlace.classList.add(`${this.popupBtnInactive}`);
    }
  }

  _checkFormValidity() {
    this.toggleButtonState({ disable: true });
    const formIsValid = this.formPlaceFields.every(
      ({ validity }) => validity.valid
    );

    if (!formIsValid) {
      this.toggleButtonState({ disable: false });
    }

    return formIsValid;
  }

  resetValidation() {
    this.formPlaceFields.forEach((itemField) => {
      const errorTextContainerSelector = `.popup__form-item-error_field_${itemField.name}`;
      const elementError = document.querySelector(errorTextContainerSelector);
      this._setFieldError(itemField, elementError, {
        valid: true,
      });
      this._checkFormValidity();
    });
  }

  _setFieldError(elementField, elementError, { validationMessage, valid }) {
    elementError.textContent = validationMessage;
    if (valid) {
      elementField.classList.remove(this.invalidFieldClass);
    } else {
      elementField.classList.add(this.invalidFieldClass);
    }
  }

  _checkFieldValidity(elementField, elementError) {
    const {
      validationMessage,
      validity: { valid },
    } = elementField;
    const params = {
      validationMessage,
      valid,
    };

    this._setFieldError(elementField, elementError, params);
    return valid;
  }
}
