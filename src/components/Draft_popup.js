export class Popup {
    constructor(popupElement) {
        this._popupElement = popupElement;
        this._closeButton = this._popupElement.querySelector('.modal__close-button');
        this._handleEscClose = this._handleEscClose.bind(this);
        this._handleOverlayClick = this._handleOverlayClick.bind(this);
    }

    open() {
        this._popupElement.classList.add('modal_opened');
        document.addEventListener('keydown', this._handleEscClose);
        this._popupElement.addEventListener('mousedown', this._handleOverlayClick);
    }

    close() {
        this._popupElement.classList.remove('modal_opened');
        document.removeEventListener('keydown', this._handleEscClose);
        this._popupElement.removeEventListener('mousedown', this._handleOverlayClick);
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close();
        }
    }

    _handleOverlayClick(evt) {
        if (evt.target === this._popupElement) {
            this.close();
        }
    }

    setEventListeners() {
        this._closeButton.addEventListener('click', handleOverlayClick);
    }
}
