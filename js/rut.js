function formatearRut(rut) {
    rut = rut.replace(/\./g, ''); // Elimina los puntos
    rut = rut.replace('-', ''); // Elimina el guión
    var dv = rut.slice(-1); // Obtiene el dígito verificador
    var cuerpo = rut.slice(0, -1); // Obtiene el cuerpo del RUT
    cuerpo = cuerpo.replace(/\B(?=(\d{3})+(?!\d))/g, '.'); // Agrega puntos cada 3 dígitos
    return cuerpo
}
document.addEventListener('DOMContentLoaded', function() {
    // Obtener el formulario y el campo de entrada de RUT
    var formulario = document.getElementById('Metodo_pago');
    var rutInput = document.getElementById('rutInput');
  
    // Agregar evento para manejar el envío del formulario
    formulario.addEventListener('submit', function(event) {
      event.preventDefault(); // Evitar envío del formulario
  
      // Obtener el valor del RUT
      var rut = rutInput.value.trim();
  
      // Verificar si el RUT es válido
      if (validarRut(rut)) {
        // Si el RUT es válido, enviar el formulario
        formulario.submit();
      } else {
        // Si el RUT no es válido, mostrar mensaje de error
        var rutError = document.querySelector('#rutInput + .invalid-feedback');
        rutError.style.display = 'block';
        // Opcional: Agregar estilo para cambiar el borde del campo de entrada
        rutInput.classList.add('invalid-input');
      }
  
      // Cambiar el ícono según la validez del RUT
      var rutIconContainer = document.getElementById('rutIconContainer');
      var rutIcon = document.getElementById('rutIcon');
      if (validarRut(rut)) {
        rutIcon.className = 'fas fa-check-circle';
        rutIcon.style.color = 'green';
      } else {
        rutIcon.className = 'fas fa-times-circle';
        rutIcon.style.color = 'red';
      }
    });
  });
  
