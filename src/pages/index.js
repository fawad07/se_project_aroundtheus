import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import utils from "../Utils/Constants.js";
import "../pages/index.css";

/*----------------------------------------------------------*/
/*                 ELEMENTS                                 */
/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
/*                Profile edit button                       */
/*----------------------------------------------------------*/
const profileEditModal = document.querySelector("#js-profile-edit-modal");

const profileCloseModal = profileEditModal.querySelector(
	"#js-profile-close-modal"
);

const profileTitle = document.querySelector("#js-profile-title");

const profileDescription = document.querySelector("#js-profile-description");

const profileTitleInput = document.querySelector("#js-profile-title-input");

const profileDescriptionInput = document.querySelector(
	"#js-profile-description-input"
);

//const profileEditForm = profileEditModal.querySelector("#js-modal-edit-form");

/*----------------------------------------------------------*/
/*                Card Template/Element                             */
/*----------------------------------------------------------*/

const cardTemplate =
	document.querySelector("#js-card-template").content.firstElementChild;

const cardListElement = document.querySelector("#js-card__list");

const addCardModal = document.querySelector("#js-add-card-modal"); //grab card modal/popup from html

//const addCardForm = addCardModal.querySelector("#js-modal-add-card-form");

//const newCardTitleInput = addCardForm.querySelector("#js-add-card-title-input");
//const newCardUrlInput = addCardForm.querySelector("#js-add-card-description-input");

/*----------------------------------------------------------*/
/*                Profile add button                        */
/*----------------------------------------------------------*/

const profileAddCardButton = document.querySelector("#js-profile-add-button"); //button for adding card

//add card modal close button clicked
const addCardmodalCloseButton = addCardModal.querySelector(
	"#js-add-card-close-modal"
);

/*----------------------------------------------------------*/
/*                Image Preview.                            */
/*----------------------------------------------------------*/
const imagePreviewModal = document.querySelector("#js-image-preview-modal");

const imageClosePreviewModal = document.querySelector(
	"#js-image-preview-close-modal"
);

/*----------------------------------------------------------*/
/*               			FUNCTIONS		                */
/*----------------------------------------------------------*/

//open modal when edit button clicked/modal			NEED TO REMOVE
function openPopUp(modal) {
	modal.classList.add("modal_opened");

	document.addEventListener("keydown", handleModalCloseEscPressDown);
	modal.addEventListener("mousedown", handleModalCloseMouseClick);
} //end func

//close edit profile pop up/modal						NEED TO REMOVE
function closePopUp(modal) {
	modal.classList.remove("modal_opened");
	document.removeEventListener("keydown", handleModalCloseEscPressDown);
	modal.removeEventListener("mousedown", handleModalCloseMouseClick);
} //end func

/*																		NEED TO REMOVE
Param:	takes the event i.e mouse click 
Description: closes pop up/ modal when clicked outside form 
*/
function handleModalCloseMouseClick(evt) {
	if (evt.target === evt.currentTarget) {
		closePopUp(evt.currentTarget);
	} //end if
} //end func

/*					NEED TO REMOVE -- add card form handled
param: takes the event i.e key pressed
Description: gets the modal_opened class and
			checks if the esc key pressed only 
			than close the pop up/modal 
*/
function handleModalCloseEscPressDown(evt) {
	if (evt.key === "Escape") {
		const modalOpened = document.querySelector(".modal_opened");
		closePopUp(modalOpened);
	} //end if
} //end func

//Card Image Preview - event listener  USED LINE 239
function handleImageClick(cardData) {
	imagePopup.open(cardData);
	/*NEED TO REMOVE 
	//image view on image preview modal
	const imageElement = imagePreviewModal.querySelector("#js-card__image");
	imageElement.src = cardData.link;
	imageElement.alt = cardData.name;

	//text view on the image view modal
	const titleElement = imagePreviewModal.querySelector(
		"#js-image-preview-card-title"
	);
	titleElement.textContent = cardData.name;

	//open image preview modal
	openPopUp(imagePreviewModal);
	*/
} //end func

