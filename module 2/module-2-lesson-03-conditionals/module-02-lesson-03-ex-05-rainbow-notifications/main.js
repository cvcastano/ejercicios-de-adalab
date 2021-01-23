'use strict';
const div = document.querySelector('div');
const title = document.querySelector('h1');
const text = document.querySelector('p');


// Usando JavaScript, haremos que:
// Si contiene la clase warning, el título sea 'AVISO' y el texto sea: 'Tenga cuidado'

if (div.classList.contains('warning')) {
    title.innerHTML = 'AVISO';
    text.innerHTML = 'Tenga cuidado';
}
// Si contiene la clase error, el título sea 'ERROR' y el texto sea: 'Ha surgido un error'
else if (div.classList.contains('error')) {
    title.innerHTML = 'ERROR';
    text.innerHTML = 'Ha surgido un error';
}

// Si contiene la clase success, el título sea 'CORRECTO' y el texto sea: 'Los datos son correctos'
else if (div.classList.contains('success')) {
    title.innerHTML = 'CORRECTO';
    text.innerHTML = 'Los datos son correctos';
}