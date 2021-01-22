'use strict';

function iva(a) {
    return `Precio sin IVA: ${a}, IVA: ${a*0.21} y Total: ${a+ a*0.21}`; 
}
iva(10);

console.log (iva(10));
    
// "Precio sin IVA: 10, IVA: 2,1 y Total: 12,1"

    
   