/*
//helper func
function renderCard(cardData, container) {
	const cardElement = getCardElement(cardData);		//have no card element func anymore
	container.prepend(cardElement);
  } //end func
*/

/*----------------------------------------------------------*/
/*               EVENT LISTNERS			             */
/*----------------------------------------------------------*/

/**NEED 2 REMOVE TILL LN 199 */
/*----------------------------------------------------------*/
/*            profile edit modal close btn clicked          */
/*----------------------------------------------------------*/

//close button in edit profile modal -- close pop-up
//profileCloseModal.addEventListener("click", () => closePopUp(profileEditModal));

/*----------------------------------------------------------*/
/*            profile edit modal save btn clicked           */
/*----------------------------------------------------------*/
/***															NEED 2 REMOVE TILL LN 212
//profile save button clicked --> profile edit modal
profileEditForm.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("Save button clicked");
	profileTitle.textContent = profileTitleInput.value; //form text content goes to profile value
	profileDescription.textContent = profileDescriptionInput.value; //form text content goes to profile value
	closePopUp(profileEditModal);
});
*/

/*----------------------------------------------------------*/
/*            profile add (+) btn clicked           */
/*----------------------------------------------------------*/

//profile add Card button clicked
profileAddCardButton.addEventListener("click", () => openPopUp(addCardModal));

/*----------------------------------------------------------*/
/*      profile add (+) card modal close btn clicked        */
/*----------------------------------------------------------*/

const addCardButtonForm = addCardModal.querySelector("#js-modal-add-card-form");

addCardButtonForm.addEventListener("submit", (event) => {
	event.preventDefault();
	const name = newCardTitleInput.value; //newCardTitleValue
	const link = newCardUrlInput.value; //newCardUrlValue

	//create new Card
	const dataCard = { name, link }; //collect new card data and link
	createCard(dataCard); //prepend card

	event.target.reset();
	closePopUp(addCardModal);
});

/*
addCardmodalCloseButton.addEventListener("click", () =>
	closePopUp(addCardModal)
);

/*----------------------------------------------------------*
/*      Card preview modal close				       *
/*----------------------------------------------------------*
imageClosePreviewModal.addEventListener("click", () =>
	closePopUp(imagePreviewModal)
);
*********************************************************************/

//func to make new card
function createCard(data) {
	const newCard = new Card(
		data,
		utils.htmlIds.cardTemplate,
		handleImageClick
	); //pass new info to new card
	const elementCard = newCard.getCard();
	cardListElement.prepend(elementCard); //display card
} //end func

/**
 * Param: None
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

function handleProfileSubmitForm(userData) {
	userInfo.setUserInfo({
		name: userData.title,
		description: userData.description,
	});
	profileEditForm.close();
} //end func

function handleAddCardSubmitForm({ name, link }) {
	console.log("Inside handle Add Card Submit form:");
	//add new card i.e. Create Card
} //end func

/********************MAIN FILE BELOW******************** */

//all forms validation
validateForms(utils.config);

//CARD SECTION
const sectionCards = new Section(
	{
		items: utils.initialCards,
		renderer: createCard,
	},
	utils.htmlIds.cardList
);
sectionCards.renderItems();

//instance of popupWithImage
const imagePopup = new PopupWithImage(utils.htmlIds.imagePreviewPopup);
imagePopup.setEventListeners();

//edit profile form
const profileEditForm = new PopupWithForm(
	utils.htmlIds.profileEditPopup,
	handleProfileSubmitForm
);

utils.profileEditButton.addEventListener("click", () => {
	const currentUser = userInfo.getUserInfo();
	profileTitleInput.value = currentUser.name;
	profileDescriptionInput.value = currentUser.description;
	profileEditForm.open();
});
profileEditForm.setEventListeners();

//userInfo
const userInfo = new UserInfo({
	titleSelector: utils.htmlIds.profileTitle,
	descriptionSelector: utils.htmlIds.profileDescription,
});

//Add card Form
const addCardForm = new PopupWithForm(
	utils.htmlIds.addCardPopup,
	handleAddCardSubmitForm
);
