'use strict';


const menu = document.querySelector('.nav');

function handleClick(event) {
    event.preventDefault();
}

menu.addEventListener('click', handleClick);