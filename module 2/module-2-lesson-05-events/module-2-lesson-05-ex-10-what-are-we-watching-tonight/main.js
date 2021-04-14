'use strict';
// Vamos a partir de un HTML con un botón 'Empezar'. 
// Al hacer click, vamos a pintar en el HTML un listado de películas que tenemos en JavaScript:

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';

// Después vamos a escuchar eventos sobre cada elemento de la lista, 
// de forma que al hacer click sobre el nombre de una película aparezca 
// en la consola el nombre de esa película.

const button = document.querySelector('button');
const page = document.querySelector('body');

function renderMovies() {
    page.innerHTML = page.innerHTML + `<ul>
    <li class="inception">${inception}</li>
    <li class="butterfly">${theButterFlyEffect}</li>
    <li class="eternal">${eternalSunshineOfTheSM}</li>
    <li class="blue">${blueVelvet}</li>
    <li class="split">${split}</li>
    </ul>`;

    const inceptionMovie = document.querySelector(".inception");
    const butterflyMovie = document.querySelector(".butterfly");
    const eternalMovie = document.querySelector(".eternal");
    const blueMovie = document.querySelector(".blue");
    const splitMovie = document.querySelector(".split");

    function handleClick(event) {
        console.log(event.currentTarget.innerHTML);
    }

    inceptionMovie.addEventListener('click', handleClick);
    butterflyMovie.addEventListener('click', handleClick);
    eternalMovie.addEventListener('click', handleClick);
    blueMovie.addEventListener('click', handleClick);
    splitMovie.addEventListener('click', handleClick);
}

button.addEventListener('click', renderMovies);













