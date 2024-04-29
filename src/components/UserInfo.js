export class UserInfo {
	/**
	 * param: titleSelector, descriptionSelector
	 * Description:	Take an object with the selectors
	 * 						 of two elements into the constructor:
	 * 						 one for the profile’s name element
	 * 						 and one for its job element.
	 */
	constructor({ titleSelector, descriptionSelector }) {
		this._titleElement = document.querySelector(titleSelector);
		console.log(this._titleElement);		//debugging

		this._descriptionElement = document.querySelector(descriptionSelector);
	} //end const

	/**
	 * Description:	This method will be handy for cases when it's necessary
	 * 						 to display the user data in the open form.
	 * returns:	 returns an object containing information about the user
	 * 				i.e. name and description/about
	 */
	getUserInfo() {
		this._userInfo = {
			name: this._titleElement.textContent,
			description: this._descriptionElement.textContent,
		}; //end object
		return this._userInfo;
	} //end func

	/**
	 * Description:	 takes new user data and adds it to the page.
	 * 						 This method should be used after successful
	 * 						submission of the profile form.
	 */
	setUserInfo({ name, description }) {
		this._titleElement = name;
		this._descriptionElement = description;
	} //end func
} //end class
