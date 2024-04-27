export class Popup {
	constructor(popUpSelector) {
		this._selector = docuemnt.querySelector(popUpSelector);
	} //end contructor

	open() {
		this._selector.classList.add("modal_opened");
		document.addEventListener("keydown", handleCloseEscPressDown);
		this._selector.addEventListener(
			"mousedown",
			handleModalCloseMouseClick
		);
	} //end func

	//close edit profile pop up/modal
	close() {
		this._selector.classList.remove("modal_opened");
		document.removeEventListener("keydown", handleModalCloseEscPressDown);
		this._selector.removeEventListener(
			"mousedown",
			handleModalCloseMouseClick
		);
	} //end func

	/*
param: takes the event i.e key pressed
Description: gets the modal_opened class and
			checks if the esc key pressed only 
			than close the pop up/modal 
*/
	_handleCloseEscPressDown(evt) {
		if (evt.key === "Escape") {
			this.close();
		} //end if
	} //end func

	/*
param: takes the event i.e key pressed
Description: gets the modal_opened class and
			checks if the esc key pressed only 
			than close the pop up/modal 
*/
	_handleCloseEscPressDown(evt) {
		if (evt.key === "Escape") {
			this._close();
		} //end if
	} //end func
} //end class
