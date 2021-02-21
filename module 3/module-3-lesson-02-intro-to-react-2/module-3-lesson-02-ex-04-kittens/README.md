[Exercise 4](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_2_intro_react_2#ejercicio-4)

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-02-intro-to-react-2/module-3-lesson-02-ex-04-kittens/src/render.png)

# RandomCat.js
```javaScript
import React from "react";

function RandomCat(props) {
  return (
    <li>
      <a href="http://placekitten.com"></a>
      <img src={`http://placekitten.com/${props.width || 400}/${props.height || 200}`} alt="Random cat"/>
    </li>
  );
}
export default RandomCat;
```
# CatList.js 
```javascript
import React from "react";
import RandomCat from "./RandomCat";

class CatList extends React.Component {
  render() {
    return (
      <section className="section-cats">
        <h1>All Cats Are Beautiful</h1>
        <ul className="section-cats_list">
            <RandomCat width='200' height='200' />
            <RandomCat width='200' height='400' />
            <RandomCat />
        </ul>
      </section>
    );
  }
}
export default CatList;

```
# App.js 
```javascript
import React from "react";
import CatList from './CatList';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <CatList/>
      </div>
    );
  }
}
export default App;

```
# index.js
```javaScript
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```
# App.scss
```scss
* {
  box-sizing: border-box;
  margin: 0;
}
.App {
  background-color: #e4e4e4;
  padding: 20px;
}
.section-cats_list {
list-style: none;
}

li {
  background-color: white;
  box-shadow: 1px 1px 10px rgb(119, 113, 113);
  padding: 2px;
  width: fit-content;
  height: fit-content;
  margin: 10px;
}
```
