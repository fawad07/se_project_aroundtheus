import { Popup } from "../components/Popup.js";

export class PopupWithImage extends Popup {
    constructor(popupSelector) {
        super(popupSelector);
        this._image = this._popupElement.querySelector('.modal__image');
        this._caption = this._popupElement.querySelector('.modal__image-caption');
    }

    open(data) {
        this._image.src = data.link;
        this._image.alt = data.name;
        this._caption.textContent = data.name;
        super.open();
    }
}
//ATTN: QUERY SELECTORS IN CONSTRUCTORS MAY NOT MATCH HTML,NEED TO REFLECT HTML
