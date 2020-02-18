// Début du Login

$("#login").click(function() {
  showCloseButton: true
  Swal.mixin({
    input: 'text',
    confirmButtonText: 'Suivant &rarr;',
    showCloseButton: true,
    progressSteps: ['1', '2']
  }).queue([{
      title: 'Pseudo',
      text: 'Ou votre adresse e-mail renseignée lors de l\'inscription'
    },
    'Mot de passe',
    
  ]).then((result) => {
Swal.fire("Ravi de vous revoir parmi nous !");
  })
});

// Bouton annuler pour revenir sur la page d'accueil
$("#cancel").click(function() {
  $("#headSite").show();
  $("#bodyPage").show();
  $("#register_form").hide();
});
