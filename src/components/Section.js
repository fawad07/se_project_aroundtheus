export class Section {
	constructor({ items, renderer }, containerSelector) {
		this._renderer = renderer;
		this._renderItems = items;
		this._selector = documrnt.querySelector(containerSelector);
	} //end const

	/**
	 * param: Card data, image and title
	 * Description: takes the card data and initializes the cards
	 * return: none
	 */
	renderItems(data) {
		//use this._renderer to render the data into this._element
	} //end func

	addItems(item) {
		//take the items and render in into this._element
	}
} //end class


/**BELOW IS index.JS EXAMPLE 
 * 
 * //		1. create class instances
 * const cardSection = new Section ({
 *          renderer: (item) => {
 *                  const eardElement = new Card(item, selector.cardTemplate,handleClick);
 *                  cardSection.additems(cardElement.getview())
 *                  },
 *        selector: selector.cardSection,
 *          });
 * 
 * 			2. card preview
 * const cardPreview = new popupWith iMage(selector.previewPopup)
 * 
 * //initialize instances
 * CardSection.renderitems(initialCArds);
 * cardpreview.setEventListeners()
 * 
 */