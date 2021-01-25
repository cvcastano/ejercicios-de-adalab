'use strict';

const input = document.querySelector('input');
const paragraph = document.querySelector('p');

function pickUpValue () {
    paragraph.innerHTML= event.currentTarget.value;
}
input.addEventListener('keyup', pickUpValue);



// Crear una página con un input de texto y un párrafo vacío. 
// Cada vez que la usuaria escriba una letra tenemos que 
// recoger el valor del input al que le pusimos el listener 
// y escribirlo en el párrafo.
// Nota: el objetivo es hacerlo utilizando 
// event.currentTarget.