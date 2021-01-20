'use strict';
const hoursDay = 24;
const daysYear = 365;

const ageElement = document.querySelector ('.js-age');
const ageNumber = parseInt(ageElement.innerHTML);

const jsResult = document.querySelector ('.js-result');

const result = hoursDay * daysYear * ageNumber;

jsResult.innerHTML = `Una persona de ${ageNumber} años ha vivido ${result} horas`;






