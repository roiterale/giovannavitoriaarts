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
</script>
