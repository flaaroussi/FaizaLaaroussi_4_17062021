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
              
        if(nom == ""){   
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

// validation du formulaire gouble//

function validate(form){
    let isValidatePrenom = validatePrenom(form);
    let isValidateNom = validateNom(form);
    let isValidateEmail = validateEmail(form);
     

    if(isValidatePrenom && isValidateNom && isValidateEmail){
      alert("Formulaire valide");
      return true;                   //si return false le formulaire ne sera pas envoyé.
    }else{
      alert("Formulaire invalide");
      return false;
    }

          
}
/*
function verif(f){
  if (f.nom.value && f.prenom.value && f.email.value && f.birthdate.value )
  return true;
  var message = "Merci de vérifier les champs suivants:";
  if (!f.nom.value) message +="n - Nom";            // si le form ets diff de la valeur du nom alors msg =*******
  if (!f.prenom.value) message +="n - Prénom";
  if (!f.email.value) message +="n - email";
  if (!f.birthdate.value) message +="n - birthdate";
  if (!f.email.value) message +="n - email";

  alert(message);
  return false;
  }
  */