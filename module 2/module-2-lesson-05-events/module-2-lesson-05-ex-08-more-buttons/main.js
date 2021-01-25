'use strict';
'use strict';
const button1 = document.querySelector('.button1');
const button2 = document.querySelector('.button2');
function addClass () {
const clickedButton = event.currentTarget;
clickedButton.classList.toggle('custom');
}
button1.addEventListener ('click', addClass);
button2.addEventListener ('click', addClass);


// Partiendo del ejercicio anterior vamos a añadir un nuevo botón 
// a nuestra página. Tenemos que ponerle un listener y a reutilizar 
// el handler que ya teníamos. Es decir, los dos botones deben tener 
// el mismo handler.
// Cuando la usuaria pulse un botón el cambio de clase sucederá 
// solamente sobre el botón pulsado.