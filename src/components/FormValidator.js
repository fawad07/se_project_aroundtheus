export class FormValidator {
	/*
  Parms: 
  formElement
  the setting provided
  */
	constructor(config, formElement) {
		this._config = config;
		console.log(config);
		this._form = formElement; //HTML element
	} //end constructor

	enableValidation() {
		this._form.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._disabledButton();
		});
		this._setEventListeners();
	} //end func

	_setEventListeners() {
		this._inputElements = Array.from(
			this._form.querySelectorAll(this._config.inputSelector)
		);
		this._submitButton = this._form.querySelector(
			this._config.submitButtonSelector
		); //("#js-modal__button");

		this._inputElements.forEach((inputEl) => {
			inputEl.addEventListener("input", (evt) => {
				// loop through all inputs to see if they are valid
				this._checkInputValidity(inputEl);
				this._toggleButtonState();
			});
		});
	} //end func

	/**
	 * Params: None
	 * Description:	Chedks the input text of the place name and the url
	 * returns: boolean value true/false
	 */
	_checkValidity() {
		const isValid = this._inputElements.every(
			(input) => input.validity.valid
		);
		return isValid;
	} //end func

	/**
	 * Params: None
	 * Description:   disable button used by toggle button state
	 * return:  None
	 */
	_disabledButton() {
		this._submitButton.classList.add(this._config.inactiveButtonClass);
		this._submitButton.disabled = true;
	} //end func

	/**
	 * Params: None
	 * Description:   enable button used by toggle button state
	 * return:  None
	 */
	_enabledButton() {
		this._submitButton.classList.remove(this._config.inactiveButtonClass);
		this._submitButton.disabled = false;
	} //end func

	/**
	 * Params:  None
	 * Description: checks the valdity of the input button stae is either enabled or Disabled
	 * return:  None
	 */
	_toggleButtonState() {
		const isValid = this._checkValidity();

		//if every input valid, enable button
		if (isValid) {
			this._enabledButton();
		} //end if
		//if any input in-valid disable button
		else {
			this._disabledButton();
		} //end else
	} //end func

	/**
	 * Params:  input elements, text input
	 * Description: takes the text input and checks the validity and shows or hide error respectively
	 * return:  None
	 */
	_checkInputValidity(inputEls) {
		//if input !valid
		if (!inputEls.validity.valid) {
			this._showInputError(inputEls);
		} //end if
		else {
			this._hideInputError(inputEls);
		} //end else
	} //end func

	/**
   *Params: input element
   Description: shows error message and adds on error class
   *return: None 
   */
	_showInputError(inputEl) {
		const errorMessageElement = this._form.querySelector(
			`#${inputEl.id}-error`
		);
		inputEl.classList.add(this._config.inputErrorClass);
		//get validation msg
		//display err msg
		errorMessageElement.textContent = inputEl.validationMessage;
		//add error class to input
		inputEl.classList.add(this._config.errorClass);
	} //end func

	/**
	 * Params:  input element
	 * Description: hides the input error and removes error class
	 * return:  None
	 */
	_hideInputError(inputEl) {
		const errorMessageElement = this._form.querySelector(
			`#${inputEl.id}-error`
		);
		inputEl.classList.remove(this._config.inputErrorClass);
		errorMessageElement.textContent = "";
		inputEl.classList.remove(this._config.errorClass);
	} //end func
} //end class
