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

// validacion Nombre en adddprouc y edit
function validarNombre() {
  var input = document.getElementById('nombre');
  var valor = input.value;
  // Remover caracteres no alfabéticos y no espacios en blanco
  var newValue = valor.replace(/[^A-Za-z\s]/g, '');
  if (valor !== newValue) {
      input.value = newValue;
  }
}
// validacion apellido en editUser
function validarApellido() {
  var input = document.getElementById('apellido');
  var valor = input.value;
  // Remover caracteres no alfabéticos y no espacios en blanco
  var newValue = valor.replace(/[^A-Za-z\s]/g, '');
  if (valor !== newValue) {
      input.value = newValue;
  }
}

//validacion Descripcion en adddprouc y edit
function validarDescripcion() {
  var input = document.getElementById('descripcion');
  var valor = input.value;
  // Remover números y caracteres no permitidos
  var newValue = valor.replace(/[^a-zA-Z\s.,:;!?¡¿()-]/g, '');
  if (valor !== newValue) {
      input.value = newValue;
  }
}

//validacion Precio en adddprouc y edit
function validarPrecio() {
  var input = document.getElementById('precio');
  var valor = input.value;
  // Remover caracteres no permitidos
  var newValue = valor.replace(/[^0-9$]/g, '');
  if (valor !== newValue) {
      input.value = newValue;
  }
}

//validacion Imagenes en adddprouc y edit
function validarImagen() {
  var input = document.getElementById('imagen');
  var file = input.files[0];
  var allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];

  if (file && allowedTypes.includes(file.type)) {
      // La selección de archivo es una imagen permitida
      input.setCustomValidity('');
  } else {
      // La selección de archivo no es una imagen permitida
      input.setCustomValidity('Seleccione una imagen válida (JPEG, PNG, GIF, WEBP).');
  }
}

//validacion correo en editUser
function validarEmail() {
  var input = document.getElementById('email');
  var valor = input.value;

  if (!valor.includes('@')) {
      input.setCustomValidity('El correo electrónico debe contener "@".');
  } else {
      input.setCustomValidity('');
  }
}
//Cargar datos usuarios en editUser
//function cargarDatosUsuario() {
  //const params = new URLSearchParams(window.location.search);
  //const userId = params.get('id');
  //document.getElementById('userId').value = userId;

  // Fetch and fill the form with the user's data if available
  //document.getElementById('nombre').value = "John";  // Example data
  //document.getElementById('apellido').value = "Doe";
  //document.getElementById('email').value = "john@example.com";
//}

//window.onload = function () {
  //7cargarDatosUsuario();
//};

// Confirmacion de registro de usuario
function mostrarAlerta() {
  var nombre = document.getElementById('nombre').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (nombre === '' || email === '' || password === '') {
      alert('Por favor, llene todos los campos antes de enviar el formulario.');
      return; // No continuar si hay campos vacíos
  }

  alert("Se ha registrado con éxito.");
  window.location.href = 'admin.html#usuarios'; // Redirigir a la página index.html después de aceptar la alerta
}

document.getElementById("registrarbtn").addEventListener("click", mostrarAlerta);





//Ver contraseña en registro de usuario
function togglePasswordVisibility() {
  var passwordInput = document.getElementById('password');
  var toggleIcon = document.getElementById('togglePassword');

  if (passwordInput.type === "password") {
      passwordInput.type = "text";
      toggleIcon.className = "far fa-eye";
  } else {
      passwordInput.type = "password";
      toggleIcon.className = "far fa-eye-slash";
  }
}


