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

const profileEditButton = document.querySelector("#js-profile-edit-button");
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
const profileEditForm = profileEditModal.querySelector("#js-modal-edit-form");

const cardTemplate =
	document.querySelector("#js-card-template").content.firstElementChild;
const cardListElement = document.querySelector("#js-card__list");
const addCardModal = document.querySelector("#js-add-card-modal");
const addCardForm = addCardModal.querySelector("#js-modal-add-card-form");
const newCardTitleInput = addCardForm.querySelector("#js-add-card-title-input");
const newCardUrlInput = addCardForm.querySelector(
	"#js-add-card-description-input"
);

const profileAddCardButton = document.querySelector("#js-profile-add-button");
const addCardmodalCloseButton = addCardModal.querySelector(
	"#js-add-card-close-modal"
);

const imagePreviewModal = document.querySelector("#js-image-preview-modal");
const imageClosePreviewModal = document.querySelector(
	"#js-image-preview-close-modal"
);

const config = {
	formSelector: ".modal__form",
	inputSelector: ".modal__field",
	submitButtonSelector: ".modal__button",
	inactiveButtonClass: ".modal__button_disabled",
	inputErrorClass: "modal__error",
	errorClass: "modal__error_visible",
};

const htmlIds = {
	cardList: "#js-card__list",
	cardTemplate: "#js-card-template",
	addCardPopup: "#js-add-card-modal",
	imagePreviewPopup: "#js-image-preview-modal",
	profileEditPopup: "#js-profile-edit-modal",
	profileTitle: "#js-profile-title",
	profileDescription: "#js-profile-description",
};

// Bundle the variables and objects into a single object
const utils = {
	profileEditButton,
	profileEditModal, //NOT USED
	profileCloseModal, //NOT USED
	profileTitle,
	profileDescription,
	profileTitleInput,
	profileDescriptionInput,
	profileEditForm,
	cardTemplate,
	cardListElement, //NOT USED
	addCardModal, //NOT USED
	addCardForm,
	newCardTitleInput,
	newCardUrlInput,
	profileAddCardButton,
	addCardmodalCloseButton, //NOT USED
	imagePreviewModal, //NOT USED
	imageClosePreviewModal, //NOT USED
	config,
	initialCards,
	htmlIds,
};

export default utils;
