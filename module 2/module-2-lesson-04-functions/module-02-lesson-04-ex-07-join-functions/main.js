'use strict';
// Partimos de un HTML con un párrafo que contiene un número. En nuestro fichero JavaScript nos copiamos la declaración de las funciones getEl y la que comprueba si un número es par o impar (ejercicios 5 y 4).
// Sin modificar estas dos funciones, vamos a hacer lo siguiente:
// usando nuestra función getEl accedemos al párrafo, y recogemos su valor (con innerHTML)
// convertimos ese valor a número y lo asignamos a una constante
// usamos nuestra función del ejercicio 4 para saber si es par o impar
// escribimos en la consola 'Este número es PAR: ...' o 'Este número es IMPAR: ...'

function getEl(eltname) {
    return document.querySelector(eltname);
}

function oddEven(num) {
    if (num % 2 === 0) {
        console.log('Este número es PAR')
        return true;

    }
    else {
        console.log('Este número es IMPAR')
        return false;

    }
}

const number = parseInt(getEl('.text').innerHTML);

console.log(oddEven(number));
