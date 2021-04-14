'use strict';

const container = document.querySelector('.teachers');

function addClass(event) {

   if (event.currentTarget === event.target) {
      return;
   }

   const isTeacher = event.target.classList.contains('teacher');
   let chosenTeacher;

   if (isTeacher === true) {
      chosenTeacher = event.target
   } else {
      chosenTeacher = event.target.parentNode
   }
// const chosenTeacher = isTeacher ? event.target : event.target.parentNode;  líneas 12 a 18 pero con ternario

   chosenTeacher.classList.toggle('teacher--selected');

   const clicked = chosenTeacher.querySelector('.favorite');

   if (chosenTeacher.classList.contains('teacher--selected')) {
      clicked.innerHTML = 'Quitar';
   } else {
      clicked.innerHTML = 'Añadir';
   }
}

container.addEventListener('click', addClass);

// Vamos a refactorizar el EJERCICIO 9 para mejorarlo. 
// Tenemos que quitar ese mogollón de listeners en los lis, reemplazarlos 
// por uno solo en la etiqueta madre (ul) y trabajar con event.target.

// Nota: esta técnica de poner un listener en la madre y acceder a la hija sobre la que se ha hecho click se llama event delegation.