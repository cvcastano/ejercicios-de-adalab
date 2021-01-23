'use strict';
const firstDogImage = 'https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg';
const firstDogName = 'Dina';

const secondDogImage = 'https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg';
const secondDogName = 'Luna';

const thirdDogImage = 'https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg';
const thirdDogName = 'Lana';

const ul = document.querySelector('ul');
ul.innerHTML = `<li><h2>${firstDogName}</h2><img src="${firstDogImage}"/></li>`;
ul.innerHTML += `<li><h2>${secondDogName}</h2><img src="${secondDogImage}"/></li>`;
ul.innerHTML += `<li><h2>${thirdDogName}</h2><img src="${thirdDogImage}"/></li>`;