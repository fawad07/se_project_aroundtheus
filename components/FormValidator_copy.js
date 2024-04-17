export class FormValidator {
    constructor(options, formElement) {
        this._formElement = formElement;
        this._options = options;
    } //end constructor

    _showInputError(inputEl) {
        const errorMessageElement = this._formElement.querySelector(
            `#${inputEl.id}-error`,
        );
        inputEl.classList.add(this._options.inputErrorClass);
        errorMessageElement.textContent = inputEl.validationMessage;
        inputEl.classList.add(this._options.errorClass);
    } //end func

    _hideInputError(inputEl) {
        const errorMessageElement = this._formElement.querySelector(
            `#${inputEl.id}-error`,
        );
        inputEl.classList.remove(this._options.inputErrorClass);
        errorMessageElement.textContent = "";
        inputEl.classList.remove(this._options.errorClass);
    } //end func

    _toggleButtonState(inputEls, btn) {
        let isValid = true;
        inputEls.forEach((inputEl) => {
            if (!inputEl.validity.valid) {
                isValid = false;
            } //end if
        });
        if (isValid) {
            btn.classList.remove(this._options.inactiveButtonClass);
            btn.disabled = false;
        } //end if
        else {
            btn.classList.add(this._options.inactiveButtonClass);
            btn.disabled = true;
        } //end else
    } //end func

    _checkInputValidity(inputEl) {
        if (!inputEl.validity.valid) {
            this._showInputError(inputEl);
        } //end if
        else {
            this._hideInputError(inputEl);
        } //end else
    } //end func

    _setEventListeners() {
        const inputElements = Array.from(
            this._formElement.querySelectorAll(this._options.inputSelector),
        );
        const submitButton = this._formElement.querySelector(
            this._options.submitButtonSelector,
        );

        inputElements.forEach((inputEl) => {
            inputEl.addEventListener("input", () => {
                this._checkInputValidity(inputEl);
                this._toggleButtonState(inputElements, submitButton);
            });
        });
    } //end func

    enableValidation() {
        this._formElement.addEventListener("submit", (evt) => {
            evt.preventDefault();
        });
        this._setEventListeners();
    } //end func
} //end class
