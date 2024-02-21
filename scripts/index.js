const initialCards = [
	{
		name: "Yosemite Valley",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
	},
	{
		name: "Lake Louise",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
	},
	{
		name: "Bald Mountains",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
	},
	{
		name: "Latemar",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
	},
	{
		name: "Vanoise National Park",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
	},
	{
		name: "Lago di Braies",
		link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
	},
	
]
/*----------------------------------------------------------*/
/*                 ELEMENTS                                 */
/*----------------------------------------------------------*/
const profileEditButton = document.querySelector("#js-profile-edit-button");
//console.log(profileEditButton);		//debugging statement 

const profileEditModal = document.querySelector("#js-profile-edit-modal");
//console.log(profileEditModal);		//debugging sttement

const profileCloseModal = profileEditModal.querySelector("#js-profile-close-modal");
//console.log(profileCloseModal);		//debugging statement 

const profileTitle = document.querySelector("#js-profile-title");
//console.log(profileTitle.textContent);			//debugging statement

const profileDescription = document.querySelector("#js-profile-description");
//console.log(profileDescription.textContent);	//debugging statemente

const profileTitleInput = document.querySelector("#js-profile-title-input");
//console.log(profileTitleInput.value);					//debugging statement

const profileDescriptionInput = document.querySelector("#js-profile-description-input");
//console.log(profileDescriptionInput.value);				//debugging statement

const profileEditForm = profileEditModal.querySelector("#js-modal-edit-form");
//console.log(profileEditForm);							//debugging statement

const cardTemplate = document.querySelector("#js-card-template").content.firstElementChild;
//console.log(cardTemplate);								//debugging statement 

const cardListElement = document.querySelector("#js-card__list");

const profileAddCardButton = document.querySelector("#js-profile-add-button");			//button for adding card
//console.log(profileAddCardButton);

/*----------------------------------------------------------*/
/*               			FUNCTIONS		                */
/*----------------------------------------------------------*/

//open modal when edit button clicked/modal
function openPopUp(modal)
{
	console.log("we are in open pop up func");	//debugging statement
	modal.classList.add("modal_opened");
	
}//end func 

//close edit profile pop up/modal
function closePopUp(modal)
{
	console.log("profile CloseButton Clicked in pop up!!");	//debugging statement
	modal.classList.remove("modal_opened");
}//end func 

function getCardElement(cardData)
{
	//clone the template element with all its content and store it in a cardElement variable
	const cardElement = cardTemplate.cloneNode(true);
	//console.log(cardElement);		//debuging statement 
	
	//access the card title and image and store them in variables
	const cardImageElement = cardElement.querySelector("#js-card__image");
	//console.log(cardImageElement);		//debugging statment
	
	const cardTitleElement = cardElement.querySelector("#js-card__title");
	//console.log(cardTitleElement);		//debugging statement 
	
	//set the path to the image to the link field of the object
	cardImageElement.src = cardData.link;
	//set the image alt text to the name field of the object
	cardImageElement.alt = cardData.name;
	
	//set the card title to the name field of the object, too
	cardTitleElement.textContent = cardData.name;
	//console.log(cardTitleElement);		//debugging statement 
	
	//return the ready HTML element with the filled-in data
	return cardElement;
}//end func 


/*----------------------------------------------------------*/
/*               EVENT LISTNERS				                */
/*----------------------------------------------------------*/

//profile edit button clicked -- pop up opened
profileEditButton.addEventListener("click", () => {
	profileTitleInput.value = profileTitle.textContent;				//pre-filled form with the profile title 
	profileDescriptionInput.value = profileDescription.textContent; //pre-filled form with the profile description 
	openPopUp(profileEditModal);
	
});

//close button  -- close pop-up 
profileCloseModal.addEventListener("click", () => closePopUp(profileCloseModal));

//profile save button clicked 
profileEditForm.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("Save button clicked");
	profileTitle.textContent = profileTitleInput.value;			//form text content goes to profile value	
	profileDescription.textContent = profileDescriptionInput.value;		//form text content goes to profile value
	closePopUp();
	});

//profile add Card button clicked
profileAddCardButton.addEventListener("click", () => openPopUp(profileAddCardButton));
/* {
	console.log("Profile add button clicked");		//debugging statement
	profileEditButtonClicked(profileAddCardButton);
});
*/

/************************************************************************/

//TAsk 1: Render Card with forEach() instead of for  loop
initialCards.forEach((cardData) => {
	const cardElement = getCardElement(cardData);
	cardListElement.append(cardElement);
});

//Task 2: Form for adding a card