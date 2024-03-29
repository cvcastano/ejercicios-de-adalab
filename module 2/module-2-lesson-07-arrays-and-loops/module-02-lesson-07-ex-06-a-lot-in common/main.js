'use strict';

// Usando for...of vamos a hacer un pequeño programa que le pregunte a la usuaria cuáles son sus dos películas o libros favoritos mediante un formulario. 
// Cuando pulse el botón enviar guardaremos la información en un array, lo recorreremos y mostraremos este mensaje por cada obra: 
// "¡A mí también me encantó "OBRA"! Tenemos mucho en común, humana.", donde OBRA será el nombre de la obra.

const input = document.querySelector('input');
const button = document.querySelector('button');
const render = document.querySelector('.rendered_text');

function handleClick() {
    return render.innerHTML = `¡I also loved ${input.value}! We have much in common, human`;
}

button.addEventListener('click', handleClick);