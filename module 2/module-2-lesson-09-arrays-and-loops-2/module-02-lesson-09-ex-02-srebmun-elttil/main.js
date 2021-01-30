'use strict';

let array100 = []

 function get100Numbers () {
    for (let i= 0; i<100; i++) {
       array100.push(i+1);
       
    }
return array100
}
 
function getReversed100Numbers () {
   let reversedArray100 = get100Numbers().reverse();
    console.log(reversedArray100);
}
getReversed100Numbers();