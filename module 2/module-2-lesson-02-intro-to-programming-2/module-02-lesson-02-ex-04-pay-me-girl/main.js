'use strict';
const total = 128;
const people = 9;
const anasShot = 2;

const each = (total - anasShot) / people;
const ana = each + 2;

const text = 'Cada una paga ';
const textAna= 'Ana paga '

console.log (text + each + '€');
console.log (textAna + ana + '€');
