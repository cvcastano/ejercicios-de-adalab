'use strict';
const numbers = [2, 3, 5, 8, 9];
let acc = 0;
for (let i= 0; i < numbers.length; i++) {
    acc += numbers[i]/numbers.length;
    
    
}
console.log(`The average is ${acc}`);
