import { Popup } from "../components/Popup.js";

export class PopupWithForm extends Popup {
    constructor(popupSelector, submitHandler) {
        super(popupSelector);
        this._submitHandler = submitHandler;
        this._formElement = this._popupElement.querySelector('.modal__form');
    }

    _getInputValues() {
        // Gather input values from the form
        const inputValues = {};
        const inputs = this._formElement.querySelectorAll('.modal__field');
        inputs.forEach(input => {
            inputValues[input.name] = input.value;
        });
        return inputValues;
    }

    setEventListeners() {
        super.setEventListeners();
        this._formElement.addEventListener('submit', (event) => {
            event.preventDefault();
            this._submitHandler(this._getInputValues());
        });
    }

    close() {
        super.close();
        this._formElement.reset();
    }
}
//ATTN: MIGHT HAVE TO CHANGE QUERY SELECTORS
