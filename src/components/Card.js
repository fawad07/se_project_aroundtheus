export class Card {
	/*
    Cnstructor:
    Params:
    data: obj ontainig card text and img link
    cardSelector: selector id i.e js-something orrosponding <template> element
    handleImageClick: func that handles opening of preview modal
	handleDeleteCard: func handles the detetion of card
	handleLikeCard: func toggles like/unlike of card

    Description:  takes data obj that contains name and img link
                          takes a str selector, the card template tag
                          takes an image click handler  <-- elaborate on this later
*/
	constructor(
		data,
		cardSelector,
		handleImageClick,
		handleDeleteCard,
		handleLikeCard
	) {
		this._data = data;
		this._selector = cardSelector;
		this._handleImageClick = handleImageClick;
		this._handleDeleteCard = handleDeleteCard;
		this._handleLikeCard = handleLikeCard;
		this._cardId = data._id;
		this._isLiked = data.isLiked;
	} //end contructor

	/*
    Params: None
    Description: sets all the event listeners on the card including the delete button, the like button
                        and image click
	*/
	_setEventListeners() {
		//.card__like-buton
		this._setLikeHandler();

		//.card__delete-image
		this._setDeleteHandler();

		//.card__image
		this._setImageClickHandler();
	} //end func

	/**
	 * Params: None
	 * Description: get card shows the card on the html with its elements of the card title, like
	 *                      button, card image and the delete button
	 * return: return the card element for display on the html
	 */
	getCard() {
		//1. get car view
		this._cardEl = document
			.querySelector(this._selector)
			.content.firstElementChild.cloneNode(true);

		const cardImageElement = this._cardEl.querySelector(".card__image");
		const cardTitleElement = this._cardEl.querySelector(".card__title");
		cardImageElement.src = this._data.link;
		cardImageElement.alt = this._data.name;
		cardTitleElement.textContent = this._data.name;

		//2. set event listeners
		this._setEventListeners();

		//3. return card
		return this._cardEl;
	} //end func

	//Helper Functions
	/**
	 * Params:  None
	 * Description: function used to help the set event listeners function to toggle the like button
	 */
	_setLikeHandler() {
		const likeButton = this._cardEl.querySelector(".card__like-button");
		likeButton.addEventListener("click", () => {
			this._handleLikeCard(this);
			//likeButton.classList.toggle("card__like-button_active");
		});
	} //end func

	/**
	 * Params:  None
	 * Description: function used to help the set event listeners function remove the card
	 *                      element from the html
	 */
	_setDeleteHandler() {
		const deleteButton = this._cardEl.querySelector(".card__delete-image");
		deleteButton.addEventListener("click", () =>{
			 this._handleDeleteCard(this._cardEl, this._cardId);
			});
		//deleteButton.addEventListener("click", this._handleDelete);
		/**WOKING CODE BELOW */
		/*
		deleteButton.addEventListener("click", () => {
			this._cardEl.remove();
			this._cardEl = null;
		});
		*/
	} //end func


	remove = () => {
		this._cardEl.remove();
		this._cardEl = null;
	}; //end func

	/**
	 * Params:	None
	 * Description:	func called by set event listeners and this handles what
	 * 						happens when image clicked
	 * return:	None
	 */
	_setImageClickHandler() {
		//.card__image
		const cardImageElement = this._cardEl.querySelector(".card__image");
		// Use the stored handleImageClick function
		cardImageElement.addEventListener("click", () => {
			this._handleImageClick(this._data);
		});
	} //end func



	toggleLike(){
		const likeBtn = this._cardEl.querySelector(".card__like-button");
		if (this._isLiked) {
			this._isLiked = true;
			likeBtn.classList.add("card__like-button_active");
		} //end if
		else {
			this._isLiked = false;
			likeBtn.classList.remove("card__like-button_active");
		} //end else

		//likeBtn.classList.toggle("card__like-button_active");	
		console.log("TOGGLE LIKE CLICKED");		//debugging
	}//end func
	
} //end class
