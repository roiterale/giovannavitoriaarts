<script>
  function abrirImagem(srcGrande) {
    var lightbox = document.querySelector('.lightbox');
    var imagemGrande = lightbox.querySelector('.imagem-grande');
    imagemGrande.setAttribute('src', srcGrande);
    lightbox.style.display = 'block';
  }

  function fecharImagem(event) {
    if (event.target.classList.contains('fechar') || event.target.classList.contains('lightbox')) {
      var lightbox = document.querySelector('.lightbox');
      lightbox.style.display = 'none';
    }
}


$(document).ready(function() {
  $('.mosaico img').click(function() {
    var imgSrc = $(this).attr('src');
    $('.lightbox').html('<span class="fechar">&times;</span><img src="' + imgSrc + '">');
    $('.lightbox').fadeIn();
    $('.fechar').click(function() {
      $('.lightbox').fadeOut();
    });
  });
});

$(document).ready(function() {
  $('.mosaico img').click(function() {
    var imgSrc = $(this).attr('src');
    $('.lightbox').html('<span class="fechar">&times;</span><img src="' + imgSrc + '">');
    $('.lightbox').fadeIn();
    $('.fechar').click(function() {
      $('.lightbox').fadeOut();
    });
  });
});


</script>
