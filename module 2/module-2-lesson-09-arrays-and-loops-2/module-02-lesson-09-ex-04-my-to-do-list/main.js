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
body.innerHTML += '<ul></ul>';                          //crear una lista
const listElement = document.querySelector('ul');       //seleccionar la lista
//listElement.innerHTML += `<li>${tasks[0].name}</li>`; //pintar 1ª tarea en un <li>
                                                        //NO HE SABIDO TACHAR SÓLO ESA TAREA
function paintTasks () {     
for (let i = 0; i< tasks.length; i++) {
listElement.innerHTML += `<li>${tasks[i].name}</li>`;   //pintar todas las tareas
let lastListItem = listElement.querySelector('li:last-child'); //crear variable del último <li>     
                                                            //(al ir x orden, los recorrerá todos)
console.log (lastListItem);                             //POR QUÉ NO MUESTRA EL ÚLTIMO??
if (tasks[i].completed === true) { 
     lastListItem.classList.add ('cross_off');           // Tachar las ya realizadas
 }
 listElement.innerHTML += '<input type="checkbox"></input>'; //add inputs a los <li>
}
}
paintTasks ();                                          //ejecutar función paintTasks
// listElement.classList.add('cross_off');              //tachar todas las tareas   



 
// Permitir marcar una tarea como 'completa' o 'incompleta'.