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

const pearBasket = {
    pearMax: 10,
    pearMin: 0,
    pearAct: 4,
    pearIni: 0,
    inPear: function () {
       if (this.pearAct< this.pearMax) {
        
           return this.pearAct += 1;
       }
       
    },
    outPear: function () {
        return this.pearAct -= 2;
    },
    resetPear: function () {},

}
console.log (pearBasket.inPear());

