const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
//cambiamos el nombre de las variable para que este relacionado a su contenido
const name = document.querySelector('.name');//aqui le falto a la clase el . para que querry selector lo lea
const blog = document.querySelector('#blog');
const city = document.querySelector('.location');

//falto agregar el async en la funcion para poder usar el await en la funcion 
async function displayUser(username) {
  name.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  //aqui falto definir la variable data y usamos el await para esperar la promesa y el .json() para pasalo a typo json
  const data = await response.json()
  //aqui lo que hacemos es quitar las comillas,corchetes y el $ para que se lea correctamente la variable
  name.textContent = data.name;
  blog.textContent = data.blog;
  city.textContent = data.location;
}

function handleError(err) {
  //boramos los console.log()

  //aqui se escribio mal el nombre de la variable le falto el signo de $ al principio se cambio el nombre por una variable mas entendible
  name.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);