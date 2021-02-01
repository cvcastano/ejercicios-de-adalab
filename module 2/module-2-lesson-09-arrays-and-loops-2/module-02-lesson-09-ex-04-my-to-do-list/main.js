'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false },
    { name: 'Conseguir hacer este ejercicio bien, a pesar de llevar todo el día con él', completed: false }
];
// Tareas totales
const body = document.querySelector('body');
const tasksAmount = tasks.length;
body.innerHTML += `<p class="outcome">Tienes ${tasksAmount} tareas.</p>`; // Mostrar una frase que indique cuántas tareas hay.
                                                                          // y un span para luego      
// Pintar todas las tareas en pantalla.
body.innerHTML += '<ul></ul>';                                      // crear una lista
const listElement = document.querySelector('ul');                   // variable de la lista
//listElement.innerHTML += `<li>${tasks[0].name}</li>`;             // pintar 1ª tarea en un <li>

function paintTasks() {
    for (let i = 0; i < tasks.length; i++) {

        const eachTask = `${tasks[i].name}`;                        // variable de cada tarea

        listElement.innerHTML += `<li>${eachTask}</li>`;            // pintar todas las tareas
        let listItem = listElement.querySelector('li:last-child');  // crear variable del último <li>(al ir x orden, los recorre todos)
                                                                    // * MIRAR EL "FOR OF"            
        if (tasks[i].completed === true) {
            listItem.classList.add('cross_off');                    // Tachar las ya realizadas
            const checked = `<input type="checkbox" checked>`;      // variable del box con check
            listItem.innerHTML += checked;                          // incluirlo en las tareas completadas
        } else {
            const unchecked = '<input type="checkbox">';            // variable del box sin check
            listItem.innerHTML += unchecked;                        // incluirlo en las tareas por hacer
        }
    }
}
paintTasks();                                                       //ejecutar función paintTasks
// listElement.classList.add('cross_off');                          //tachar todas las tareas

// Darle dinamismo a la lista
const eachBox = document.querySelectorAll('input');                 // variable de todos los checkbox

const listItems = document.querySelectorAll('li');                  // variable con todos los <li>

for (let i = 0; i < eachBox.length; i++) {
    eachBox[i].addEventListener('click', handleStatus)              // listener del click
}
function handleStatus() {                                           // función para marcar tareas como 'completas' o 'incompletas'.
    for (let i = 0; i < eachBox.length; i++) {
        if (eachBox[i].checked === true) {
            tasks[i].completed = true;
            listItems[i].classList.add('cross_off');
        } else {
            tasks[i].completed = false;
            listItems[i].classList.remove('cross_off');
        }
    }
}
const tasksDone = document.querySelectorAll (':checked');           // variable de los checked boxes
const tasksToDo = parseInt(tasksAmount) - parseInt(tasksDone.length); // número de tareas por hacer
console.log (tasksToDo);
let outcome = document.querySelector('.outcome');
outcome.innerHTML = `Tienes ${tasksAmount} tareas. ${tasksDone.length} completadas y ${tasksToDo} por realizar.`

handleStatus ();
/* Para que la info siempre esté actualizada en la variable inicial
add event listener a cada elemento de la lista con un 'for of'

*/