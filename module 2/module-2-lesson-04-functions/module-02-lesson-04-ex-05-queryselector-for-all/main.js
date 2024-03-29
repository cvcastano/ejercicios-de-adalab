'use strict';
//  Estamos trabajando en un proyecto bastante grande, donde hay que recoger muchos elementos de HTML desde JavaScript para interaccionar con ellos. Para no tener que escribir document.querySelector(...) tantas veces una compañera ha sugerido hacer una función llamada getEl.
//  Esta función debe recibir por parámetro un selector de css y retornará el elemento de HTML correspondiente. Hemos quedado en que cuando llamemos a la función la sintaxis será tal que así:  const btnEl = getEl('.btn');

function getEl(eltname) {
    return document.querySelector(eltname);
}

const btnEl = getEl('button');
const mainEl = getEl('main');
const paragraphEl = getEl('p');
const titleEl = getEl('h1');


paragraphEl.innerHTML = 'Soy el párrafo';
titleEl.innerHTML = 'Soy el titulo';
btnEl.innerHTML = 'Soy el botón';
mainEl.innerHTML = mainEl.innerHTML += 'Soy un texto al final del main';



