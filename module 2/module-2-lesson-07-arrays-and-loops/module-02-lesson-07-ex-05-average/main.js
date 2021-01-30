'use strict';
//  const numbers = [0, 3, 11, 13, 33];
//  let acc = 0;
// for (let i= 0; i < numbers.length; i++) {
//     acc += numbers[i];    
// }
// console.log(`The average is ${acc/numbers.length}`);

// const numbers = [0, 3, 11, 13, 33];
//  let acc = 0;
// numbers [5] = 10 ;
// for (let i= 0; i < numbers.length; i++) {
//     acc += numbers[i]/numbers.length; 
// }


// const numbers = [0, 3, 11, 13, 33, 10];
// let acc = 0;
// function average (numbers) {
//     for (let i= 0; i < numbers.length; i++) {
//          acc += numbers[i]/numbers.length; 
//         };
//         return `La media es: ${acc}`;
// }
// console.log(average (numbers));

const numbers = [5, 5, 5];
let acc = 0;
function average (numbers) {
    for (let i= 0; i < numbers.length; i++) {
         acc += numbers[i]/numbers.length; 
        };
        return `La media es: ${acc}`;
}
console.log(average (numbers));