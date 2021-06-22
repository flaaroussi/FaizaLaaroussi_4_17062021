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


// validation du formulaire //

function validate(form){
  //1- contrôle champ Prénom.
      let prenomElt = form.first;
      let prenom = prenomElt.value;
      let regexNomPrenom = new RegExp(/^[a-zA-Z-éèàâêûîôäëüïöù^]/);
      let msgErreurPrenom = document.getElementById("first_error");
      msgErreurPrenom.textContent = ""; // le message d'erreur doit etre vide à chaque validation 'a chaque click sur le boutton C'est parti.
      prenomElt.dataset.errorVisible = "false"; // annuler le border.
            
      if(prenom == ""){   // si le champ prenom est vide  >> afficher erreur.
        msgErreur.textContent = "Saisissez votre Prénom";
        prenomElt.dataset.errorVisible = "true";

        return false; //pour arrêter l'action du submit
      }
      
      else if(prenom.length <= 2){ // si le champ contient un nbre de caractère < 2 
        msgErreurPrenom.textContent = "Saisissez un nombre de caracteres superieur à 2";// alors afficher ce msg.   
        prenomElt.dataset.errorVisible = "true";
        return false;
      }

      else if( regexNomPrenom.test(prenom) == false){
        msgErreurPrenom.textContent = "Saisissez un prénom qui contient des caractères de a à z ou A à Z";
        prenomElt.dataset.errorVisible = "true";
        return false;
      }

                                /* code moins long avec un seul message.
                                if(prenom == "" || prenom.length <= 2 || regexNomPrenom.test(prenom) == false){
                                  msgErreur.textContent = "Saisissez un prénom qui contient au moins deux caractères de a à z ou A à Z";
                                  prenomElt.dataset.errorVisible = "true"; 
                                  return false;
                                } */
      
      

  //2- contrôle champ nom
      
      let nomElt = form.last;
      let nom = nomElt.value;
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

      else if( regexNomPrenom.test(nom) == false){
        msgErreurNom.textContent = "Saisissez un Prénom qui contient des caractères de a à z ou A à Z";
        nomElt.dataset.errorVisible = "true";
        return false;
      }

      
  
  //3- La validation frontale des e-mails consiste à déterminer si la syntaxe est correcte, pas si l'adresse e-mail est valide.
      
      let emailElt = form.email;
      let email = emailElt.document.getElementById("email");
      let regexEmail = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
      let msgErreurEmail = document.getElementById("email_error");
      msgErreurEmail.textContent = ""; 
      emailElt.dataset.errorVisible = "false"; 
            
      if(email == ""){   
        msgErreurEmail.textContent = "Saisissez votre E mail";
        emailElt.dataset.errorVisible = "true";
        return false; 
      }
      
      

      else if( regexEmail.test(email) == false){
        msgErreurEmail.textContent = "Saisissez un prénom qui contient des caractères de a à z ou A à Z";
        emailElt.dataset.errorVisible = "true";
        return false;
      }

      


      
      else {
        return false;
      }   

 
      
}