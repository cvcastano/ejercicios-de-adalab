# Exercise 1

```javaScript
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

class App extends React.Component {
  render() {
   
    return (
      <div className="page">
        <h1>Pintar listados con React:</h1>
        {students.map((student, index) => {
          return (
            <li className="list" key={index}>
              <h2>Name: {student.name}</h2>
              <p>Age: {student.age}</p>
            </li>
          );
        })}
      </div>
    );
  }
}

export default App;
```
