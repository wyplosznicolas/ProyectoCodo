function cambiarContenido(pagina){
    
    //contenido.src=pagina
    document.getElementById('contenido').src=pagina
    //alert(pagina)
}

var nombre = document.getElementById('nombre');
var email = document.getElementById('email');
var telefono = document.getElementById('telefono');

function validarEnviar(){
   
    if(nombre.value === null || nombre.value === ''){
       alert('Ingrese su nombre completo');
    }

    if(email.value === null || email.value === ''){
        alert('Ingrese su correo electrónico');
    }
    
    if(telefono.value === null || telefono.value === ''){
        alert('Ingrese su número de teléfono');
    }

    if(nombre.value != null && nombre.value != '' && email.value != null && email.value != '' && telefono.value != null  && telefono.value != ''){
        alert('Formulario completo. ¡Muchas gracias!')
    }

   return false;
    }