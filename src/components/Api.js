export class Api {
	/**
	 * param: options
	 * Description: constructor takes a options obj that carries a bae url
	 *                      and headers that contain auth and content-type
	 */
	constructor(options) {
		this._baseUrl = options.baseUrl;
		this._header = options.headers;
	} //end constructor

	// Helper function to handle fetch response and errors
	_handleResponse(res) {
		if (res.ok) {
			return res.json();
		} //end if
		return Promise.reject(`Error: ${res.status}`);
	} //end func

	/****************Card routes***************/
	// 1. GET /cards – Get all cards
	/**
	 * Description: gets all initial cards form url
	 *                      json obj returned if status 200
	 */
	getInitialCards() {
		return fetch(`${this._baseUrl}/cards`, {
			method: "GET",
			headers: this._header,
		}).then(this._handleResponse);
	} //end func

	// 2. POST /cards – Create a card
	/**
	 *
	 * param: name, url/link
	 * Description: takes the title of the card and a url
	 *                      makes a POST request to add card on server
	 */
	createCard({ name, link }) {
		return fetch(`${this._baseUrl}/cards`, {
			method: "POST",
			headers: this._header,
			body: JSON.stringify({ name, link }),
		}).then(this._handleResponse);
	} //end func

	// 3. DELETE /cards/:cardId – Delete a card
	deleteCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}`, {
			method: "DELETE",
			headers: this._header,
		}).then(this._handleResponse);
	} //end func

	// 4. PUT /cards/:cardId/likes – Like a card
	likeCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: "PUT",
			headers: this._header,
		}).then(this._handleResponse);
	}

	// 5. DELETE /cards/:cardId/likes – Dislike a card
	disLikeCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: "DELETE",
			headers: this._header,
		}).then(this._handleResponse);
	}

	/*********User routes****************** */
	// 6. GET /users/me – Get the current user’s info
	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			method: "GET",
			headers: this._header,
		}).then(this._handleResponse);
	} //end func

	// 7. PATCH /users/me – Update your profile information
	updateUserInfo(name, description) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: "PATCH",
			headers: this._header,
			body: JSON.stringify({ name, about: description }),
		});
	} //end func

	// 8. PATCH /users/me/avatar – Update avatar
	updateUserImage(url) {
		//debugger;
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: "PATCH",
			headers: this._header,
			body: JSON.stringify(url),
		}).then(this._handleResponse);
	} //end func
} //end class
