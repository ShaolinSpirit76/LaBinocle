$('.btnPay').click(function() { // ajout article sur le AJOUTER PANIER
  var $this = $(this);
  var $article = $(this).closest('article'),
    nom = $article.find('.h5').html(),
    description = $article.data('ref'),
    price = Number($article.data('price'));
  console.log(price);
  var sousTotal = price;


  console.log('nom, description, prix : ' + nom, description, price);
  var $li = $('<li data-price="' + price + '"></li>');
  $li.html(nom + '  Réf : ' + description + '<i class="deleted fas fa-trash-alt"></i>' + '<br>' + 'Quantité :   ' + '<i class="moins fas fa-minus"></i>' + '<span id="ajout" >1</span>' + '<i class="plus fas fa-plus"></i></i>' + '<br>' + ' Prix :  ' + price + ' €' + '<br>' + 'Sous total : <span class="sousTotal"></span>' + '<br>' + '<p></p>').appendTo($('#cart>ul'));

  // console.log(quantity);

$('li>.plus').click(function() {
    $('li>.calc>#ajout').html(function(){
      var ajout = $(this).val();
      return ajout * 1 + 1

    });
});

  // $(function() {
  //   $(document).on('click', '#cart>ul>li>.plus', function() {
  //     $('#ajout').html(function(i, val) {
  //       return val * 1 + 1;
  //     });
  //   });
  // });

  // $(document).on('click','#cart>ul>li>.plus', function() {
  //   var quantity = $('#cart>ul>li>#ajout').val();
  //   var quantity = Number(quantity);
  //   quantity ++;
  //   // $('#ajout').text(quantity);
  //   var price = Number($article.data('price'));
  //   var sousTotal = price * quantity;
  //   // $('.sousTotal').text(sousTotal);
  //
  //
  // });

  //   $(document).on('click','#cart>ul>li>.plus', function() {
  //   var quantity = $('#ajout').val();
  //   var quantity = Number(quantity);
  //   $('#ajout').text(quantity--);
  //   var price = Number($article.data('price'));
  //   var sousTotal = price * quantity;
  //   $('.sousTotal').text(sousTotal);
  //
  // });

  computePrice();
  //
  // if (current = 1) {
  //   $(this).unbind("click");
  // }

  $('#cart>ul>li>.deleted').click(function() { // Fonction sur la liste des articles
    $(this).parent().remove();
    var product = $(this).data('price');
    console.log('Prix à retirer ' + product);
    //2 chiffres après virgule
    computePrice();
  });
});


$("#pay").click(function() {
  var price = $('.pay').data("total");
  if (price == undefined) {
    price = 0.00;
  }
  alert("Votre commande est de " + price + "€ !");
});

function computePrice() { //Fonction pour calculer le prix total
  var totalPrice = 0;
  $("#cart li").each(function(key, val) {
    var $product = $(val)
    totalPrice += $product.data("price");
  });
  $(".pay").data("total", totalPrice).children(".total").html(totalPrice); // Permet d'afficher le total
};
