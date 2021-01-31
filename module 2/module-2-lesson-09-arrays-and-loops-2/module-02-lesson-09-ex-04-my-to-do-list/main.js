'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false}
];

// Mostrar una frase que indique cuántas tareas hay.
const body = document.querySelector ('body');
const tasksAmount = tasks.length;
body.innerHTML += `<p>Number of things to do: ${tasksAmount}</p>`;

// Pintar todas las tareas en pantalla.
body.innerHTML += '<ul></ul>'; //crear una lista
const listElement = document.querySelector('ul'); //seleccionar la lista
//listElement.innerHTML += `<li>${tasks[0].name}</li>`; //pintar 1ª tarea en un elemento de la lista 
                                        //no sé cambiar la clase sólo a esa tarea para tachar
function paintTasks () {     
for (let i = 0; i< tasks.length; i++) {
listElement.innerHTML += `<li>${tasks[i].name}</li>`; 
};
}
paintTasks ();                          //pintar todas las tareas


// if ((listElement.innerHTML.completed) === true){    
// listElement.classList.add('cross_off'); 


 



// Tachar las ya realizadas.
// Permitir marcar una tarea como 'completa' o 'incompleta'.