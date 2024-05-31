import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
	/**
	 * param: popupSelector, handleFormSubmit
	 * Description:	constructor takes a pop up selector from html .modal__form
	 * 						and handles the submit of form
	 */
	constructor(popupSelector, handleFormSubmit) {
		super(popupSelector);
		this._handleFormSubmit = handleFormSubmit;
		this._formEl = this._popupElement.querySelector(".modal__form");
		this._submitBtnText =
			this._popupElement.querySelector(".modal__button");
		this._submitBtnText = this._submitBtnText.textContent;
	} //end const

	/**
	 * Description:	collects data from all the input fields and returns
	 * 						 it as an object. This data should then be passed to
	 * 						the submission handler as an argument.
	 * return:	inputValues
	 */
	_getInputValues() {
		//gather input values
		const inputValues = {};
		const inputs = this._formEl.querySelectorAll(".modal__field");
		inputs.forEach((input) => {
			inputValues[input.name] = input.value;
		});
		return inputValues;
	} //end func

	/**
	 * Description:	 overrides the setEventListeners() parent method
	 * 						 adds a submit event listener to the form and call
	 * 						 the setEventListeners() method of the parent class.
	 */
	setEventListeners() {
		super.setEventListeners();
		this._formEl.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._handleFormSubmit(this._getInputValues());
		});
	} //end func

	/**
	 * Description:	calls the parent class close function and reset the form after close
	 */
	close() {
		super.close();
		this._formEl.reset();
	} //end func
} //end class
