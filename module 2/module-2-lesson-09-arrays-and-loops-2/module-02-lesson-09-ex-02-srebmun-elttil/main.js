'use strict';

let array100 = []

function get100Numbers() {
   for (let i = 0; i < 100; i++) {
      array100.push(i + 1);
   }
   return array100
}

function getReversed100Numbers() {
   return console.log(get100Numbers().reverse());
}

getReversed100Numbers();


/*
Vamos a crear una nueva función getReversed100Numbers que llama a la función del ejercicio anterior para obtener 100 números y los cambia de orden. Para comprobar que los tenemos todos, vamos a ejecutar la función y a loguearlos (con console.log) uno a uno en la consola en orden.
*/