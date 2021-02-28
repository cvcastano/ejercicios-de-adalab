import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import Home from './Home';
import Pricing from './Pricing';
import About from './About';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <header>
          <nav>
            <ul className="tab">
              <li className="tablink">
                <Link className="link" to="/">Home</Link>
              </li>
              <li className="tablink">
                <Link className="link" to="/pricing">Pricing</Link>
              </li>
              <li className="tablink">
                <Link className="link" to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pricing" component={Pricing} />
          <Route path="/about" component={About} />
        </Switch>
      </>
    );
  }
}

export default App;
