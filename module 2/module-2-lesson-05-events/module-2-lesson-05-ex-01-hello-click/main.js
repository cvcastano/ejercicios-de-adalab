'use strict';
// Crear una página HTML con un párrafo en el que ponga Hola y un botón. 
// Cuando se pulse el botón hay que cambiar ese texto por "Mi primer click, ¡ole yo y la mujer que me parió!

// elementos de HTML
const button = document.querySelector ('button');
const title = document.querySelector ('h1');
// handler
function changeTitle () {
    title.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió";
}
// listener sobre el botón, con tipo de evento y handler
button.addEventListener('click',changeTitle);
