import { Popup } from "./Popup.js";

export class PopupDeleteConfirm extends Popup {
	/**
	 * Attribute inside constructor: popupForm is assigned from the parent
	 *                                              class popupElement with the ID
	 *                                              submit button from the form button ID
	 * param  popupSelector: delete card form selector
	 */
	constructor(popupSelector) {
		super(popupSelector);
		this._popupForm = this._popupElement.querySelector("#js-delete-form");
		this._submitBtn = this._popupForm.querySelector("#js-card-delete-btn");
	} //end constructor

	/**
	 * param: actionFunc
	 * Description: the set submit action function takes a function as parameter
	 *                      that is assigned to the objects handle submit form
	 */
	setSubmitAction(actionFunc) {
		this._handleSubmitForm = actionFunc;
	} //end func

	/**
	 * Description: submit button has an event listener for the submit.
	 */
	setEventListener() {
		this._popupForm.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._handleSubmitForm();
		});
		//super.close();
	} //end func
} //end class
