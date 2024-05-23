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
		})
			.then(this._handleResponse)
			.catch((err) => {
				console.error(err); // log the error to the console
			});
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
		})
			.then(this._handleResponse)
			.catch((err) => {
				console.error(err);
			});
	} //end func

	// 3. DELETE /cards/:cardId – Delete a card
	deleteCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}`, {
			method: "DELETE",
			headers: this._header,
		})
			.then(this._handleResponse)
			.catch((err) => {
				console.error(err);
			});
	} //end func

	// 4. PUT /cards/:cardId/likes – Like a card
	likeCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: "PUT",
			headers: this._header,
		})
			.then(this._handleResponse)
			.catch((err) => {
				console.log(err);
				console.error("Error liking Card: ".err);
			});
	}

	// 5. DELETE /cards/:cardId/likes – Dislike a card
	disLikeCard(cardId) {
		return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
			method: "DELETE",
			headers: this._header,
		})
			.then(this._handleResponse)
			.catch((err) => {
				console.log(err);
				console.error("ERROR: ", err);
			});
	}

	/*********User routes****************** */
	// 6. GET /users/me – Get the current user’s info
	getUserInfo() {
		return fetch(`${this._baseUrl}/users/me`, {
			method: "GET",
			headers: this._header,
		})
			.then(this._handleResponse)
			.catch((err) => {
				console.error(err); // log the error to the console
			});
	} //end func

	// 7. PATCH /users/me – Update your profile information
	updateUserInfo(name, description) {
		return fetch(`${this._baseUrl}/users/me`, {
			method: "PATCH",
			headers: this._header,
			body: JSON.stringify({ name, about: description }),
		});
		/*
			.then(this._handleResponse)
			.catch((err) => {
				console.error(`Error: ${err}`);
			});*/
	} //end func

	// 8. PATCH /users/me/avatar – Update avatar
	updateUserImage(url) {
		//debugger;
		return fetch(`${this._baseUrl}/users/me/avatar`, {
			method: "PATCH",
			headers: this._header,
			body: JSON.stringify(url),
		})
			.then(this._handleResponse)
			.catch((err) => {
				console.error(err);
			});
	} //end func
} //end class

/**
 * https://assets.editorial.aetnd.com/uploads/2019/03/topic-london-gettyimages-760251843-feature.jpg
	https://skeehive.com/wp-content/uploads/2023/04/Utah-Landscape-Photograph-Badlands.jpg
	https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.justwatch.com%2Fimages%2Fbackdrop%2F99701958%2Fs1440%2Fmary-poppins-returns&f=1&nofb=1&ipt=9620982db199add9ca3e332d6d52d43f3841720121d5e2d4f26e209f4dc288c8&ipo=images
 * 
	ISSUES:
		1. image Edit --> Status 400, which part of the code needs modification
		2. Delete Card: card gets deleted but also gives an error
		3. like card refresh when page refresh

 */
