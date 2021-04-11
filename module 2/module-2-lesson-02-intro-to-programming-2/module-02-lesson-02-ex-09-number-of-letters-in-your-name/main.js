'use strict';
const name = 'Carolina'; 
const surname = 'Castaño'; 
const surname2 = 'Castillo';
const charactersSum = name + surname + surname2;

const title = document.querySelector('h1');

title.innerHTML = `Mi nombre es ${name} ${surname} ${surname2}, y está compuesto por ${charactersSum.length} caracteres`;