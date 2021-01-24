'use strict';
// elemento de HTML
const paragraph = document.querySelector('p');

// handler
function addLorem() {
 paragraph.innerHTML = paragraph.innerHTML + paragraph.innerHTML ;
}

// listener sobre el elemento, con tipo de evento y handler
paragraph.addEventListener('mouseenter', addLorem);





// Crear una página HTML con un párrafo con lorem ipsum. 
// Al poner el ratón sobre el párrafo, vamos a añadir un 
// nuevo párrafo a la página con lorem ipsum.