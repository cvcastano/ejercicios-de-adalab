'use strict';
//Vamos a hacer un pequeño programa que te sugiera una receta en función del ingrediente que le pasemos.
//Para resolverlo nos dan una variable en la que podemos declarar un ingrediente a elegir entre estos tres: pollo, merluza o espinacas, por defecto si no hay ingrediente pondrá 'Nada en la nevera' y según el ingrediente que le pasemos el programa nos devolverá un mensaje por consola diciéndote el ingrediente que has elegido y con las siguientes sugerencias de receta: Filete con patatas Merluzita en salsa verde / Espinacas rehogadas. Ejemplo: Tu ingrediente es pollo. Puedes freirte un filete con patatas.

let ingredient = '';

switch (ingredient) {
    case 'pollo':
        console.log(`Tu ingrediente es ${ingredient}. Puedes asarte un filete con papas`);
        break;
    case 'merluza':
        console.log(`Tu ingrediente es ${ingredient}. Puedes guisarte una merlucita en salsa verde`);
        break;
    case 'espinacas':
        console.log(`Tu ingrediente es ${ingredient}. Puedes rehogarte unas ${ingredient} con bien de ajo`);
        break;
    default:
        console.log('No hay nada en la nevera');
}



