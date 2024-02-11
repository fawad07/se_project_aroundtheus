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
console.log(profileEditButton);		//debugging statement 

const profileEditModal = document.querySelector("#js-profile-edit-modal");
console.log(profileEditModal);		//debugging sttement

const profileCloseModal = document.querySelector("#js-profile-close-modal");
console.log(profileCloseModal);		//debugging statement 

const profileTitle = document.querySelector("#js-profile-title");
console.log(profileTitle.textContent);			//debugging statement

const profileDescription = document.querySelector("#js-profile-description");
console.log(profileDescription.textContent);	//debugging statemente

const profileTitleInput = document.querySelector("#js-profile-title-input");
console.log(profileTitleInput.value);					//debugging statement

const profileDescriptionInput = document.querySelector("#js-profile-description-input");
console.log(profileDescriptionInput.value);				//debugging statement

const profileEditForm = profileEditModal.querySelector("#js-modal-form");
console.log(profileEditForm);							//debugging statement

/*----------------------------------------------------------*/
/*               			FUNCTIONS		                */
/*----------------------------------------------------------*/
function closePopUp()
{
	profileEditModal.classList.remove("modal_opened");
}//end func 




/*----------------------------------------------------------*/
/*               EVENT LISTNERS				                */
/*----------------------------------------------------------*/

//profile edit button clicked -- pop up opened
profileEditButton.addEventListener("click", () => {
	console.log("profile editButton Clicked!!");	//debugging statement
	
	profileTitleInput.value = profileTitle.textContent;				//pre-filled form with the profile title 
	profileDescriptionInput.value = profileDescription.textContent; //pre-filled form with the profile description 
	profileEditModal.classList.add("modal_opened");
});

//close button  -- close pop-up 
profileCloseModal.addEventListener("click", () => {
	console.log("profile CloseButton Clicked in pop up!!");	//debugging statement
	closePopUp();
	//profileEditModal.classList.remove("modal_opened");
});


profileEditForm.addEventListener("submit", (event) => {
	event.preventDefault();
	console.log("Save button clicked");
	profileTitle.textContent = profileTitleInput.value;			//form text content goes to profile value	
	profileDescription.textContent = profileDescriptionInput.value;		//form text content goes to profile value
	closePopUp();
	//profileEditModal.classList.remove("modal_opened");
});