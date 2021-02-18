import React from 'react';

const students = [
  {
    promo: 'A',
    name: 'Sofía',
    age: 20
  },
  {
    promo: 'B',
    name: 'María',
    age: 21
  },
  {
    promo: 'A',
    name: 'Lucía',
    age: 22
  }
];
const promoAstudents = students.filter(student => student.promo === 'A');

class App extends React.Component {
  render() {
   
    return (
      <div className="page">
        <h1>Filtering lists with React:</h1>
        {promoAstudents.map((promoAstudent, index) => {
          return (
            <li className="list" key={index}>
              <h2>Name: {promoAstudent.name}</h2>
              <p>Age: {promoAstudent.age}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;

