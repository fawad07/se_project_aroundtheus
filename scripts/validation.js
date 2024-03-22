console.log("THIS IS VALIDATION>JS LOADED");
// enabling validation by calling enableValidation()
// pass all the settings on call

function setEventListeners(formElements, options) {
	// look for all inputs inside of forms
	const {inputSelector} = options;
	const inputElement = Array.from(formElements.querySelectorAll(inputSelector));
	//console.log(inputElement);									//debugging statement
	inputElement.forEach(inputEl => {
		inputEl.addEventListener("input", (evt) => {
			//console.log("inpu ran");							//debugging statement 
			console.log(inputEl.validity.valid);
			
			
		});
	});
	// loop through all inputs to see if they are valid 
		//if input !valid
			//get validation msg
			//add error class to input
			//display err msg 
			//disable submit button
		//if inputs valid	
			//enable button
			//reset error msg 
	
}//end func 


function enableValidation(setup)
{
	const allFormElements = Array.from(document.querySelectorAll(setup.formSelector));
	console.log(allFormElements);
	allFormElements.forEach( (formEl) => {
		console.log(formEl);									//debugging statement
		formEl.addEventListener("submit", (evt) => {
			evt.preventDefault();
		});
		
		setEventListeners(formEl, setup);
	});
}//end func


const config = {
  formSelector: ".modal__form",									//".popup__form",
  inputSelector: ".modal__field",								//".popup__input",
  submitButtonSelector: ".modal__button",						//".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible"
};

enableValidation(config);