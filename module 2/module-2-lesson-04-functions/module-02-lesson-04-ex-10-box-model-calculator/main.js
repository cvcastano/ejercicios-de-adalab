'use strict';

const boxModelCalculator = (isBorderBox, width, padding, borderSize) => {
    let totalWidth;
    if (isBorderBox === false) {
        totalWidth = width + padding * 2 + borderSize * 2;
    } else if (isBorderBox === true) {
        totalWidth = width;
    }
    return `El ancho del contenido es: ${width}px y el ancho total de la caja es: ${totalWidth}px`
}

const result1 = boxModelCalculator(false, 100, 10, 5);
const result2 = boxModelCalculator(true, 100, 10, 5);

console.log('border box', result1);
console.log('content box', result2);