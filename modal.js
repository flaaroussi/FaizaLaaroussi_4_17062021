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
}
//Fermer le formulaire = modal.
const modalClose = document.querySelector(".close");
modalClose.addEventListener("click", doCloseModal);

function doCloseModal(){
  modalbg.style.display = "none";
}




//validation du formulaire


/**
 * contrôle champs Prénom.
 */
function validatePrenom (form){

        let prenomElt = form.first;
        let prenom = prenomElt.value;
        let regexNomPrenom = new RegExp("^[a-zA-Z-éèàâêûîôäëüïöù]+$", "g");
        let msgErreurPrenom = document.getElementById("first_error");
        msgErreurPrenom.textContent = ""; // le message d'erreur doit etre vide à chaque validation 'a chaque click sur le boutton C'est parti.
        prenomElt.dataset.errorVisible = "false"; // annuler le border.
              
        if(prenom == ""){   // si le champ prenom est vide  >> afficher erreur.
          msgErreurPrenom.textContent = "Saisissez votre Prénom";
          prenomElt.dataset.errorVisible = "true";

          return false; //pour arrêter l'action du submit
        }
        
        else if(prenom.length <= 2){ // si le champ contient un nbre de caractère < 2 
          msgErreurPrenom.textContent = "Saisissez un nombre de caracteres superieur à 2";// alors afficher ce msg.   
          prenomElt.dataset.errorVisible = "true";
          return false;
        }

        else if( regexNomPrenom.test(prenom) === false){
          msgErreurPrenom.textContent = "Saisissez un prénom qui contient des caractères de a à z ou A à Z";
          prenomElt.dataset.errorVisible = "true";
          return false;
        }

        return true;


        /* code moins long avec un seul message.
        if(prenom == "" || prenom.length <= 2 || regexNomPrenom.test(prenom) == false){
          msgErreur.textContent = "Saisissez un prénom qui contient au moins deux caractères de a à z ou A à Z";
          prenomElt.dataset.errorVisible = "true"; 
          return false;
        } */
  
}

//2- contrôle champ Nom.

function validateNom (form){

        let nomElt = form.last;
        let nom = nomElt.value;
        let regexNomPrenom = new RegExp("^[a-zA-Z-éèàâêûîôäëüïöù]+$", "g");
        let msgErreurNom = document.getElementById("last_error");
        msgErreurNom.textContent = ""; 
        nomElt.dataset.errorVisible = "false";    
              
        if(nom == ""){    // on teste la valeur de l'element et non pas l'objet.
          msgErreurNom.textContent = "Saisissez votre Nom";
          nomElt.dataset.errorVisible = "true";
          return false; 
        }
        
        else if(nom.length <= 2){ 
          msgErreurNom.textContent = "Saisissez un nombre de caracteres superieur à 2";   
          nomElt.dataset.errorVisible = "true";
          return false;
        }

        else if( regexNomPrenom.test(nom) === false){
          msgErreurNom.textContent = "Saisissez un Prénom qui contient des caractères de a à z ou A à Z";
          nomElt.dataset.errorVisible = "true";
          return false;
        }

        return true;
}

//3- La validation frontale des e-mails consiste à déterminer si la syntaxe est correcte, pas si l'adresse e-mail est valide.

function validateEmail (form){
        let emailElt = form.email;
        let email = emailElt.value;   
        let msgErrorEmail = document.getElementById("email_error");
        let regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
        msgErrorEmail.textContent = ""; 
        emailElt.dataset.errorVisible = "false"; 

        if(email == ""){   
          msgErrorEmail.textContent = "Saisissez votre E mail";
          emailElt.dataset.errorVisible = "true";
          return false; 
        }
        else if( regexEmail.test(email) === false){
          msgErrorEmail.textContent = "Saisissez  *******************";
          emailElt.dataset.errorVisible = "true";
          return false;
        }
        return true;
}

//4- Entrée la date de naissance.

function validateDate (form){
      let dateNaissanceElt = form.birthdate;
      let dateNaissance = dateNaissanceElt.value;
      
      let msgErrorDate = document.getElementById("birthdate_error");
      msgErrorDate.textContent = ""; 
      dateNaissanceElt .dataset.errorVisible = "false"; 

      if(!dateNaissance){          //si la valeur de la date de naissance est indefnie alors return false.  
        msgErrorDate.textContent = "Saisissez votre date de naissance"; 
        dateNaissanceElt .dataset.errorVisible = "true";
        return false;
      }
      return true;
}

//4- Validation nbre de tournois.

function validateTournois (form){

      let tournoisElt = form.quantity;
      let tournois = tournoisElt.value;
      let regexNbreTournois = new RegExp("^[0, 9]", "g");   // L'expression [^0-9] est utilisée pour rechercher tout caractère qui n'est PAS un chiffre.
      let msgErrorTournois = document.getElementById("quantity_error");

      msgErrorTournois.textContent = ""; 
      tournoisElt.dataset.errorVisible = "false"; 
 
      if(regexNbreTournois.test(tournois) === false){ // si le champs est vide ou bien la valeur du champs n'est pas un numbre alors return false.
        msgErrorTournois.textContent = "Saisissez un chiffre qui correspond au nombre de vos tournois";
        tournoisElt.dataset.errorVisible = "true";
        return false; 
      }
        return true;
}
      


     


//5-Sélectionner une seule Ville.


function validateVille(form){
      let radiosElt = form.location;  
      let msgErrorVille = document.getElementById("radio_error");
      msgErrorVille.textContent = ""; 
      let nbrSelectedVille = 0;

      for(let i = 0; i < radiosElt.length; i++){
        if (radiosElt[i].checked){
          nbrSelectedVille +=  1;   // on va stocker le resulat true dans la variable isSelectedVille.          
        }        
      }
        if(nbSelectedVille <= 0){
          msgErrorVille.textContent = "Choisissez une ville"; 
          return false;
      } else{
        return true;
      }     
         
}
   
// validation du formulaire globle//

function validate(form){
    let isValidatePrenom = validatePrenom(form);
    let isValidateNom = validateNom(form);
    let isValidateEmail = validateEmail(form);
    let isValidateTournois = validateTournois (form);
    let isValidateDate = validateDate(form);
    let isValidateVille = validateVille( form);

    if(isValidatePrenom && isValidateNom && isValidateEmail && isValidateTournois && isValidateDate  && isValidateVille){
      alert("Formulaire valide");
      return true;                   //si return false le formulaire ne sera pas envoyé.
    }else{
      alert("Formulaire invalide");
      return false;
    }
          
}
