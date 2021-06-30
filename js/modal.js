function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const messageConfirmation = document.querySelector(".confirmation-overlay");

// launch modal event :ouvrir le formulaire.
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
//annuler le scroll du body lors de l'ouverture du formulaire.
  //document.body.style.overflow ="hidden";
}


//Fermer le formulaire = modal.
const modalClose = document.querySelector(".close");
modalClose.addEventListener("click", doCloseModal);

function doCloseModal() {
  modalbg.style.display = "none";

  
//garder le scroll du body quand le formulaire est fermé.  
  document.body.style.overflow ="auto";
}


/**
 * Fonction permet d'ouvrir le message de confirmation
 */
function openConfirmationMessage(){
  messageConfirmation.style.display = "flex";
}

/**
 * Fonction qui permet de fermer le message de confirmation
 */

 function closeConfirmationMessage(){
  messageConfirmation.style.display = "none";
}




// Fermer le modal de message de confirmation si on clique sur l'icone
const iconCloseMessageConfirmation = document.querySelector(".confirmation-message-icon-close");
iconCloseMessageConfirmation.addEventListener("click", closeConfirmationMessage);


// Fermer le modal de message de confirmation si on clique sur le btn fermer
const btnCloseMessageConfirmation = document.querySelector(".confirmation-message-btn-close");
btnCloseMessageConfirmation.addEventListener("click", closeConfirmationMessage);
