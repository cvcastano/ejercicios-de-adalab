'use strict';
const tasks = [
    { name: 'Recoger setas en el campo', completed: true },
    { name: 'Comprar pilas', completed: true },
    { name: 'Poner una lavadora de blancos', completed: true },
    { name: 'Aprender cómo se realizan las peticiones al servidor en JavaScript', completed: false },
    { name: 'Conseguir hacer este ejercicio bien, a pesar de llevar todo el día con él', completed: false }
];
// Tareas totales
const page = document.querySelector('body');
page.innerHTML += `<p class="outcome">Número de tareas ➡ ${tasks.length}</p>`;// Mostrar una frase que indique cuántas tareas hay.     

page.innerHTML += '<ul></ul>';                                      // crear una lista
const listElement = document.querySelector('ul');                   // variable de la lista
//listElement.innerHTML += `<li>${tasks[0].name}</li>`;             // pintar 1ª tarea en un <li>

function paintTasks() {                                             // Pintar todas las tareas en pantalla.
    for (let i = 0; i < tasks.length; i++) {

        const task = `${tasks[i].name}`;                            // variable de cada tarea

        listElement.innerHTML += `<li>${task}</li>`;                // pintar todas las tareas
        let listItem = listElement.querySelector('li:last-child');  // variable del último <li>(al ir x orden, los recorre todos)

        if (tasks[i].completed === true) {
            listItem.classList.add('crossed_off');                  // Tachar las ya realizadas
            const checked = `<input type="checkbox" checked>`;      // variable del box con check
            listItem.innerHTML += checked;                          // incluirlo en las tareas completadas
        } else {
            const unchecked = '<input type="checkbox">';            // variable del box sin check
            listItem.innerHTML += unchecked;                        // incluirlo en las tareas por hacer
        }
    }
}
paintTasks();                                                       //ejecutar función paintTasks

// Darle dinamismo a la lista
const checkboxes = document.querySelectorAll('input');              // array con todos los checkbox

function handleStatus() {                                           // función para marcar tareas como 'completas' o 'incompletas'.
    const listItems = document.querySelectorAll('li');              // array con todos los <li>
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked === true) {
            tasks[i].completed = true;
            listItems[i].classList.add('crossed_off');
        } else {
            tasks[i].completed = false;
            listItems[i].classList.remove('crossed_off');
        }
    }
    let outcome = document.querySelector('.outcome');

    const tasksDone = document.querySelectorAll(':checked').length; // longitud del array de los checked boxes = nº de tareas hechas
    const tasksToDo = tasks.length - tasksDone;                     // nº de tareas por hacer
    outcome.innerHTML = `<p class="outcome">Número de tareas ➡ ${tasks.length}</p><p>- Completadas: ${tasksDone} ✔️ </p><p>- Por completar: ${tasksToDo} ⬜</p>`
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', handleStatus)          // listener en cada checkbox
}
handleStatus();

