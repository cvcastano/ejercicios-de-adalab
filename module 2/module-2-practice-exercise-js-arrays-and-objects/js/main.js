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
{
  // const notebook = document.querySelector('.js-result');

  // // 1. RENDER THE PROMOS NAMES IN A LIST
  // const list1 = `<ul class="ex1_ul"><h3>Exercise 1:</h3></ul>`;
  // notebook.innerHTML += list1;
  // const listElement1 = notebook.querySelector('.ex1_ul');

  // for (let i = 0; i < promos.length; i++) {
  //   listElement1.innerHTML += `<li class="ex1_li">${promos[i].name}</li>`;
  // }

  // // 2. RENDER THE PROMOS LETTERS AND NAMES
  // const list2 = `<ul class="ex2_ul"><h3>Exercise 2:</h3></ul>`;
  // notebook.innerHTML += list2;
  // const listElement2 = notebook.querySelector('.ex2_ul');

  // for (let i = 0; i < promos.length; i++) {
  //   listElement2.innerHTML += `<li>
  //   <p>Name: ${promos[i].name}</p>
  //   <p>Promo: ${promos[i].promo}</p>
  //   </li>`;
  // };

  // // 3. RENDER THE PROMOS LETTERS AND NAMES AND THE NUMBER OF STUDENTS
  // const list3 = `<ul class="ex3_ul"><h3>Exercise 3:</h3></ul>`;
  // notebook.innerHTML += list3;
  // const listElement3 = notebook.querySelector('.ex3_ul');

  // for (let i = 0; i < promos.length; i++) {
  //   listElement3.innerHTML += `<li>
  //   <p>Name: ${promos[i].name}</p>
  //   <p>Promo: ${promos[i].promo}</p>
  //   <p>Number of students: ${promos[i].students.length}</p>
  //   </li>`;
  // };
}
{
  // 4. RENDER THE PROMOS NAMES AND THE STUDENTS NAMES AND AGE
  // const result = document.querySelector('.js-result');
  // let htmlCode = '';
  // htmlCode += '<ul>';
  // for (let i = 0; i < promos.length; i++) {
  //   htmlCode += '<li>';
  //   htmlCode += `<p>Nombre: ${promos[i].name}</p>`;
  //   htmlCode += '<ul>';
  //   let students = promos[i].students;
  //   for (const student of students) {
  //     htmlCode += `<li>${student.name}, ${student.age}</li>`;
  //   }
  //   htmlCode += '</ul>';
  //   htmlCode += '</li>';
  //   result.innerHTML = htmlCode;
  // }
  // htmlCode += '</ul>';
}
{
  // // 5. RENDER THE PROMOS NAMES AND THE STUDENTS NAMES, AGES AND IDs

  // const result = document.querySelector('.js-result');
  // let htmlCode = '';
  // htmlCode += '<ul>';
  // for (const promo of promos) {
  //   htmlCode += '<li>';
  //   htmlCode += `<p>Name: ${promo.name}</p>`;
  //   htmlCode += '<ul>';
  //   const students = promo.students
  //   for (const student of students) {
  //     htmlCode += `<li id="${student.id}">${student.name}, ${student.age}</li>`;
  //   }
  //   htmlCode += '</ul>';
  //   htmlCode += '</li>';
  // }

  // htmlCode += '</ul>';

  // result.innerHTML = htmlCode;
}
{
  // // 6. RENDER THE PROMOS NAMES AND THE STUDENTS NAMES, AGES AND IDs OF ONLY THE STUDENTS WHOSE AGE IS AN EVEN NUMBER.
  // const result = document.querySelector('.js-result');
  // let htmlCode = '<ul>';
  // for (const promo of promos) {
  //   htmlCode += '<li>';
  //   htmlCode += `<p>Name: ${promo.name}</p>`
  //   htmlCode += '<ul>';
  //   const students = promo.students;
  //   for (const student of students) {
  //     if (student.age % 2 === 0) {
  //       htmlCode += `<li id="${student.id}"> ${student.name}, ${student.age}</li>`;
  //     }
  //   }
  //   htmlCode += '</ul>';
  //   htmlCode += '</li>';
  // }
  // htmlCode += '</ul>';

  // result.innerHTML = htmlCode;
}

// 7. RENDER THE PROMOS NAMES AND THE STUDENTS NAMES, AGES AND IDs OF THE STUDENTS THAT WORK IN GOOGLE.
const result = document.querySelector('.js-result');
let htmlCode = '<ul>';
for (const promo of promos) {
  htmlCode += '<li>';
  htmlCode += `<p>Name: ${promo.name}</p>`;
  htmlCode += '<ul>';
  const students = promo.students;

  for (const student of students) {
    // console.log(studentsWorkingInGoogle)
    if (studentsWorkingInGoogle.includes(student.id)) {
      htmlCode += `<li id=${student.id}>${student.name}, ${student.age}`;
    }
  }
  htmlCode += '</ul>';
  htmlCode += '</li>';
}

htmlCode += '</ul>';
result.innerHTML = htmlCode;