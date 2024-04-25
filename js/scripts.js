// Función para formatear el número de tarjeta
function formatTarjeta() {
    document.getElementById('tarjeta').addEventListener('input', function (e) {
      var target = e.target;
      var input = target.value.replace(/\D/g, '').substring(0, 16);
      target.value = input.replace(/([0-9]{4})/g, '$1 ').trim();
    });
  }
  
  // Función para manejar el envío del formulario y mostrar un mensaje de éxito
  function handleFormSubmit() {
    document.addEventListener("DOMContentLoaded", function () {
      var form = document.querySelector("#Metodo_pago");
      form.addEventListener("submit", function (e) {
        e.preventDefault(); // Evita que el formulario se envíe realmente
        alert("Su pago se ha realizado con éxito.");
        window.location.href = 'index.html'; // Redirige a la página index.html después de aceptar la alerta
      });
    });
  }
  