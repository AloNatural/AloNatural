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

  //JavaScript para manejar la funcionalidad del nombre de usuario 
    document.addEventListener('DOMContentLoaded', function () {
      // Obtener el nombre de usuario guardado en el navegador, si existe
      var savedUsername = localStorage.getItem('username');

      // Mostrar el nombre de usuario en el menú si está guardado
      if (savedUsername) {
        document.getElementById('username').textContent = savedUsername;
      }

      // Manejar el envío del formulario para guardar el nombre de usuario
      document.getElementById('usernameForm').addEventListener('submit', function (event) {
        event.preventDefault();
        var username = document.getElementById('usernameInput').value;

        // Guardar el nombre de usuario en el almacenamiento local
        localStorage.setItem('username', username);

        // Actualizar el nombre de usuario en el menú
        document.getElementById('username').textContent = username;
      });
    });

//Funcion de Contac-us.html 
    document.getElementById('sendWhatsApp').addEventListener('click', function() {
      var nombre = document.getElementById('name').value;
      var email = document.getElementById('email').value;
      var mensaje = document.getElementById('message').value;
  
      // Formateamos el mensaje con los datos del formulario
      var whatsappMessage = '¡Nuevo mensaje de contacto!%0A%0A' +
                            '*Nombre:* ' + encodeURIComponent(nombre) + '%0A' +
                            '*Correo Electrónico:* ' + encodeURIComponent(email) + '%0A' +
                            '*Mensaje:* ' + encodeURIComponent(mensaje);
  
      // Número de WhatsApp al que se enviará el mensaje
      var numeroWhatsapp = '97821211'; // Reemplaza con el número de WhatsApp deseado
  
      // Generamos el enlace para enviar el mensaje a WhatsApp
      var whatsappLink = 'https://wa.me/' + numeroWhatsapp + '?text=' + whatsappMessage;
  
      // Creamos un elemento "a" invisible y simulamos el clic para abrir la ventana de WhatsApp
      var linkElement = document.createElement('a');
      linkElement.href = whatsappLink;
      linkElement.style.display = 'none';
      document.body.appendChild(linkElement);
      linkElement.click();
      document.body.removeChild(linkElement);
    });
    //-----------------------------

    //Funciones para mostrar los productos -- Categorias Americanos  ,  Puritans,  Reibot
// Función para mostrar los resultados de búsqueda
function showResults(results) {
  const productCards = document.querySelectorAll(".card-product");

  // Ocultar todos los productos
  productCards.forEach(card => {
      card.style.display = "none";
  });

  if (results.length === 0) {
      const searchResults = document.getElementById("searchResults");
      searchResults.innerHTML = "<p>No se encontraron resultados.</p>";
      return;
  }

  // Mostrar solo los productos que coinciden con los resultados de búsqueda
  productCards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      if (results.includes(title)) {
          card.style.display = "block";
      }
  });
}

// Función para buscar productos
function searchProducts(query) {
  query = query.toLowerCase();
  const productNames = document.querySelectorAll(".card-title");
  const results = Array.from(productNames)
      .map(product => product.textContent.toLowerCase())
      .filter(name => name.includes(query));
  showResults(results);
}

// Obtener el campo de búsqueda
const searchInput = document.getElementById("searchInput");

// Agregar un evento de escucha para la entrada de texto
searchInput.addEventListener("input", function(event) {
  const query = event.target.value.trim();
  searchProducts(query);
});


  
