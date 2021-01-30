'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript',
        completed: false}
];

// Nuestra misión es:
// Mostrar una frase que indique cuántas tareas hay.
const paragraphElement = document.querySelector ('p');
const tasksAmount = tasks.length;
paragraphElement.innerHTML = `Number of things to do: ${tasksAmount}`;
// Pintar todas las tareas en pantalla.
const listElement = document.querySelector ('ul');
listElement.innerHTML = '';

// Tachar las ya realizadas.
// Permitir marcar una tarea como 'completa' o 'incompleta'.