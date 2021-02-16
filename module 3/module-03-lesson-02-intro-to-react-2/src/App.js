import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="card">
        <header className="header">
          <img src={logo} className="logo" alt="logo" />
          <div className="header-text">
            <h4 className="name">Carolina Castaño</h4>
            <h5 className="date">Tuesday, February 16th 2021</h5>
          </div>
        </header>
        <main className="main">
          <p className="main-text">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
            repellendus sapiente sint ut officia molestiae incidunt facere
            magnam minus, aliquid eos animi, soluta sequi harum? Odio non in
            ducimus aspernatur. Rerum repellendus sapiente sint ut officia molestiae incidunt facere magnam minus, aliquid eos animi, soluta sequi harum? Odio non in ducimus aspernatur...
          </p>
        </main>
        <footer className="footer">
          <a className="read-more">Read-more...</a>
          <span className="likes">37 <i className="fas fa-heart"></i></span>
        </footer>
      </div>
    </div>
  );
}

export default App;
