import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupDeleteConfirm } from "../components/PopupDeleteConfirm.js";
import utils from "../Utils/Constants.js";
import "../pages/index.css";

//USER INFO
const userInfo = new UserInfo({
	titleSelector: utils.htmlIds.profileTitle,
	descriptionSelector: utils.htmlIds.profileDescription,
	profilePictureSelector: ".profile__image",
});

const deleteCardModal = new PopupDeleteConfirm("#js-card-delete-modal");

//need to make a change picture pop up html
const editProfilePictureForm = new PopupWithForm(
	"#js-edit-profile-picture-modal",
	handleEditProfilePicture
);

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
		console.log(err); //debugging statement
		console.error(`Error getting cards: ${err} `);
	});

api.getUserInfo()
	.then((res) => {
		console.log("Inside getUserInfo, Response: ", res); //debugging
		userInfo.setUserInfo({
			name: res.name,
			description: res.about,
		});
		userInfo.setProfilePicture({
			profilePicture: res.avatar,
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
	profileEditForm.renderLoading(true);
	api.updateUserInfo(userData.title, userData.description)
		.then(() => {
			userInfo.setUserInfo({
				name: userData.title,
				description: userData.description,
			});
			//userInfo.setProfilePicture( {profilePicture: userData.avatar});

			profileEditForm.close();
		})
		.catch((err) => {
			profileEditForm.renderLoading(false);
			console.error(`Error updating new information: ${err}`);
		});
} //end func

function handleDeleteCard(cardElement, cardId) {
	/**deleteCardModal open -- need to create HTML element like modal_opened */
	console.log("inside handle delete card func, cardid: ", cardId); //debugging

	//open delete card modal/popup
	deleteCardModal.open();

	//submit action
	deleteCardModal.setSubmitAction(() => {
		deleteCardModal.renderLoading(true, "Deleting...");
		api.deleteCard(cardId)
			.then(() => {
				deleteCardModal.close();
				cardElement.remove();
			})
			.catch((err) => {
				deleteCardModal.renderLoading(false, "Yes");
				console.error(err);
			});
	});
} //end func

function handleEditProfilePicture(inputData) {
	console.log("inside handlePrfilePicture, url: ", inputData); //debigging
	//open edit profile picture modal (avatar)
	editProfilePictureForm.renderLoading(true);
	api.updateUserImage({ avatar: inputData.url })
		.then((res) => {
			console.log("inside api.updateUserImage, resposne: ", res); //debugging
			userInfo.setProfilePicture({ profilePicture: inputData.url });
			editProfilePictureForm.close();
		})
		.catch((err) => {
			editProfilePictureForm.renderLoading(false);
			console.error("Picture Not Update", err);
		});
} //end func

function handleCardLike(card) {
	console.log("CARD: ", card); //debugging

	if (card._isLiked) {
		api.disLikeCard(card._data._id)
			.then((res) => {
				console.log("Inside api.disLikeCard, res is: ", res); //debugging
				card.toggleLike();
			})
			.catch((err) => {
				console.error(err);
			});
	} //end if
	else {
		api.likeCard(card._data._id)
			.then((res) => {
				console.log("Inside api.likeCard");
				card.toggleLike();
			})
			.catch((err) => {
				console.error(err);
			});
	} //end else
} //end func

/**__________________________________________ */

deleteCardModal.setEventListeners();

editProfilePictureForm.setEventListeners();

const editProfileOverlayImg = document.querySelector(
	"#js-edit-profile-overlay_img"
);

editProfileOverlayImg.addEventListener("click", () => {
	console.log("edit profile Picture Form: ", editProfilePictureForm); //debuging

	editProfilePictureForm.open();
});

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

//const deleteCardPopup = querySelector("#js-card-delete-modal");

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
		handleDeleteCard,
		handleCardLike
	); //pass new info to new card
	const elementCard = newCard.getCard();
	sectionCards.addItems(elementCard);
} //end func

/**
 * Param: settings/configurations
 * Description: all form validation initialize except the Delete confirmation form
 */
function validateForms(opts) {
	//initialize forms
	const forms = document.querySelectorAll(utils.config.formSelector); //gets all modal__form, in Node form
	let formArray = Array.from(forms); //Node forms converted to array
	formArray = formArray.filter((forms) => forms.id !== "js-delete-form"); //delete form removed from array because it does not need valdiation
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

	// Send a POST request to add a new card to the server
	addCardForm.renderLoading(true);
	api.createCard({ name: dataCard.name, link: dataCard.link })
		.then((newCard) => {
			createCard(newCard); // Render the newly created card
			addCardForm.close(); // Close the add card form
		})
		.catch((err) => {
			addCardForm.renderLoading(false,"Save");
			console.log(err);
			console.error(`Error adding new Card: ${err}`);
		});
	/*  REPLACE WITH API CALL -- inside the then block
	//createCard(dataCard);

	//close addCardPopup
	addCardForm.close();
	*/
} //end func

/********************INSTANISATIONS BELOW******************** */

//ALL FORMS VALIDATIONS
validateForms(utils.config);
/*
//USER INFO
const userInfo = new UserInfo({
	titleSelector: utils.htmlIds.profileTitle,
	descriptionSelector: utils.htmlIds.profileDescription,
});
*/
