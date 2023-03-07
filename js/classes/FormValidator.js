export class FormValidator {
  constructor(config, formName) {
    this._config = config;
    this.form = document.forms[formName];
  }

  enableValidation() {
    this._setEventListeners();
    const formPlaceFields = Array.from(
      this.form.querySelectorAll(`${this._config.inputSelector}`)
    );
    const buttonSubmitFormPlace = this.form.querySelector(
      `${this._config.submitButtonSelector}`
    );
    formPlaceFields.forEach((itemField) => {
      const errorTextContainerSelector = `.popup__form-item-error_field_${itemField.name}`;
      const elementError = document.querySelector(errorTextContainerSelector);
      itemField.addEventListener("input", (e) => {
        const field = e.target;
        this._checkFormValidity(
          formPlaceFields,
          buttonSubmitFormPlace,
          this._config.inactiveButtonClass
        );
        this._checkFieldValidity(
          itemField,
          elementError,
          this._config.inputErrorClass
        );
      });
    });
  }

  _focusHandler({ target }) {
    target.select();
  }

  _toggleButtonState(elementSubmit, { disable }, popupBtnInactive) {
    if (disable) {
      elementSubmit.removeAttribute("disabled");
      elementSubmit.classList.remove(`${popupBtnInactive}`);
    } else {
      elementSubmit.setAttribute("disabled", "disabled");
      elementSubmit.classList.add(`${popupBtnInactive}`);
    }
  }

  _checkFormValidity(elementsFields, elementSubmit, popupBtnInactive) {
    this._toggleButtonState(elementSubmit, { disable: true }, popupBtnInactive);
    const formIsValid = elementsFields.every(({ validity }) => validity.valid);

    if (!formIsValid) {
      this._toggleButtonState(
        elementSubmit,
        { disable: false },
        popupBtnInactive
      );
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

  _checkFieldValidity(elementField, elementError, invalidFieldClass) {
    const {
      validationMessage,
      validity: { valid },
    } = elementField;

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
      this._toggleButtonState(
        evt.submitter,
        { disable: false },
        "popup__btn_disable"
      );
      const form = evt.target.closest(".popup__form");
      this._config.submitToDo(form);
    });
  }
}
