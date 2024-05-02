export class Section {
	/**
	 * param: {items, renderer}, containerSelector
	 * Description:	 The first parameter of its constructor 
	 * 						should be an object with two properties (items and renderer).
							 The items property should be an array of data,
							 which you must add to the page when it loads.
							 The renderer property should be a function that creates
							 and adds a single item to the page.
							 Its second constructor parameter should be a CSS
							 class selector where the card elements are added
	 *  
	 */
	constructor({ items, renderer }, containerSelector) {
		this._renderer = renderer;
		this._renderItems = items;
		this._container = document.querySelector(containerSelector);
	} //end const

	/**
	 * Description:  iterate through the items array and call the renderer()
	 * 						 function on each item.
	 */
	renderItems() {
		//use this._renderer to render the data into this._element
		this._renderItems.forEach((item) => {
			this._renderer(item);
		});
	} //end func

	/**
	 * Description:	 takes a DOM element and adds it to the container.
	 */
	addItems(item) {
		//take the items and render in into this._element
		this._container.prepend(item);
	}
} //end class
