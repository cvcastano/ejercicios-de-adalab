'use strict';

const promos = [
  {
    promo: 'A',
    name: 'Ada',
    students: [
      {
        id: 'id-1',
        name: 'Sofía',
        age: 20
      },
      {
        id: 'id-2',
        name: 'María',
        age: 21
      },
      {
        id: 'id-3',
        name: 'Lucía',
        age: 22
      }
    ]
  },
  {
    promo: 'B',
    name: 'Borg',
    students: [
      {
        id: 'id-4',
        name: 'Julia',
        age: 23
      },
      {
        id: 'id-5',
        name: 'Tania',
        age: 24
      },
      {
        id: 'id-6',
        name: 'Alaia',
        age: 25
      }
    ]
  },
  {
    promo: 'C',
    name: 'Clarke',
    students: [
      {
        id: 'id-7',
        name: 'Lidia',
        age: 26
      },
      {
        id: 'id-8',
        name: 'Celia',
        age: 27
      },
      {
        id: 'id-9',
        name: 'Nadia',
        age: 28
      }
    ]
  }
];

const studentsWorkingInGoogle = ['id-2', 'id-3', 'id-5', 'id-9'];
// -------------------------------------------------------------------------

console.log(promos)
const notebook = document.querySelector('.js-result');

// 1. RENDER THE PROMOS NAMES IN A LIST
const list1 = `<ul class="ex1_ul">Exercise 1:</ul>`;
notebook.innerHTML += list1;
const listElement1 = notebook.querySelector('.ex1_ul');

for (let i = 0; i < promos.length; i++) {
  listElement1.innerHTML += `<li class="ex1_li">${promos[i].name}</li>`;
}

// 2. RENDER THE PROMOS LETTERS AND NAMES
const list2 = `<ul class="ex2_ul">Exercise 2:</ul>`;
notebook.innerHTML += list2;
const listElement2 = notebook.querySelector('.ex2_ul');

for (let i = 0; i < promos.length; i++) {
  listElement2.innerHTML += `<li>`
  listElement2.innerHTML += `<p>Name: ${promos[i].name}</p>`;
  listElement2.innerHTML += `<p>Promo: ${promos[i].promo}</p>`;
  listElement2.innerHTML += `</li>`;
}


