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

// launch modal event :ouvrir le forlulaire.
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
//annuler le scroll du body lors de l'ouverture du formulaire.
  document.body.style.overflow ="hidden";
}
//Fermer le formulaire = modal.
const modalClose = document.querySelector(".close");
modalClose.addEventListener("click", doCloseModal);

function doCloseModal() {
  modalbg.style.display = "none";
//garder le scroll du body quand le formulaire est fermé.  
  document.body.style.overflow ="auto";
}




//validation du formulaire


/**
 * contrôle champ Prénom.
 */
function validatePrenom(form) {

  let prenomElt = form.first;
  let prenom = prenomElt.value;
  //RegExp :ecrire une chaine avec au moins 3 lettres maj ou bien min.
  let regexNomPrenom = new RegExp("^[a-zA-Z]{2,}$"); 
  let msgErreurPrenom = document.getElementById("first_error");
  msgErreurPrenom.textContent = ""; // le message d'erreur doit etre vide à chaque validation 'a chaque click sur le boutton C'est parti.
  prenomElt.dataset.errorVisible = "false"; // annuler le border.

   if (regexNomPrenom.test(prenom) === false) {
    msgErreurPrenom.textContent = "Saisissez un prénom qui contient au moins deux caractères alphabétiques";
    prenomElt.dataset.errorVisible = "true";
    return false;
  }

  return true;

}


/**
 * Fonction qui permet de valider le nom du contact.
 * @param {*} form  : formulaire contact
 * @return booleen :  true = le nom est valide, false = le nom est invalide 
 */
function validateNom(form) {

  let nomElt = form.last;
  let nom = nomElt.value;
  let regexNomPrenom = new RegExp("^[a-zA-Z]{2,}$");
  let msgErreurNom = document.getElementById("last_error");
  msgErreurNom.textContent = "";
  nomElt.dataset.errorVisible = "false";

  if (regexNomPrenom.test(nom) === false) {
    msgErreurNom.textContent = "Saisissez un nom qui contient au moins deux caractères alphabétiques";
    nomElt.dataset.errorVisible = "true";
    return false;
  }

  return true;
}


/**
 * Fonction qui permet de valider l'e-mail .
 * @param {*} form : formulaire contact
 * @return booleen :  true = l'adresse e-mail est valide, false = l'adresse e-mail est invalide.
 */

function validateEmail(form) {
  let emailElt = form.email;
  let email = emailElt.value;
  let msgErrorEmail = document.getElementById("email_error");
  let regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  msgErrorEmail.textContent = "";
  emailElt.dataset.errorVisible = "false";

  if (regexEmail.test(email) === false) {
    msgErrorEmail.textContent = "Saisissez une adresse électronique valide";
    emailElt.dataset.errorVisible = "true";
    return false;
  }
  return true;
}

/**
 * Fonction qui permet de valider la date de naissance .
 * @param {*} form : formulaire contact
 * @return booleen :  true = la date de naissance est valide, false = la date de naissance est invalide.
 */

function validateDate(form) {
  let dateNaissanceElt = form.birthdate;
  let dateNaissance = dateNaissanceElt.value;
  let regexDateNaissance = new RegExp(/^\d{4}-\d{2}-\d{2}$/);
  let msgErrorDate = document.getElementById("birthdate_error");
  msgErrorDate.textContent = "";
  dateNaissanceElt.dataset.errorVisible = "false";
  if (regexDateNaissance.test(dateNaissance) === false) {          //si la valeur de la date de naissance est indefnie alors return false.  
    msgErrorDate.textContent = "Saisissez votre date de naissance";
    dateNaissanceElt.dataset.errorVisible = "true";
    return false;
  }
  return true;
}

/**
 * Fonction qui permet de valider le nombre de tournois .
 * @param {*} form : formulaire contact
 * @return booleen :  true = le nombre de tournois est valide, false = le nombre de tournois est invalide.
 */

function validateTournois(form) {

  let tournoisElt = form.quantity;
  let tournois = tournoisElt.value;
  let regexNbreTournois = new RegExp("^[0-9]+$", "g");   
  let msgErrorTournois = document.getElementById("quantity_error");

  // Par défaut vider le message d'erreur
  msgErrorTournois.textContent = "";
  
  // Par défaut on affecte à l'attribut data-error-visible la valeur = false pour supprimer le style d'erreur
  tournoisElt.dataset.errorVisible = "false";

  if (regexNbreTournois.test(tournois) === false) { // si le champs est vide ou bien la valeur du champs n'est pas un numbre alors return false >> erreur.
    msgErrorTournois.textContent = "Saisissez un chiffre qui correspond au nombre de vos tournois";
    tournoisElt.dataset.errorVisible = "true";
    return false;
  }
  return true;
}


/**
 * Fonction qui permet de choisir une ville .
 * @param {*} form : formulaire contact
 * @return booleen :  true = une ville est cochée, false = aucune ville n'est choisie.
 */

function validateVille(form) {
  let radiosElt = form.location;
  let msgErrorVille = document.getElementById("radio_error");
  msgErrorVille.textContent = "";
  let nbrSelectedVille = 0;      // on va stocker le resulat 0 (ou bien false) dans la variable nbrSelectedVille.

  for (let i = 0; i < radiosElt.length; i++) {
    if (radiosElt[i].checked) {
      nbrSelectedVille += 1;
    }
  }
  if (nbrSelectedVille <= 0) {
    msgErrorVille.textContent = "Choisissez une ville";
    return false;
  } else {
    return true;
  }

}

/**
 * Fonction qui permet de controler les conditions générales .
 * @param {*} form : formulaire contact
 * @return booleen :  true = case conditions générales est cochée, false = case n'est pas cochée.
 */
function validateCondGene(form) {

  let condGeneElt = form.conditions_generales;
  let msgErrorCg = document.getElementById("conditions_generales_error");
  msgErrorCg.textContent = "";
  condGeneElt.dataset.errorVisible = "false";

  if (!condGeneElt.checked) {
    msgErrorCg.textContent = "Cocher les conditions générales d'utilisation est obligatoire";
    condGeneElt.dataset.errorVisible = "true";
    return false;
  }
  return true;
}

/**
 * Fonction qui permet le contrôle, la validation et l'envoi du formulaire .
 * @param {*} form : formulaire contact
 * @return booleen :  true = formulaire valide est envoyé, false = formulaire est non valide.
 */

function validate(form) {
  let isValidatePrenom = validatePrenom(form);
  let isValidateNom = validateNom(form);
  let isValidateEmail = validateEmail(form);
  let isValidateTournois = validateTournois(form);
  let isValidateDate = validateDate(form);
  let isValidateVille = validateVille(form);
  let isValidateCg = validateCondGene(form);
  if (isValidatePrenom && isValidateNom && isValidateEmail && isValidateTournois && isValidateDate && isValidateVille && isValidateCg) {
    doCloseModal();              // fonction qui permet de fermer le formulaire.
    alert("Merci ! Votre réservation a été reçue.");
    return true;                   //si return false le formulaire ne sera pas envoyé.
  } else {

    return false;
  }

}
