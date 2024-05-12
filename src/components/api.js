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

    /****************Card routes***************/
    //GET /cards – Get all cards
    /**
     * Description: gets all initial cards form url
     *                      json obj returned if status 200 
     */
    getInitialCards() {
        return fetch(`${this._baseUrl}/cards`, {
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
    /**
     * 
     * param: name, url/link 
     * Description: takes the title of the card and a url 
     *                      makes a POST request to add card on server
     */
    createCard({name, link}) {
        return fetch(`${this._baseUrl}/cards`, {
            method: "POST",
            headers: this._header,
            body: JSON.stringify(name, link)
        }).then((res) => {
            if(res.ok){
                return res.json();
            }//end if
            return Promise.reject(`Error: ${res.status}`);
        }).catch((err) => {
            console.error(err);
        });
    }//end func

    //DELETE /cards/:cardId – Delete a card
    deleteCard(cardId) {
        return fetch(`${this._baseUrl}/cards/:${cardId}`, {
            method: "DELETE",
            headers: this._header,
        }).then( (res) => {
            if(res.ok) {
                return res.json();
            }//end if
            return Promise.reject(`Error: ${res.status}`);

        }).catch( (err) => {
            console.error(err);
        });
    }//end func



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
    updateUserImage(url){
        return fetch(`${this.baseUrl}/users/me/avatar`, {
            method: "PATCH",
            headers: this._header,
            body: JSON.stringify(url)
        }).then( (res) => {
            if(res.ok) {
                return res.json();
            }//end if
            return Promise.reject(`Error: ${res.status}`);
        }).catch( (err) => {
            console.error(err);
        });
    }//end func
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