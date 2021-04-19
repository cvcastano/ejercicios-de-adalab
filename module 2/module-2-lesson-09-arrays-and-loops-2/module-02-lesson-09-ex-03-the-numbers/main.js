'use strict';

const lostNumbers = [4, 8, 15, 16, 23, 42];

// Vamos a crear una función bestLostNumber que nos devuelve algunos números 
// del array de los números de la serie Lost que tenemos arriba. 
// La función, debe seguir distintos pasos:

function bestLostNumber() {
    let evenNumbers = [];
    let multiplesOf3 = [];
    for (let i = 0; i < lostNumbers.length; i++) {
        if (lostNumbers[i] % 2 === 0) {                  // - Crear un nuevo array que contiene solo los números pares
            evenNumbers.push(lostNumbers[i]);
        } else if (lostNumbers[i] % 3 === 0) {          // - Crear un nuevo array que contiene solo los múltiplos de 3
            multiplesOf3.push(lostNumbers[i]);
        }
    }
    console.log('Los números pares de Lost son', evenNumbers);
    console.log('Los números múltiplos de 3 de Lost son', multiplesOf3);
    const result = evenNumbers.concat(multiplesOf3);         // Devolver una concatenación de los 2 arrays anteriores,
    console.log(result);                                     // primero los números pares y luego los múltiplos de 3.
    return result;
};
bestLostNumber();









