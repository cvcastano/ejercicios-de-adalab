'use strict';
const div = document.querySelector('.color'); 


function changeColor() {

    if (window.scrollY < 250) {
        div.classList.add('color');
        div.classList.remove('color2');
    } else {
        div.classList.add('color2');
        div.classList.remove('color');
    }

}

window.addEventListener('scroll', changeColor);





// Cambiar el color de fondo de la página cuando se haga scroll. Para ello tenemos que:
// Añadir un div con suficiente texto dentro para que haya scroll. Podéis usar el siguiente comando de emmet para hacerlo p*50>lorem.
// Preparar classes para cambiar el color de fondo del div.
// Escuchar el evento scroll sobre la ventana window.
// Cuando la posición del scroll vertical supere 250 píxeles poner un color de fondo, cuando sea inferior a 250 píxeles poner otro.
// Nota: window.scrollY nos devuelve la posición del scroll vertical.