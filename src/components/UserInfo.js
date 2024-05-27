export class UserInfo {
	/**
	 * param: titleSelector, descriptionSelector
	 * Description:	Take an object with the selectors
	 * 						 of two elements into the constructor:
	 * 						 one for the profile’s name element
	 * 						 and one for its job element.
	 */
	constructor({
		titleSelector,
		descriptionSelector,
		profilePictureSelector,
	}) {
		this._titleElement = document.querySelector(titleSelector);
		this._descriptionElement = document.querySelector(descriptionSelector);
		this._profilePictureElement = document.querySelector(
			profilePictureSelector
		);
		//console.log("in UserInfo.js: profilePictureSelector: ", this._profilePictureElement);	//debugging
	} //end const

	/**
	 * Description:	This method will be handy for cases when it's necessary
	 * 						 to display the user data in the open form.
	 * returns:	 returns an object containing information about the user
	 * 				i.e. name and description/about
	 */
	getUserInfo() {
		//console.log("inside getUserInfo(): ", this._titleElement.textContent); //debugging

		this._userInfo = {
			name: this._titleElement.textContent,
			description: this._descriptionElement.textContent,
			avatar: this._profilePictureElement.src,
		}; //end object
		console.log("Inside getUSerInfo: ", this._userInfo);	//debugging

		//console.log("inside getUserInfo(), userInfo name: ", this._userInfo.name); //debugging

		return this._userInfo;
	} //end func

	/**
	 * Description:	 takes new user data and adds it to the page.
	 * 						 This method should be used after successful
	 * 						submission of the profile form.
	 */
	setUserInfo({ name, description }) {
		this._titleElement.textContent = name;
		this._descriptionElement.textContent = description;
	} //end func

	setProfilePicture({ profilePicture }) {
		this._profilePictureElement.src = profilePicture;
	}
} //end class
