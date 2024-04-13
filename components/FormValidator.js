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
           this. _setEventListeners(); 
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
          //_hideInputError(formEls, inputEls, opt);
          _hideInputError(inputEls);
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



//MOVE TO INDEX.JS
const config = {
    formSelector: ".modal__form", 						//".popup__form",
    inputSelector: ".modal__field", 						//".popup__input",
    submitButtonSelector: ".modal__button", 				//".popup__button",
    inactiveButtonClass: ".modal__button_disabled",
    inputErrorClass: "modal__error", 						//"popup__input_type_error",
    errorClass: "modal__error_visible",
  };
  
 // enableValidation(config);
  
  /*DEBUGGING BELOW LINE 100*/
  const editFormValidator = new FormValidator(config);
  
//profile edit button form vlidator
//const editFormValidator = new FormValidator(config, profileEditModal.querySelector("#js-modal-edit-form"));
console.log(editFormValidator);

//const addFormValidator = new FormValidator(config, addCardModal.querySelector("#js-modal-add-card-form"));
//console.log(editFormValidator);