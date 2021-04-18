'use strict';
// Vamos a partir de un HTML que tiene 3 botones con el texto ALARMA en un fondo blanco. 
// Vamos a hacer que al pulsar en cualquiera de ellos, el fondo de la pantalla se ponga rojo. 
// Si volvemos a pulsar en cualquiera de ellos, el fondo se pondrá blanco. Y así sucesivamente. 
// Vamos a hacer uso de querySelectorAll para evitar repetir mucho código.

const buttons = document.querySelectorAll('button');
const page = document.querySelector('body');

function handleClick() {
    page.classList.toggle('red');
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleClick);
}