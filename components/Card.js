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

    /*this._cardTemplate = document.querySelector(cardTemplateSelector)
                        .content
                        .firstElementChild;
    */

    console.log(this._data);         //debugging
    console.log(this);              //debuging
    console.log(this._data.name);       //debugging
    console.log(this._selector);            //debugging
    console.log(this._handleImageClick);            //debugging
}//end contructor

_setEventListeners() {
alert("We were inside the seEventLisener Method()");        //DEBUGGING

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

}//end func

getCard() {
    //1. get car view
    this._cardEl = document.querySelector(this._selector)
    .content.firstElementChild
    .cloneNode(true);

    //2. set event listeners
    this._setEventListeners();

    //3. return card
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
