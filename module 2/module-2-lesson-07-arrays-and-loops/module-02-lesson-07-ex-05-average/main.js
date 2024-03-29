'use strict';
// a) Vamos a crear un nuevo array numbers que contendrá 5 números cualesquiera. 
// Vamos a recorrer el array mediante un bucle para calcular la media de los números 
// (la suma de los números dividido por cuántos hay, es decir, 5). 
// Necesitaremos una variable (acumulador) para ir almacenando la suma de todos los números y después poder hacer la media. 
// Para comprobar si el resultado es correcto, vamos a loguearlo en la consola.
//  const numbers = [0, 3, 11, 13, 33];
//  let acc = 0;
// for (let i= 0; i < numbers.length; i++) {
//     acc += numbers[i];    
// }
// console.log(`The average is ${acc/numbers.length}`);

// b) Ahora vamos añadir un nuevo número al array y repetir el cálculo de la media. 
// En este caso, para calcular la media habrá que sumar todos y dividir entre el total, que ahora es 6.
// const numbers = [0, 5, 8, 12, 20];
// numbers [5] = 15 ;
//  let acc = 0;
// for (let i= 0; i < numbers.length; i++) {
//     acc += numbers[i]/numbers.length; 
// }
// console.log(`The average is ${acc}`)

// c) Vamos a generalizar el código anterior creando una función average. 
// Esta función toma como parámetro un array numbers, calula la media del array (de cualquier longitud) y devuelve la media. 
// Para poder trabajar con arrays de cualquier longitud, deberemos consultar la longitud del array mediante su propiedad length 
// (ya lo he venido haciendo). 
// Para comprobar que la función hace el cálculo correcto, la invocaremos varias veces pasándole como argumento un array 
// con diferente longitud cada vez y mostraremos el resultado en la consola del navegador.
// const numbers = [3, 11, 13, 33, 10];
// let acc = 0;
// function average (numbers) {
//     for (let i= 0; i < numbers.length; i++) {
//          acc += numbers[i]/numbers.length; 
//         };
//         return `La media es: ${acc}`;
// }
// console.log(average (numbers));

const numbers = [5, 15, 22];
let acc = 0;
function average (numbers) {
    for (let i= 0; i < numbers.length; i++) {
         acc += numbers[i]/numbers.length; 
        };
        return `La media es: ${acc}`;
}
console.log(average (numbers));