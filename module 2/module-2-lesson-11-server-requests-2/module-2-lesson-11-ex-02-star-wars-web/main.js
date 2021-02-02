'use strict';

const button = document.querySelector('button');                
button.addEventListener('click', searchCharacter);              

function searchCharacter() {                                                    
    const character = document.querySelector('input').value;
    fetch(`https://swapi.dev/api/people/?search=${character}`)
        .then(response => response.json())
        .then(data => {
            const list = document.querySelector('ul');
            for (let i = 0; i < data.results.length; i++) {
                list.innerHTML = `<li>Character: ${data.results[i].name}. Gender: ${data.results[i].gender}</li>`;
            }
        });
}

// En la web debe aparecer una caja de texto donde escribimos el nombre de un personaje (o 
// parte del nombre) y un botón, al hacer click, nuestra web muestra debajo un listado 
// con los personajes que coinciden con la búsqueda indicando su nombre y género. 