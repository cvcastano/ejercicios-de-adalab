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
