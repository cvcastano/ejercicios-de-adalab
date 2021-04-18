'use strict';
// Estamos en una clase de Adalab, y queremos conocer algunas estadísticas sobre las adalabers de esa clase. 
// Estos son sus datos:
// · María, 29 años, diseñadora
// · Lucía, 31 años, ingeniera química
// · Susana, 34 años, periodista
// · Rocío, 25 años, actriz
// · Inmaculada, 21 años, diseñadora
// En primer lugar, vamos a crear una estructura de datos en JavaScript para manejar estos datos. Usaremos arrays y objetos para crearla.
// Después, vamos a crear varias funciones en JavaScript que nos permitan calcular de forma automática estadísticas sobre las adalabers.
// Todas ellas toman como parámetro un listado de adalabers similar a nuestra estructura de datos anterior.
// - Una función countAdalabers que devuelve el número de adalabers en el listado.
// - Una función averageAge que devuelve la media de edad de listado.
// - Una función theYoungest que devuelve el nombre de la adalaber más joven.
// - Una función countDesigners que devuelve el número de adalabers que son diseñadoras.
// Según vayáis creando las funciones, debéis ir probando que funcionan invocándolas con nuestra estrucutra de datos como argumento. 
// Al final, modificad la estructura de datos para añadir, modificar o quitar adalabers. 
// Y probad que las funciones siguen devolviendo el valor correcto.

const adalabers = [
    {
        name: 'María',
        age: 29,
        job: 'diseñadora'
    },
    {
        name: 'Lucía',
        age: 31,
        job: 'ingeniera química'
    },
    {
        name: 'Susana',
        age: 34,
        job: 'periodista'
    },
    {
        name: 'Rocío',
        age: 25,
        job: 'actriz'
    },
    {
        name: 'Inmaculada',
        age: 21,
        job: 'diseñadora'
    },
];

function countAdalabers(array) {
    return console.log('El número de adalabers es', array.length)
};

function averageAge(array) {
    let acc = 0;
    for (let i = 0; i < array.length; i++) {
        acc += array[i].age
    }
    const ageAverage = acc / array.length;
    return console.log('La media de edad de las adalabers es', ageAverage, 'años')
};

function theYoungest(array) {
    let ages = [];
    for (let i = 0; i < array.length; i++) {
        ages[i] = array[i].age
    }
    const youngest = Math.min(...ages); // https://medium.com/@vladbezden/how-to-get-min-or-max-of-an-array-in-javascript-1c264ec6e1aa
    return console.log('La adalaber más joven tiene', youngest, 'años')
}

function countDesigners(array) {
    let designers = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i].job === 'diseñadora') {
            designers++;
        }
    }
    return console.log('El nº de adalabers que son diseñadoras es', designers);
}

countAdalabers(adalabers);
averageAge(adalabers);
theYoungest(adalabers);
countDesigners(adalabers)