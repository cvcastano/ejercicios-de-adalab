'use strict';

// Vamos a rehacer alguno de los ejercicios anteriores con funciones flecha. ¡A lo loco!

// function timesFor(a, b) {
//     const result = a * b;
//     console.log(result);
// }
// timesFor(7, 3);
// timesFor(9, 6);
// timesFor(5, 8);

const timesFor = (a, b) => a * b;
console.log('timesFor', timesFor(7, 3));
console.log('timesFor', timesFor(9, 6));
console.log('timesFor', timesFor(5, 8));
// -----------------------------------------------

// function averageOut (a,b,c,d) {
//     console.log ((a + b + c + d) /4 );
// }
// averageOut (4, 5, 1, 6);
// averageOut (8, 12, 2, 10);
// averageOut (30, 24, 36, 6);

const averageOut = (a, b, c, d) => console.log('aveageOut', (a + b + c + d) / 4);
averageOut(4, 5, 1, 6);
averageOut(8, 12, 2, 10);
averageOut(30, 24, 36, 6);
// -----------------------------------------------

// function iva(a) {
//     return `Precio sin IVA: ${a}, IVA: ${a * 0.21} y Total: ${a + a * 0.21}`;
// }
// console.log(iva(10));

const iva = a => `Precio sin IVA: ${a}, IVA: ${a * 0.21} y Total: ${a + a * 0.21}`;
console.log('iva', iva(10));
// -----------------------------------------------

// function oddEven(num) {
//     if (num % 2 === 0) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// console.log(oddEven(8));
// console.log(oddEven(9));
// console.log(oddEven(456));

const oddEven = num => {
    if (num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log('oddEven', oddEven(8));
console.log('oddEven', oddEven(9));
console.log('oddEven', oddEven(456));
// -----------------------------------------------

// function getEl(eltname) {
//     const element = document.querySelector(eltname);

//     if (element === null) {
//         console.error(`No existe ningun elemento con clase ${eltname}`)
//     } else {
//         return element
//     }
// }
// const titleEl = getEl('.main__title').innerHTML = 'Soy el titulo';
// const btnEl = getEl('.btn').innerHTML = 'Soy el botón';
// const paragraphEl = getEl('.paragraph').innerHTML = 'Soy el párrafo';

const getEl = eltname => {
    const element = document.querySelector(eltname);

    if (element === null) {
        console.log('eltname', `No existe ningun elemento con clase ${eltname}`)
    } else {
        return element
    }
}
const titleEl = getEl('.main__title');

