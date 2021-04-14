'use strict';
// elementos de HTML
const paragraph = document.querySelector('p');
const page = document.querySelector('body');
// handler
function addLorem() {
    page.innerHTML = page.innerHTML + `<p>${paragraph.innerHTML}</p>`;
}

// listener sobre el elemento, con tipo de evento y handler
paragraph.addEventListener('mouseenter', addLorem);




// Crear una página HTML con un párrafo con lorem ipsum. 
// Al poner el ratón sobre el párrafo, vamos a añadir un 
// nuevo párrafo a la página con lorem ipsum.