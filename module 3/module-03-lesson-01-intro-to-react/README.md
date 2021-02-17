# Here's the result of all three exercises on lesson 01

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-03-lesson-01-intro-to-react/src/render.jpg)

# App.js 
```
import React, { Component } from "react";
import logo from './logo.svg';
import './App.scss';

class App extends Component {
  render() {
    const header = <header className="header">
      <img src={logo} className="logo" alt="logo" />
      <div className="header-text">
        <h4 className="name">Carolina Castaño</h4>
        <h5 className="date">Tuesday, February 16th 2021</h5>
      </div>
    </header>;
    const main = <main className="main">
      <p className="main-text">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
        repellendus sapiente sint ut officia molestiae incidunt facere
        magnam minus, aliquid eos animi, soluta sequi harum? Odio non in
        ducimus aspernatur. Rerum repellendus sapiente sint ut officia molestiae incidunt facere magnam minus, aliquid eos animi, soluta sequi harum? Odio non in ducimus aspernatur...
  </p>
    </main>;
    const footer = (<footer className="footer">
      <a className="read-more">Read-more...</a>
      <span className="likes">37 <i className="fas fa-heart"></i></span>
    </footer>);
    const card = (<div className="card">
      {header} {main} {footer}
    </div>);
    const appRoot = (<div className="App">{card}</div>);
    return appRoot;
  }
}

export default App;
```
# index.js
```
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
```
# app.scss
```
* {
  box-sizing: border-box;
  margin: 0;
}
.App {
  background-color: #e4e4e4;
  padding: 20px;
}
.card {
  background-color: white;
  box-shadow: 1px 1px 10px rgb(119, 113, 113);
  padding: 20px;
  width: 300px;
}
.header {
  display: flex;
}
.logo {
  height: 40px;
  pointer-events: none;
}
@media (prefers-reduced-motion: no-preference) {
  .logo {
    animation: logo-spin infinite 20s linear;
  }
}
@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
.header-text {
  height: 40px;
  padding-left: 10px;
}
.name {
  font-weight: 600;
}
.date {
  font-weight: 400;
}
.main {
  padding: 10px 0 20px;
}
.footer {
  display: flex;
  justify-content: space-between;
}
.read-more {
  color: grey;
}
.fa-heart {
  color: red;
}
```
