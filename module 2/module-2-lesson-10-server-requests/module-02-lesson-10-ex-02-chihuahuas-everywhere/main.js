'use strict';
const html = document.querySelector('body');
html.innerHTML +='<button class="js-dog2">Show me another Chihuahua</button><div><img src="" alt=""><img /></div>';

function getDogImage() {
    fetch("https://dog.ceo/api/breed/chihuahua/images/random")
      .then(response => response.json())
      .then(data => {
        const img = document.querySelector("img");
        img.src = data.message;
        img.alt = "Un perro";
      });
  }
  const btn = document.querySelector(".js-dog");
  btn.addEventListener("click", getDogImage);
const btn2 = document.querySelector(".js-dog2");
btn2.addEventListener("click", getDogImage);



/*
    a) Vamos a modificar el ejemplo anterior para que las fotos de nuestra página salgan sólo Chihuahuas.
    b) Vamos a encapsular toda la lógica para crear una petición en una función. 
Añadimos un botón a la página con el título 'Enséñame otro Chihuahua' de forma que al pulsarlo se haga 
otra petición al servidor de una imagen aleatoria y aparezca una nueva imagen de Chihuaua.
*/