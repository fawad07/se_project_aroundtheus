export class Card {
  constructor(data, cardTemplateSelector, handleImageClick) {
    this._data = data;
    this._cardTemplateSelector = cardTemplateSelector;
    this._handleImageClick = handleImageClick;
    this._cardEl = this._getCardElement();
  } //end constructor

  _getCardElement() {
    //const cardTemplate = document.querySelector(this._cardTemplateSelector).content.firstElementChild;
    //console.log(cardTemplate);            //debugging

    //DEBUGGING CONTENT BELOW
      console.log("Selector:", this._cardTemplateSelector); // Debugging
    
      const cardTemplate = document.querySelector(this._cardTemplateSelector);
      if (!cardTemplate) {
        console.error(`Template with selector ${this._cardTemplateSelector} not found`);
        return null;
      }
    
      const content = cardTemplate.content;
      if (!content) {
        console.error("Template content is null");
        return null;
      }
    
      console.log("Template content:", content); // Debugging
//DEBUGGING CONTENT ABOVE

    const cardElement = cardTemplate.cloneNode(true);

    const cardImageElement = cardElement.querySelector("#js-card__image");
    const cardTitleElement = cardElement.querySelector("#js-card__title");
    cardImageElement.src = this._data.link;
    cardImageElement.alt = this._data.name;
    cardTitleElement.textContent = this._data.name;

    return cardElement;
  } //end func

  _setLikeHandler() {
    const cardLikeButton = this._cardEl.querySelector("#js-card__like-button");
    cardLikeButton.addEventListener("click", () => {
      cardLikeButton.classList.toggle("card__like-button-active");
    });
  } //end func

  _setDeleteHandler() {
    const cardDeleteButton = this._cardEl.querySelector("#js-card__delete-image");
    cardDeleteButton.addEventListener("click", () => {
      this._cardEl.remove();
    });
  } //end func

  _setEventListeners() {
    this._setLikeHandler();
    this._setDeleteHandler();
  } //end func

  getCard() {
    this._setEventListeners();
    return this._cardEl;
  } //end func
} //end class
