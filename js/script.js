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

    const api = axios.create({
        baseURL: 'https://docs.thedogapi.com/'
      });
      api.defaults.headers.common['X-API-KEY'] = 'c08d415f-dea7-4a38-bb28-7b2188202e46';
      
      const API_URL_RANDOM =  'https://api.thedogapi.com/v1/images/search'

      const spanError = document.getElementById('error')
  
  async function loadRandomPerros() {
    const res = await fetch(API_URL_RANDOM);
    const data = await res.json();
    console.log('Random')
    console.log(data)
  
    if (res.status !== 200) {
      spanError.innerHTML = "Hubo un error: " + res.status;
    } else {
      const img1 = document.getElementById('img1');
      const img2 = document.getElementById('img2');
      const btn1 = document.getElementById('btn1');
      const btn2 = document.getElementById('btn2');
      
      img1.src = data[0].url;
      img2.src = data[1].url;
  
      btn1.onclick = () => saveFavouriteMichi(data[0].id);
      btn2.onclick = () => saveFavouriteMichi(data[1].id);
    }
  }

  loadRandomPerros();