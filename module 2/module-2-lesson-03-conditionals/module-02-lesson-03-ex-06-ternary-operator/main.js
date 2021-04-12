'use strict';

// let avocados;
const avocadoPrice = 1.5;
const money = 33;
// if (money >= avocadoPrice) {
//   avocados = money / avocadoPrice;
// } else {
//   avocados = 0;
// }
// console.log (avocados);


// Reescribe el código del anterior utilizando un ternario en lugar de un if...else.

const avocados = money >= avocadoPrice ? money / avocadoPrice : 0;

console.log(avocados)