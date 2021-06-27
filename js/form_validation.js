//validation du formulaire.

//attaché un evenement input à la fonction validate

let firstNameElt = document.getElementById("first");
firstNameElt.addEventListener("input",function(e){
   validatePrenom(firstNameElt);
});

/**
  * Fonction qui permet de valider le prénom du contact.
  * @param {*} prenomElt
  * @return booleen :  true = le nom est valide, false = le nom est invalide 
  */

 function validatePrenom(prenomElt) {
   let prenom = prenomElt.value;
   //RegExp :ecrire une chaine avec au moins 3 lettres maj ou bien min.
   let regexNomPrenom = new RegExp("^[a-zA-Z]{2,}$"); 
   let msgErreurPrenom = document.getElementById("first_error");
   msgErreurPrenom.textContent = ""; // le message d'erreur doit etre vide à chaque validation à chaque click sur le boutton C'est parti.
   prenomElt.dataset.errorVisible = "false"; // annuler le border.
 
    if (regexNomPrenom.test(prenom) === false) {
     msgErreurPrenom.textContent = "Saisissez un prénom qui contient au moins deux caractères alphabétiques";
     prenomElt.dataset.errorVisible = "true";
     return false;
   }
 
   return true;
 
 }
 
/**
  * Attachement de l'evenement à l'input nom.(controler pendant la saisie.)
  */
let lastNameElt = document.getElementById("last");
lastNameElt.addEventListener("input",function(e){
   validateNom(lastNameElt);
})

 /**
  * Fonction qui permet de valider le nom du contact.
  * @param {*} nomElt
  * @return booleen :  true = le nom est valide, false = le nom est invalide 
  */
 function validateNom(nomElt) {
 
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
  * Attachement de l'evenement à l'input email.(controler pendant la saisie.)
  */
   let emailElt = document.getElementById("email");
   emailElt.addEventListener("input",function(e){
      validateEmail(emailElt);
   })
 
 /**
  * Fonction qui permet de valider l'e-mail .
  * @param {*} emailElt
  * @return booleen :  true = l'adresse e-mail est valide, false = l'adresse e-mail est invalide.
  */
 
 function validateEmail(emailElt) {
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
  * Attachement de l'evenement à l'input date de naissance.(controler pendant la saisie.)
  */
 let dateNaissanceElt = document.getElementById("birthdate");
 dateNaissanceElt .addEventListener("input",function(e){
   validateDate(dateNaissanceElt);
 })

 /**
  * Fonction qui permet de valider la date de naissance .
  * @param {*} dateNaissanceElt
  * @return booleen :  true = la date de naissance est valide, false = la date de naissance est invalide.
  */
 
 function validateDate(dateNaissanceElt) {
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
 * Attachement de l'evenement à l'input nombre de tournois.(controler pendant la saisie.)
 */
let tournoisElt = document.getElementById("quantity");
tournoisElt.addEventListener("input",function(e){
   validateTournois(tournoisElt);
})
 

 /**
  * Fonction qui permet de valider le nombre de tournois .
  * @param {*} form : formulaire contact
  * @return booleen :  true = le nombre de tournois est valide, false = le nombre de tournois est invalide.
  */
 
 function validateTournois(tournoisElt) {
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
  * @param {*} radiosElt 
  * @return booleen :  true = une ville est cochée, false = aucune ville n'est choisie.
  */
 
 function validateVille(radiosElt) {
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
  * @param {*} condGeneElt 
  * @return booleen :  true = case conditions générales est cochée, false = case n'est pas cochée.
  */
 function validateCondGene(condGeneElt) { 
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
   let isValidatePrenom = validatePrenom(form.first);
   let isValidateNom = validateNom(form.last);
   let isValidateEmail = validateEmail(form.email);
   let isValidateTournois = validateTournois(form.quantity);
   let isValidateDate = validateDate(form.birthdate);
   let isValidateVille = validateVille(form.location);
   let isValidateCg = validateCondGene(form.conditions_generales);


   if (isValidatePrenom && isValidateNom && isValidateEmail && isValidateTournois && isValidateDate && isValidateVille && isValidateCg) {
     
     doCloseModal();              // fonction qui permet de fermer le formulaire.
     alert("Merci ! Votre réservation a été reçue.");
     return true;                   //si return false le formulaire ne sera pas envoyé.
   } else {
 
     return false;
   }
 
 }
 