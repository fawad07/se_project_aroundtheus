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
];
/*----------------------------------------------------------*/
/*                 ELEMENTS                                 */
/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
/*                Profile edit button                       */
/*----------------------------------------------------------*/

const profileEditButton = document.querySelector("#js-profile-edit-button");

const profileEditModal = document.querySelector("#js-profile-edit-modal");

const profileCloseModal = profileEditModal.querySelector(
  "#js-profile-close-modal",
);

const profileTitle = document.querySelector("#js-profile-title");

const profileDescription = document.querySelector("#js-profile-description");

const profileTitleInput = document.querySelector("#js-profile-title-input");

const profileDescriptionInput = document.querySelector(
  "#js-profile-description-input",
);

const profileEditForm = profileEditModal.querySelector("#js-modal-edit-form");

/*----------------------------------------------------------*/
/*                Card Template/Element                             */
/*----------------------------------------------------------*/

const cardTemplate =
  document.querySelector("#js-card-template").content.firstElementChild;

const cardListElement = document.querySelector("#js-card__list");

const addCardModal = document.querySelector("#js-add-card-modal"); //grab card modal/popup from html

const addCardForm = addCardModal.querySelector("#js-modal-add-card-form");

const newCardTitleInput = addCardForm.querySelector("#js-add-card-title-input");
const newCardUrlInput = addCardForm.querySelector(
  "#js-add-card-description-input",
);

/*----------------------------------------------------------*/
/*                Profile add button                        */
/*----------------------------------------------------------*/

const profileAddCardButton = document.querySelector("#js-profile-add-button"); //button for adding card

//add card modal close button clicked
const addCardmodalCloseButton = addCardModal.querySelector(
  "#js-add-card-close-modal",
);

/*----------------------------------------------------------*/
/*                Image Preview.                            */
/*----------------------------------------------------------*/
const imagePreviewModal = document.querySelector("#js-image-preview-modal");

const imageClosePreviewModal = document.querySelector(
  "#js-image-preview-close-modal",
);

/*----------------------------------------------------------*/
/*               			FUNCTIONS		                */
/*----------------------------------------------------------*/

//open modal when edit button clicked/modal
function openPopUp(modal) {
  modal.classList.add("modal_opened");

  document.addEventListener("keydown", handleModalCloseEscPressDown);
  modal.addEventListener("mousedown", handleModalCloseMouseClick);
} //end func

//close edit profile pop up/modal
function closePopUp(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", handleModalCloseEscPressDown);
  modal.removeEventListener("mousedown", handleModalCloseMouseClick);
} //end func

/*
Param:	takes the event i.e mouse click 
Description: closes pop up/ modal when clicked outside form 
*/
function handleModalCloseMouseClick(evt) {
  if (evt.target === evt.currentTarget) {
    closePopUp(evt.currentTarget);
  } //end if
} //end func

/*
param: takes the event i.e key pressed
Description: gets the modal_opened class and
			checks if the esc key pressed only 
			than close the pop up/modal 
*/
function handleModalCloseEscPressDown(evt) {
	if (evt.key === "Escape") {
		const modalOpened = document.querySelector(".modal_opened");
		closePopUp(modalOpened);
	}//end if 
} //end func

function getCardElement(cardData) {
  //clone the template element with all its content and store it in a cardElement variable
  const cardElement = cardTemplate.cloneNode(true);

  //access the card title and image and store them in variables
  const cardImageElement = cardElement.querySelector("#js-card__image");

  const cardTitleElement = cardElement.querySelector("#js-card__title");

  //set the path to the image to the link field of the object
  cardImageElement.src = cardData.link;
  //set the image alt text to the name field of the object
  cardImageElement.alt = cardData.name;

  //set the card title to the name field of the object, too
  cardTitleElement.textContent = cardData.name;

  /*----------------------------------------------------------*/
  /*      Card image clicked		     				        */
  /*----------------------------------------------------------*/

  //Card Image Preview - event listener

  cardImageElement.addEventListener("click", () => {
    //image view on image preview modal

    const imageElement = imagePreviewModal.querySelector("#js-card__image");
    imageElement.src = cardData.link;
    imageElement.alt = cardData.name;

    //text view on the image view modal
    const titleElement = imagePreviewModal.querySelector(
      "#js-image-preview-card-title",
    );
    titleElement.textContent = cardData.name;

    //open image preview modal
    openPopUp(imagePreviewModal);
  }); //end lambda func

  /*************************************************************/
  //delete btn
  setDeleteHandler(cardElement);

  //like button
  setLikeHandler(cardElement);

  //return the ready HTML element with the filled-in data
  return cardElement;
} //end func

//helper func
function renderCard(cardData, container) {
  const cardElement = getCardElement(cardData);
  container.prepend(cardElement);
} //end func

function setLikeHandler(element) {
  //like button
  const cardLikeButton = element.querySelector("#js-card__like-button");
  cardLikeButton.addEventListener("click", () => {
    cardLikeButton.classList.toggle("card__like-button-active");
  });
} //end like func

function setDeleteHandler(element) {
  const cardDeleteButton = element.querySelector("#js-card__delete-image");
  cardDeleteButton.addEventListener("click", () => {
    element.remove();
  });
} //end delete func

/*----------------------------------------------------------*/
/*               EVENT LISTNERS			             */
/*----------------------------------------------------------*/

/*----------------------------------------------------------*/
/*            profile edit button clicked                   */
/*----------------------------------------------------------*/

//profile edit button clicked -- pop up opened

profileEditButton.addEventListener("click", () => {
  profileTitleInput.value = profileTitle.textContent; //pre-filled form with the profile title
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
  profileTitle.textContent = profileTitleInput.value; //form text content goes to profile value
  profileDescription.textContent = profileDescriptionInput.value; //form text content goes to profile value
  closePopUp(profileEditModal);
});

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

  //call renderCArd func
  renderCard({ name, link }, cardListElement);
  event.target.reset();
  closePopUp(addCardModal);
});

addCardmodalCloseButton.addEventListener("click", () =>
  closePopUp(addCardModal),
);

/*----------------------------------------------------------*/
/*      Card preview modal close				       */
/*----------------------------------------------------------*/
imageClosePreviewModal.addEventListener("click", () =>
  closePopUp(imagePreviewModal),
);

/************************************************************************/

//Render Card with forEach() instead of for  loop
initialCards.forEach((cardData) => renderCard(cardData, cardListElement));
