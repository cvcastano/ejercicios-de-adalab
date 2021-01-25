'use strict';
// Partiendo del objeto adalaber1 del ejercicio anterior, añade un método (una función) showBio que muestra en la consola la frase 'Mi nombre es María, tengo 34 años y soy periodista', usando el nombre, edad y estudios que están almacenados en el objeto.

const adalaber1 = {
    name: 'Susana',
    age: 34,
    job: 'periodista',
    introduceYourself: function() {
        return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;
    }
};
console.log(adalaber1.introduceYourself());

// Hacemos lo mismo para adalaber2 definida en el ejercicio 1. ¿Hemos tenido que modificar mucho el método showBio? ¿Ves alguna ventaja respecto a cómo hacíamos lo mismo en el ejercicio 1? podemos usar las dos a la vez

const adalaber2 = {
    name: 'Rocío',
    age: 25,
    job: 'actriz',
    introduceYourself: function() {
        return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.job}`;
    }
};
console.log(adalaber2.introduceYourself());

// Nota: para que el ejercicio funcione bien debéis usar funciones normales, no arrow funtions. En siguientes sesiones veremos por qué cambia el this al usar arrow funtions.