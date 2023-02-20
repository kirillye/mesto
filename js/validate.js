const enableValidation = (config) => {
  const forms = Array.from(document.querySelectorAll(`${config.formSelector}`));
  forms.forEach((form) => {
    const formPlaceFields = Array.from(
      form.querySelectorAll(`${config.inputSelector}`)
    );
    const buttonSubmitFormPlace = form.querySelector(
      `${config.submitButtonSelector}`
    );
    formPlaceFields.forEach((itemField) => {
      const errorTextContainerSelector = `.popup__form-item-error_field_${itemField.name}`;
      const elementError = document.querySelector(errorTextContainerSelector);
      itemField.addEventListener("input", (e) => {
        const field = e.target;
        checkFormValidity(
          formPlaceFields,
          buttonSubmitFormPlace,
          config.inactiveButtonClass
        );
        checkFieldValidity(itemField, elementError, config.inputErrorClass);
      });
    });
  });
};

const focusHandler = ({ target }) => target.select();

const toggleButtonState = (elementSubmit, { disable }, popupBtnInactive) => {
  if (disable) {
    elementSubmit.removeAttribute("disabled");
    elementSubmit.classList.remove(`${popupBtnInactive}`);
  } else {
    elementSubmit.setAttribute("disabled", "disabled");
    elementSubmit.classList.add(`${popupBtnInactive}`);
  }
};

const checkFormValidity = (elementsFields, elementSubmit, popupBtnInactive) => {
  toggleButtonState(elementSubmit, { disable: true }, popupBtnInactive);
  const formIsValid = elementsFields.every(({ validity }) => validity.valid);

  if (!formIsValid) {
    toggleButtonState(elementSubmit, { disable: false }, popupBtnInactive);
  }

  return formIsValid;
};

const setFieldError = (
  elementField,
  elementError,
  { validationMessage, valid, invalidFieldClass }
) => {
  elementError.textContent = validationMessage;
  if (valid) {
    elementField.classList.remove(invalidFieldClass);
  } else {
    elementField.classList.add(invalidFieldClass);
  }
};

const checkFieldValidity = (elementField, elementError, invalidFieldClass) => {
  const {
    validationMessage,
    validity: { valid },
  } = elementField;

  const params = {
    validationMessage,
    valid,
    invalidFieldClass,
  };

  setFieldError(elementField, elementError, params);
  return valid;
};

/*
// не требуется по проекту, но можно сделать, чтобы по красоте
const resetForm = (config, form) => {
  // сброс формы, текста ошибок и классов ошибок
};
*/
