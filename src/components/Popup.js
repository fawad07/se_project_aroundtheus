export class Popup {
	constructor(popUpSelector) {
		this._popupElement = document.querySelector(popUpSelector);
		this._closeButton = this._popupElement.querySelector(
			".modal__close-button"
		);
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
} //end class
