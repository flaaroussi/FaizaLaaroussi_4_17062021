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