import {Popup} from "./Popup.js";

export class PopupWithImage extends Popup {
	constructor(popupSelector) {
		super(popupSelector);
		this._img =  this._popupSelector.querySelector('#js-card__image');
		this._title =  this._popupElement.querySelector('#js-image-preview-card-title');
	} //end const

	open(data) {
        this._img.src = data.link;
        this._img.alt = data.name;
        this._title.textContent = data.name;
        super.open();
    }

} //end class
