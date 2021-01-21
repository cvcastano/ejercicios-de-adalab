'use strict';
//asignar nombre a variable:
const name = 'Caro';
const welcomeMessage = `Hi, ${name}`;
const alertMessage = `Sorry, ${name}, but the name you entered is not registered`;

//si el nombre es Caro, saldrá un mensaje de bienvenida (Hi, Caro!)
// Si el nombre es diferente, saldrá (Sorry, but the name you entered is not registered)

if (name === 'Caro') {
    console.log(welcomeMessage);
}
else {
    console.log (alertMessage);
}