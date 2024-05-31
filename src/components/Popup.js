export class Popup {
	constructor(popUpSelector) {
		this._popupElement = document.querySelector(popUpSelector);
		this._closeButton = this._popupElement.querySelector(
			".modal__close-button"
		);

		
		
		//this._submitBtnText =
		//	this._popupElement.querySelector(".modal__button").textContent;

		//this._submitBtnText = this._submitBtnText.textContent;

		// Check if modal__button exists before accessing its textContent
		const submitButton = this._popupElement.querySelector(".modal__button");
		this._submitBtnText = submitButton ? submitButton.textContent : ' ';
		console.log(this._submitBtnText);
	} //end contructor

	open() {
		this._popupElement.classList.add("modal_opened");
		document.addEventListener("keydown", this._handleCloseEscPressDown);
		this._popupElement.addEventListener(
			"mousedown",
			this._handleCloseMouseClick
		);
	} //end func

	//close edit profile pop up/modal
	close() {
		this._popupElement.classList.remove("modal_opened");
		document.removeEventListener("keydown", this._handleCloseEscPressDown);
		this._popupElement.removeEventListener(
			"mousedown",
			this._handleCloseMouseClick
		);
	} //end func

	/*
param: takes the event i.e key pressed
Description: gets the modal_opened class and
			checks if the esc key pressed only 
			than close the pop up/modal 
*/
	_handleCloseEscPressDown = (evt) => {
		if (evt.key === "Escape") {
			this.close();
		} //end if
	}; //end func

	/*
Param:	takes the event i.e mouse click 
Description: closes pop up/ modal when clicked outside form 
*/
	_handleCloseMouseClick = (evt) => {
		if (evt.target === evt.currentTarget) {
			this.close();
		} //end if
	}; //end func

	setEventListeners() {
		this._closeButton.addEventListener(
			"click",
			this._handleCloseMouseClick
		);
	} //end func

	/**
	 * Params: isLoading, loadingText
	 * Description:	isLoading is a boolean value used to change the text of the submit button when calls
	 * 						made to/from Api
	 * 						loadingText is a string that lets the user know that request is being worked on
	 * 						in the back
	 *
	renderLoading(isLoading, loadingText = "Saving...") {
		console.log("isLoading:", isLoading); // Log the value of isLoading
		console.log("this._submitBtnText:", this._submitBtnText); // Log the current value of this._submitBtnText

		if (!isLoading) {
			this._submitBtnText = this._submitBtnText.textContent;
		} //end if
		else {
			this._submitBtnText = loadingText;
		} //end else
		console.log("this._submitBtnText after assignment:", this._submitBtnText); // Log the value of this._submitBtnText after assignment
		
	} //end func
/**************************************************** */
/*******TEST DELAY/SLEEP FUNCTION**************** */

	async renderLoading(isLoading, loadingText = "Saving...") {
		console.log("isLoading:", isLoading); // Log the value of isLoading
		console.log("this._submitBtnText:", this._submitBtnText); // Log the current value of this._submitBtnText

		if (isLoading) {
			this._submitBtnText = loadingText;
		} //end if
		else {
			this._submitBtnText = this._submitBtnText.textContent;
		} //end else
		console.log("this._submitBtnText after assignment:", this._submitBtnText); // Log the value of this._submitBtnText after assignment
		
		await this._delay(60000);
	} //end func 
	
	_delay(ms){
		return new Promise(resolve => {
			setTimeout(resolve, ms);
		});
	}//end func
	


} //end class
