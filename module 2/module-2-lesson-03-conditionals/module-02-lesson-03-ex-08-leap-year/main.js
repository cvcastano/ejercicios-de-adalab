'use strict';
// Vamos a escribir un pequeño programa que nos permita saber cuál será el siguiente año bisiesto. Para aportar un poco de información, sabemos que los años bisiestos se producen cada cuatro años a partir del año 0. El primer año bisiesto fue 4, el segundo 8 y así progresivamente. La idea de este ejercicio es que, si estuviésemos en el año 3, al ejecutarlo apareciese en la consola el texto "4", ya que el año 4 sería el siguiente año bisiesto.
// Pista: Tenemos que escribir el año en el que estamos en una constante.

const actualYear = 2021;

if (actualYear % 4 === 0) {
    console.log('Este año es bisiesto');
} else if (actualYear % 4 === 1) {
    console.log(`El próximo año bisiesto será el ${actualYear + 3}`);
} else if (actualYear % 4 === 2) {
    console.log(`El próximo año bisiesto será el ${actualYear + 2}`);
} else if (actualYear % 4 === 3) {
    console.log(`El próximo año bisiesto será el ${actualYear + 1}`);
}