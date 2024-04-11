import { FormValidator } from "..components/FormValidator"; 

// enabling validation by calling enableValidation()
// pass all the settings on call

function showInputError(formEl, inputEl, opts) {
  const { inputErrorClass, errorClass } = opts;
  const errorMessageElement = formEl.querySelector(`#${inputEl.id}-error`);

  inputEl.classList.add(inputErrorClass);
  //get validation msg
  //display err msg
  errorMessageElement.textContent = inputEl.validationMessage;
  //add error class to input
  inputEl.classList.add(errorClass);

} //end func

function hideInputError(formEl, inputEl, opts) {
  const { inputErrorClass, errorClass } = opts;

  const errorMessageElement = formEl.querySelector(`#${inputEl.id}-error`);
  inputEl.classList.remove(inputErrorClass);
  errorMessageElement.textContent = "";
  inputEl.classList.remove(errorClass);
} //end func

function toggleButtonState(inputEls, btn, opts) {
  const { inactiveButtonClass } = opts;
  inputEls = Array.from(inputEls); 					

  let isValid = true; 					//assume all inputs are initially true
  inputEls.forEach((inputEl) => {
    //if input valdity true
    if (!inputEl.validity.valid) {
      //if any inputs not valid isValid set to false
      isValid = false;
    } //end if
  });
  //if every input valid, enable button
  if (isValid) {
    btn.classList.remove(inactiveButtonClass);
    btn.disabled = false;
  } //end if
  //if any input in-valid disable button
  else {
    btn.classList.add(inactiveButtonClass);
    btn.disabled = true;
  } //end else
} //end func

function checkInputValidity(formEls, inputEls, opt) {
  //if input !valid
  if (!inputEls.validity.valid) {
    showInputError(formEls, inputEls, opt);
  } //end if
  else {
    hideInputError(formEls, inputEls, opt);
  } //end else
} //end func

function setEventListeners(formElements, options) {
  // look for all inputs inside of forms
  const { inputSelector, submitButtonSelector } = options;
  const inputElement = Array.from(formElements.querySelectorAll(inputSelector));
  const submitButton = formElements.querySelector(submitButtonSelector); //("#js-modal__button");
  inputElement.forEach((inputEl) => {
    inputEl.addEventListener("input", (evt) => {
      // loop through all inputs to see if they are valid
      checkInputValidity(formElements, inputEl, options);
      toggleButtonState(inputElement, submitButton, options); //togglebtn(inputEl, submitbtn,options)
    });
  });
} //end func

function enableValidation(setup) {
  const allFormElements = Array.from(
    document.querySelectorAll(setup.formSelector),
  );
  allFormElements.forEach((formEl) => {
    formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });

    setEventListeners(formEl, setup);
  });
} //end func

const config = {
  formSelector: ".modal__form", 						//".popup__form",
  inputSelector: ".modal__field", 						//".popup__input",
  submitButtonSelector: ".modal__button", 				//".popup__button",
  inactiveButtonClass: ".modal__button_disabled",
  inputErrorClass: "modal__error", 						//"popup__input_type_error",
  errorClass: "modal__error_visible",
};

enableValidation(config);

/*DEBUGGING BELOW LINE 100*/
const editFormValidator = new FormValidator(config);
