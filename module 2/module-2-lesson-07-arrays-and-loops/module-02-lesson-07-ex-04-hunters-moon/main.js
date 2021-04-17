'use strict';
// Cada 3 años se produce una luna llena completamente iluminada por el Sol durante unos minutos. 
// Esta luna es conocida como la “Luna del cazador”. 
// En el año 2017 se pudo ver esta luna el 5 de octubre y mucha gente se la perdió. 
// Para que no nos pase los siguientes años vamos a crear un código que muestre en consola cuándo serán las 15 próximas lunas.

// declarar variable 
// crear bucle
// mostrar frase en consola

let huntersMoonYear = 2017;

for (let i = 0; i < 15; i++) {
    huntersMoonYear += 3;
    console.log(`${huntersMoonYear} will be a hunter's moon year`);
}


// NOTA: Vamos a realizar este ejercicio de forma que, antes de programar nada, escribamos en un papel el listado de las acciones
// (algoritmo) que tenemos que realizar para conseguir el resultado que buscamos. 
// Una vez escrito este listado, ya nos pondremos a programarlo en JS.