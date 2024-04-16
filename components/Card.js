export class Card  {

/*
    Cnstructor:
    Params:
    data: obj ontainig card text and img link
    cardSelector: selector id i.e js-something orrosponding <template> element
    handleImageClick: func that handlesopening ofpreview modal

    Description:  takes data obj that contains name and img link
                          takes a str selector, the card template tag
                          takes an image click handler  <-- elaborate on this later
*/
constructor(data, cardSelector, handleImageClick)  {
    this._data = data;
    this._selector = cardSelector;
    this._handleImageClick = handleImageClick;

    console.log(this._handleImageClick);            //debugging
}//end contructor

_setEventListeners() {
//alert("We were inside the seEventLisener Method()");        //DEBUGGING

//#js-card__like-buton
this._cardEl.querySelector("#js-card__like-button")
.addEventListener("click",  () => {
    this._setLikeHandler();
}) ;

//#js-card__delete-image
this._cardEl.querySelector("#js-card__delete-image")
.addEventListener("click", () => {
    this._setDeleteHandler();
});

//#js-card__image
const cardImageElement = this._cardEl.querySelector("#js-card__image");
 // Use the stored handleImageClick function
 cardImageElement.addEventListener("click", () => {
    this._handleImageClick(this._data);
});
}//end func

getCard() {
    //1. get car view
   // console.log(this._selector);            //debugging
    this._cardEl = document.querySelector(this._selector).content.firstElementChild.cloneNode(true);

    const cardImageElement = this._cardEl.querySelector("#js-card__image");
    const cardTitleElement = this._cardEl.querySelector("#js-card__title");
    cardImageElement.src = this._data.link;
    cardImageElement.alt = this._data.name;
    cardTitleElement.textContent = this._data.name;
    console.log(this._cardEl);      //debugging

    //2. set event listeners
    this._setEventListeners();

    //3. return card
    return this._cardEl;
}//end func

//Helper Functions
_setLikeHandler() {
    this._cardEl
    .querySelector("#js-card__like-button")
    .classList.toggle("class__like-button-active");    
}//end func

_setDeleteHandler() {
    this._cardEl.querySelector("#js-card__delete-image").remove();
}//end func


}//end class


//option for set like and delete handlers
/*
 _setLikeHandler() {
    const cardLikeButton = document.querySelector("#js-card__like-button");
    
    cardLikeButton.addEventListener("click", () => {
      cardLikeButton.classList.toggle("card__like-button-active");
    });
  }

  _setDeleteHandler() {
    const cardDeleteButton = document.querySelector("#js-card__delete-image");
    
    cardDeleteButton.addEventListener("click", () => {
      cardDeleteButton.closest('.card').remove();
    });
  }
*/
