'use strict';
// Vamos a crear un objeto que sea una cesta de peras y 
// que debe tener varias propiedades:
// Número máximo de peras
// Número mínimo de peras
// Número actual de peras
// Número inicial de peras
// Y varios métodos que hagan:
// Añadir al cesto una pera
// Sacar del cesto una pera
// Restablecer el número de peras al valor inicial.
// Con la ayuda de console.log probaremos a usar varios métodos distintos y comprobar el número actual de peras para ver si funciona correctamente.

const pearBasket = {};
pearBasket.maxNumber = 100;
pearBasket.minNumber = 0;
pearBasket.currentNumber = 3;
pearBasket.initialNumber = 38;
pearBasket.plus1 = function () {
    if (this.currentNumber < this.maxNumber) {
        return this.currentNumber += 1
    } else {
        return `No more room in the basket, it can only hold up to ${this.maxNumber} pears`;
    }
};
pearBasket.minus1 = function () {
    if (this.currentNumber > this.minNumber) {
        return this.currentNumber -= 1;
    } else {
        return `The minimum number of pears in the basket is ${this.minNumber}`;
    }
};
pearBasket.reset = function () {
    return this.currentNumber = this.initialNumber;
};

console.log(pearBasket.currentNumber, 'plus 1', pearBasket.plus1());
console.log(pearBasket.currentNumber, 'minus 1', pearBasket.minus1());
console.log('current number of pears is', pearBasket.currentNumber);
console.log('reset to initial number:', pearBasket.reset());


