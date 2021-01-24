'use strict';
// coger los elementos de HTML
const button = document.querySelector('button');
const text = document.querySelector('input');


//handler
function changeText () {
   alert (`Hola, ${text.value}`);  

}
button.addEventListener('click',changeText);