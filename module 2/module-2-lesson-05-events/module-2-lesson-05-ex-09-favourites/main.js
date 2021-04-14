'use strict';
const isra = document.querySelector('.teacher--isra');
const tuerto = document.querySelector('.teacher--tuerto');
const nasi = document.querySelector('.teacher--nasi');
const container = document.querySelector('.teachers');
// const favorite = document.querySelectorAll('.favorite');


function addClass(event) {
   const chosenTeacher = event.currentTarget;
   chosenTeacher.classList.toggle('teacher--selected');
   const clicked = chosenTeacher.querySelector('.favorite');
   if (clicked.innerHTML === 'Añadir') {
      clicked.innerHTML = 'Quitar'
   } else if (clicked.innerHTML === 'Quitar') {
      clicked.innerHTML = 'Añadir'
   }
}

isra.addEventListener('click', addClass);
tuerto.addEventListener('click', addClass);
nasi.addEventListener('click', addClass);


// Al pinchar en un elemento del listado tenemos que:
// Añadir la clase .teacher--selected si no la tiene, o quitarla si la tiene.
// Modificar el texto del span .favorite sustituyéndolo por:
// 'Quitar' si en ese momento contiene 'Añadir' o
// 'Añadir' si contiene 'Quitar'.

// Nota: con querySelector buscamos un elemento dentro de otro. 
// Hasta ahora lo habíamos usado para buscar dentro de document 
// (todo nuestro documento HTML), con document.querySelector().
// Si tuviéramos una constante llamada, por ejemplo, sectionAboutElement 
// en la que hemos guardado un elemento de HTML, podríamos buscar dentro de ella 
// otro elemento, tal que así sectionAboutElement.querySelector().