class Api {

    /**
     * param: options
     * Description: constructor takes a options obj that carries a bae url
     *                      and headers that contain auth and content-type 
     */
    constructor(options){
        this._baseUrl = options.baseUrl;
        this._header = options.headers;
    }//end constructor

    //Card routes
    //GET /cards – Get all cards

    getInitialCards() {
        return fetch(`${this._baseUrl}`, {
            method: "GET",
            headers: this._header
        }).then((res) => {
            if(res.ok){
                return res.json();
            }//end if
            // if the server returns an error, reject the promise
            return Promise.reject(`Error: ${res.status}`);
        })
        .catch((err) => {
            console.error(err);         // log the error to the console
   });
    }//end func

    //POST /cards – Create a card

    //DELETE /cards/:cardId – Delete a card

    //PUT /cards/:cardId/likes – Like a card

    //DELETE /cards/:cardId/likes – Dislike a card

    /*********User routes****************** */
    //GET /users/me – Get the current user’s info
    getUserInfo() {
        return fetch(`${this._baseUrl}/users/me`, {
            method: "GET",
            headers: this._header
        }).then((res) => {
            if(res.ok){
                return res.json();
            }//end if
            // if the server returns an error, reject the promise
            return Promise.reject(`Error: ${res.status}`);
        }).catch((err) => {
             console.error(err);         // log the error to the console
        });

    }//end func

    //PATCH /users/me – Update your profile information

    //PATCH /users/me/avatar – Update avatar

}//end class


/**
 * // Create an instance of the Api class
 *const opts = {
			baseUrl: "https://around-api.en.tripleten-services.com/v1",
			headers: {
				authorization: "d50bb54b-1efc-4b8a-a5b1-3d5c72d6a1b0",
				"content-type": "application/json"
			}
		};

		const api = new Api(opts);
		api.getInitialCards().then(data => {
			const cardsContainer = document.getElementById('cardsContainer');
			data.forEach(card => {
				// Create a paragraph element for each card's link
				const cardLinkElement = document.createElement('p');
				cardLinkElement.textContent = card.link;

				// Create an h1 element for each card's name
				const cardNameElement = document.createElement('h1');
				cardNameElement.textContent = card.name;

				// Append both the link and name elements to the cardsContainer div
				cardsContainer.appendChild(cardNameElement);
				cardsContainer.appendChild(cardLinkElement);
			});
		});
 * 
 */