'use strict';
// elementos de HTML
const button = document.querySelector ('button');
const title = document.querySelector ('h1');
// handler
function changeTitle () {
    title.innerHTML = "Mi primer click, ¡ole yo y la mujer que me parió";
}
// listener sobre el botón, con tipo de evento y handler
button.addEventListener('click',changeTitle);
