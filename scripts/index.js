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

/*----------------------------------------------------------*/
/*                Profile edit button                       */
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

/*----------------------------------------------------------*/
/*                Card Template/Element                             */
/*----------------------------------------------------------*/

const cardTemplate = document.querySelector("#js-card-template").content.firstElementChild;
//console.log(cardTemplate);								//debugging statement 

const cardListElement = document.querySelector("#js-card__list");


const addCardModal = document.querySelector("#js-add-card-modal");		//grab card modal/popup from html
console.log(addCardModal);		//debugging statement

const addCardForm = addCardModal.querySelector("#js-modal-add-card-form");

const newCardTitleInput = addCardForm.querySelector("#js-add-card-title-input");
const newCardUrlInput = addCardForm.querySelector("#js-add-card-description-input");


/*----------------------------------------------------------*/
/*                Profile add button                        */
/*----------------------------------------------------------*/

const profileAddCardButton = document.querySelector("#js-profile-add-button");			//button for adding card
//console.log(profileAddCardButton);

//add card modal close button clicked
const addCardmodalCloseButton = addCardModal.querySelector("#js-add-card-close-modal");

/*----------------------------------------------------------*/
/*                Image Preview.                            */
/*----------------------------------------------------------*/
let imagePreviewModal = document.querySelector("#js-image-preview-modal");
console.log(imagePreviewModal);		//debugging statement

let imageClosePreviewModal = document.querySelector("#js-image-preview-close-modal");


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
	console.log("we are in close pop up func");	//debugging statement
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


/*----------------------------------------------------------*/
/*      Card image clicked		     				        */
/*----------------------------------------------------------*/

	//Card Image Preview - event listener
	//imagePreview(cardImageElement, cardData);
	
	cardImageElement.addEventListener("click", () => {
		//image view on image preview modal

		const imageElement = imagePreviewModal.querySelector("#js-card__image");
		imageElement.src = cardData.link;
		imageElement.alt = cardData.name;
		
		imageElement.style.width = "75vw";
		imageElement.style.height = "75vh";
		
		//text view on the image view modal		
		const titleElement = imagePreviewModal.querySelector("#js-image-preview-card-title");
		titleElement.textContent = cardData.name;

		//open image preview modal
		openPopUp(imagePreviewModal);
	});//end lambda func
	

/*************************************************************/
	//delete btn
	remove(cardElement);
	
	//like button
	like(cardElement);
	
	//return the ready HTML element with the filled-in data
	return cardElement;
}//end func 

//helper func
function renderCard(cardData, container){
	const cardElement = getCardElement(cardData);
	container.prepend(cardElement);
}//end func 

function like(element){
	//like button
	const cardLikeButton = element.querySelector("#js-card__like-button");
	cardLikeButton.addEventListener("click", () => {
		cardLikeButton.classList.toggle("card__like-button-active");
	});
}//end like func

function remove(element){
	const cardDeleteButton = element.querySelector("#js-card__delete-image");
	//console.log(cardDeleteButton);			//debugging statement 
	cardDeleteButton.addEventListener("click", () => {
		element.remove();
	});
}//end delete func 


/*----------------------------------------------------------*/
/*               EVENT LISTNERS			             */
/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
/*            profile edit button clicked                   */
/*----------------------------------------------------------*/

//profile edit button clicked -- pop up opened

profileEditButton.addEventListener("click", () => {
	profileTitleInput.value = profileTitle.textContent;				//pre-filled form with the profile title 
	profileDescriptionInput.value = profileDescription.textContent; //pre-filled form with the profile description 
	openPopUp(profileEditModal);
	
});

/*----------------------------------------------------------*/
/*            profile edit modal close btn clicked          */
/*----------------------------------------------------------*/

//close button in edit profile modal -- close pop-up 
profileCloseModal.addEventListener("click", () => closePopUp(profileEditModal));

/*----------------------------------------------------------*/
/*            profile edit modal save btn clicked           */
/*----------------------------------------------------------*/

//profile save button clicked --> profile edit modal 
profileEditForm.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("Save button clicked");
	profileTitle.textContent = profileTitleInput.value;			//form text content goes to profile value	
	profileDescription.textContent = profileDescriptionInput.value;		//form text content goes to profile value
	closePopUp(profileEditModal);
	});

/*----------------------------------------------------------*/
/*            profile add (+) btn clicked           */
/*----------------------------------------------------------*/

//profile add Card button clicked
profileAddCardButton.addEventListener("click", () => openPopUp(addCardModal));
/* {
	console.log("Profile add button clicked");		//debugging statement
	profileEditButtonClicked(profileAddCardButton);
});
*

/*----------------------------------------------------------*/
/*      profile add (+) card modal close btn clicked        */
/*----------------------------------------------------------*/

const  addCardButtonForm = addCardModal.querySelector("#js-modal-add-card-form");

addCardButtonForm.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("save btn cliked in Add card Modal");			//debugging statement 
	const name = newCardTitleInput.value;			//newCardTitleValue
	const link = newCardUrlInput.value;				//newCardUrlValue
	console.log(`${name} + ${link}`);					//debugging statement
	//console.log(newCardUrlValue);					//debugging statement
	const newCardEl = getCardElement({name, link});	
	//call renderCArd func
	renderCard({name, link}, cardListElement);
	event.target.reset();
	closePopUp(addCardModal);
});

addCardmodalCloseButton.addEventListener("click", () => closePopUp(addCardModal));


/*----------------------------------------------------------*/
/*      Card preview modal close				       */
/*----------------------------------------------------------*/
imageClosePreviewModal.addEventListener("click", () => closePopUp(imagePreviewModal));

/************************************************************************/

//TAsk 1: Render Card with forEach() instead of for  loop
initialCards.forEach((cardData) => renderCard(cardData,cardListElement));
/*
{
	const cardElement = getCardElement(cardData);
	cardListElement.append(cardElement);
});
*/
//CARD LIKE btn --> click and change coloe

//4. add event listener for imageEl in getCardElement() for popup view
//open image-popup --> popup/moda for image in html (3rd)
//find image element in popup
//replace src with the link ,alt with card title 
