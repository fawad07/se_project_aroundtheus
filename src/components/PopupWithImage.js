import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
	/**
	 * Param: the image preview selector: #js-image-preview-modal
	 * Description: constructors takes image preview selector, uses the parent class
	 * 						constructor to set the selector. in addition set the image
	 * 						and title selector
	 */
	constructor(popupSelector) {
		super(popupSelector);
		this._img = this._selector.querySelector("#js-card__image");
		this._title = this._selector.querySelector(
			"#js-image-preview-card-title"
		);
	} //end const

	/**
	 * Params: data
	 * Description: data contains the card title and the image link
	 * 						image scr and name is set before the Parent class open func used.
	 */
	open(data) {
		this._img.src = data.link;
		this._img.alt = data.name;
		this._title.textContent = data.name;
		super.open();
	} //end func
} //end class
