# Exercise 1.1

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-03-components-in-react/module-3-lesson-03-ex-01/src/list.png)

App.js

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

# Exercise 1.2
![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-03-components-in-react/module-3-lesson-03-ex-01/src/list2.png)

App.js

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
```

index.js

```javaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
```
