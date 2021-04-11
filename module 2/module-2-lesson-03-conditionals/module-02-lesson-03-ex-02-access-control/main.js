'use strict';
//asignar nombre a variable:
let name = 'Pepita';

//si el nombre es el tuyo o el de tu compañera mostraremos el mensaje "Bienvenida, (tu nombre aquí)". 

if (name === 'Valle' || name === 'Caro') {
    console.log('Bienvenida, ' + name)

//Si el nombre es diferente al tuyo deberá mostrar "Lo siento pero el usuario que has introducido no está registrado".
} else {
    console.log('Lo siento pero el nombre introducido no es correcto');
}
