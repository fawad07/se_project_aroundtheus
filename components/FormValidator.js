export class FormValidator {
    
    /*
    Parms: 
    formElement
    the setting provided
    */
    constructor(config, formElement) {
        this._config = config;
        this._form = formElement;
    }//end constructor


    enableValidation() {
        this._form.forEach((formEl) => {
            formEl.addEventListener("submit" , (evt) => {
                evt.preventDefault();
            });
            //setEventListeners(formEl, setup);
            setEventListeners();
        });
    }//end func

    _setEventListeners() {
        this._inputElement = Array.from(this._form.querySelectorAll(this._config.inputSelector));
        this._submitButton = this._form.querySelector(this._config.submitButtonSelector);                      //("#js-modal__button");
        
        this._inputElement.forEach((inputEl) => {
          inputEl.addEventListener("input", (evt) => {
            // loop through all inputs to see if they are valid
            checkInputValidity(this._form, inputEl, this._config);
           // toggleButtonState(this._inputElement, this._config.submitButton, this._config);     
            //togglebtn(inputEl, submitbtn,options)
            this._toggleButtonState();
          });
        });
    }//end func


    //_toggleButtonState(inputEls, btn, opts) 
    _toggleButtonState() {
       // const { inactiveButtonClass } = opts;
       this._inputElement = Array.from(this._inputElement); 					
      
        let isValid = true; 					//assume all inputs are initially true
        this._inputElement.forEach((inputEl) => {
          //if input valdity true
          if (!inputEl.validity.valid) {
            //if any inputs not valid isValid set to false
            isValid = false;
          } //end if
        });
        //if every input valid, enable button
        if (isValid) {
          this._submitButton.classList.remove(this._config.inactiveButtonClass);
          this._submitButton.disabled = false;
        } //end if
        //if any input in-valid disable button
        else {
          this._submitButton.classList.add(this._config.inactiveButtonClass);
          this._submitButton.disabled = true;
        } //end else
      } //end func

     _checkInputValidity(formEls, inputEls, opt) {
        //if input !valid
        if (!inputEls.validity.valid) {
         // _showInputError(formEls, inputEls, opt);
         this._showInputError(inputEls);
        } //end if
        else {
          _hideInputError(formEls, inputEls, opt);
        } //end else
      } //end func
      
    _showInputError( inputEl) {
        //const { inputErrorClass, errorClass } = opts;
        const errorMessageElement = this._form.querySelector(`#${inputEl.id}-error`);
      
        inputEl.classList.add(this._config.inputErrorClass);
        //get validation msg
        //display err msg
        errorMessageElement.textContent = inputEl.validationMessage;
        //add error class to input
        inputEl.classList.add(this._config.errorClass);      
      } //end func


      //_hideInputError(formEl, inputEl, opts)  


      _hideInputError(inputEl) {
        //const { inputErrorClass, errorClass } = opts;
      
        const errorMessageElement = this._form.querySelector(`#${inputEl.id}-error`);
        inputEl.classList.remove(this._config.inputErrorClass);
        errorMessageElement.textContent = "";
        inputEl.classList.remove(this._config.errorClass);
      } //end func

}//end class