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

		//this._popupForm = this._popupElement.querySelector("#js-edit-profile-picture-modal");

		this._popupForm = this._popupElement.querySelector("#js-delete-form");
		this._submitBtn = this._popupElement.querySelector(".modal__button");
		this._submitBtnText = this._submitBtn.textContent;
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
	setEventListeners() {
		this._popupForm.addEventListener("submit", (evt) => {
			evt.preventDefault();
			this._handleSubmitForm();
		});
		super.setEventListeners();
	} //end func

	/**
	 * Params: isLoading, loadingText
	 * Description:	isLoading is a boolean value used to change the text of the submit button when calls
	 * 						made to/from Api
	 * 						loadingText is a string that lets the user know that request is being worked on
	 * 						in the back
	 */
	renderLoading(isLoading, loadingText = "Deleting...") {
		if (!isLoading) {
			this._submitBtn.textContent = this._submitBtnText;
		} //end if
		else {
			this._submitBtn.textContent = loadingText;
		} //end else
	} //end func
} //end class
