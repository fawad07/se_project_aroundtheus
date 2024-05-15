import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/api.js";
import utils from "../Utils/Constants.js";
import "../pages/index.css";

/****** API CALLS***** */

//CARD SECTION
const opts = {
	baseUrl: "https://around-api.en.tripleten-services.com/v1",
	headers: {
		authorization: "d50bb54b-1efc-4b8a-a5b1-3d5c72d6a1b0",
		"Content-Type": "application/json",
	},
};
let sectionCards;
const api = new Api(opts);

/** 1. GET ALL CARDS ROUTE */
api.getInitialCards()
	.then((data) => {
		//handle the response data
		console.log("Data from Api: ", data); //debugging statement

		// Create a new Section instance with the fetched data and render the items
		sectionCards = new Section(
			{
				items: data,
				renderer: createCard,
			},
			utils.htmlIds.cardList
		);
		sectionCards.renderItems();
	})
	.catch((err) => {
		console.error(`Error getting cards: ${err} `);
	});


	api.getUserInfo()
	.then((res) => {
		userInfo.setUserInfo({
			name: res.name,
			description: res.about,
		});
	})
	.catch((err) => {
		console.log("ERROR: ", err);
		console.error(err);
	});

/**
 * Param: userData
 * Description:	Sets the change/edit name/title and the description of the profile
 * 					UPDATE USER PROFILE INFO ROUTE
 */
function handleProfileSubmitForm(userData) {
	// Call the updateUserInfo method from the Api class
	api.updateUserInfo(userData.title, userData.description)
		.then(() => {
			userInfo.setUserInfo({
				name: userData.title,
				description: userData.description,
			});
			profileEditForm.close();
		})
		.catch((err) => {
			console.error(`Error updating new information: ${err}`);
		});
} //end func


function handleDeleteCard(card){
	/**deleteCardModal open -- need to create HTML element like modal_opened */
	api.deleteCard(card).then( () => {
		//deleteCardModal close;
		card.remove();

	}).catch( (err) => {
		console.log(err);
		console.error(`Error removing Card: ${err}`);
	});

}//end func

/**__________________________________________ */

//EDIT PROFILE FORM
const profileEditForm = new PopupWithForm(
	utils.htmlIds.profileEditPopup,
	handleProfileSubmitForm
);
profileEditForm.setEventListeners();

utils.profileEditButton.addEventListener("click", () => {
	const currentUser = userInfo.getUserInfo();
	utils.profileTitleInput.value = currentUser.name;
	utils.profileDescriptionInput.value = currentUser.description;
	profileEditForm.open();
});

//ADD CARD FORM
const addCardForm = new PopupWithForm(
	utils.htmlIds.addCardPopup,
	handleAddCardSubmitForm
);
addCardForm.setEventListeners();

utils.profileAddCardButton.addEventListener("click", () => {
	addCardForm.open();
});

//POP UP WITH IMAGE
const imagePopup = new PopupWithImage(utils.htmlIds.imagePreviewPopup);
imagePopup.setEventListeners();

/**
 * Param: cardData
 * Description:	card Data is used that is passed to the Image form for display
 */
//Card Image Preview
function handleImageClick(cardData) {
	imagePopup.open(cardData);
} //end func

const deleteCardPopup = 


/**
 * param: data
 * Description:	Takes a data object that is used to create a card with the Card object
 * 						Card Element is created and passed along to the Section object
 * 						Section object visually puts the card on the screen
 */
//func to make new card
function createCard(data) {
	const newCard = new Card(
		data,
		utils.htmlIds.cardTemplate,
		handleImageClick,
	); //pass new info to new card
	const elementCard = newCard.getCard();
	sectionCards.addItems(elementCard);
} //end func

















/**
 * Param: settings/configurations
 * Description: all form validation initialize
 */
function validateForms(opts) {
	//initialize forms
	const forms = document.querySelectorAll(utils.config.formSelector);
	const formArray = Array.from(forms);
	formArray.forEach((form) => {
		const validateForm = new FormValidator(opts, form);
		validateForm.enableValidation();
	});
} //end func

/**
 * Description:	Adds a new card everytime the + button is clicked
 */
function handleAddCardSubmitForm() {
	//add new card i.e. Create Card
	const name = utils.newCardTitleInput.value; //newCardTitleValue
	const link = utils.newCardUrlInput.value; //newCardUrlValue
	const dataCard = { name, link }; //collect new card data and link
	createCard(dataCard);

	//close addCardPopup
	addCardForm.close();
} //end func

/********************INSTANISATIONS BELOW******************** */

//ALL FORMS VALIDATIONS
validateForms(utils.config);

//USER INFO
const userInfo = new UserInfo({
	titleSelector: utils.htmlIds.profileTitle,
	descriptionSelector: utils.htmlIds.profileDescription,
});
