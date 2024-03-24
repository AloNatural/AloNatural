
function mostrarCategorias() {
    var productos = document.getElementById('Productos');
    if (productos.style.display === 'none') {
      productos.style.display = 'block';
    } else {
      productos.style.display = 'none';
    }
  }

  function mostrarCategoria(categoria) {
    // Ocultar todas las categorías
    document.querySelectorAll('[id^="categoria"]').forEach(function (el) {
      el.style.display = 'none';
    });
    // Mostrar la categoría seleccionada
    document.getElementById(categoria).style.display = 'block';
  }
