const enableValidation = (config) => {
  const formPlace = document.forms[config.formPlace];
  const formPlaceFields = Array.from(
    formPlace.querySelectorAll(`${config.inputSelector}`)
  );
  const buttonSubmitFormPlace = formPlace.querySelector(
    `${config.submitButtonSelector}`
  );
  console.log(buttonSubmitFormPlace);
  formPlaceFields.forEach((itemField) => {
    const errorTextContainerSelector = `.popup__form-item-error_field_${itemField.name}`;
    const elementError = formPlace.querySelector(errorTextContainerSelector);
    itemField.addEventListener("input", (e) => {
      const field = e.target;
      checkFormValidity(formPlaceFields, buttonSubmitFormPlace);
      checkFieldValidity(itemField, elementError, config.inputErrorClass);
    });
  });
};

const focusHandler = ({ target }) => target.select();

const toggleFormSubmit = (elementSubmit, { disable }) => {
  if (disable) {
    elementSubmit.removeAttribute("disabled");
    elementSubmit.classList.remove("popup__btn_disable");
  } else {
    elementSubmit.setAttribute("disabled", "disabled");
    elementSubmit.classList.add("popup__btn_disable");
  }
};

const checkFormValidity = (elementsFields, elementSubmit) => {
  toggleFormSubmit(elementSubmit, { disable: true });
  const formIsValid = elementsFields.every(({ validity }) => validity.valid);

  if (!formIsValid) {
    toggleFormSubmit(elementSubmit, { disable: false });
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
