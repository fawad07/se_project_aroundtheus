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
	//	console.log("html element: ",  this._titleElement);		//debugging
		
		this._descriptionElement = document.querySelector(descriptionSelector);
	//	console.log("html element: ",  this._descriptionElement);		//debugging
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
		}; //end object

		//console.log("inside getUserInfo(), userInfo name: ", this._userInfo.name); //debugging
		
		return this._userInfo;
	} //end func

	/**
	 * Description:	 takes new user data and adds it to the page.
	 * 						 This method should be used after successful
	 * 						submission of the profile form.
	 */
	setUserInfo({ name, description }) {
		console.log(name);		//debugging
		this._titleElement.textContent = name;
		this._descriptionElement.textContent = description;
	} //end func
} //end class
