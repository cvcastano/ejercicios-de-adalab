'use strict';
const body  = document.querySelector('body');

function changeColor () {
    if (event.keyCode === 82){
body.classList.add ('red');
body.classList.remove ('purple');

    }
    else if (event.keyCode === 77) {
        body.classList.add ('purple');
        body.classList.remove ('red');
        
    }
}
document.addEventListener('keydown', changeColor);






// Tenemos que crear una página vacía. 
// Al pulsar la tecla 'r' su color de fondo 
// cambia a rojo y al pulsar la 'm' a morado. 
// Vamos a escuchar un evento de teclado 
// directamente sobre el elemento document.