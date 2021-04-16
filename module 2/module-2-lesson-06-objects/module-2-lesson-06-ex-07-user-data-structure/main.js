'use strict';

const userData = {};

const job = 'developer';

userData.firstName = 'Pepita';
userData.lastName = 'Castaño';
userData['age'] = 42;
userData.job = job;

console.log(userData.firstName);
console.log(userData['age'] + 1);
console.log(userData['job']);

