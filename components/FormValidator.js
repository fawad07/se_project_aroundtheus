export class FormValidator {
	/*
  Parms: 
  formElement
  the setting provided
  */
	constructor(config, formElement) {
		this._config = config;
		this._form = formElement; //HTML element
	} //end constructor

	enableValidation() {
		this._form.addEventListener("submit", (evt) => {
			evt.preventDefault();
		});
		this._setEventListeners();

		/*
      this._form.forEach((formEl) => {
          formEl.addEventListener("submit" , (evt) => {
              evt.preventDefault();
          });
          //setEventListeners(formEl, setup);
         this. _setEventListeners(); 
      });

      */
	} //end func

	_setEventListeners() {
		this._inputElement = Array.from(
			this._form.querySelectorAll(this._config.inputSelector)
		);
		this._submitButton = this._form.querySelector(
			this._config.submitButtonSelector
		); //("#js-modal__button");

		this._inputElement.forEach((inputEl) => {
			inputEl.addEventListener("input", (evt) => {
				// loop through all inputs to see if they are valid
				this._checkInputValidity(inputEl);
				this._toggleButtonState();
			});
		});
	} //end func

	_checkValidity() {
		this._inputElement = Array.from(this._inputElement);

		let isValid = true; //assume all inputs are initially true
		this._inputElement.forEach((inputEl) => {
			//if input valdity true
			if (!inputEl.validity.valid) {
				//if any inputs not valid isValid set to false
				isValid = false;
			} //end if
		});
		return isValid;
	} //end func

	/**
	 * Params: None
	 * Description:   disable button used by toggle button state
	 * return:  None
	 */
	_buttonDisabled() {
		this._submitButton.classList.add(this._config.inactiveButtonClass);
		this._submitButton.disabled = true;
	} //end func

	/**
	 * Params: None
	 * Description:   enable button used by toggle button state
	 * return:  None
	 */
	_buttonEnabled() {
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
			this._buttonEnabled();
		} //end if
		//if any input in-valid disable button
		else {
			this._buttonDisabled();
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
