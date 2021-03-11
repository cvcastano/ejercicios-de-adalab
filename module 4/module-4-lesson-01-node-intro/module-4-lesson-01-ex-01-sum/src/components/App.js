import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';
import Counter from './Counter';
import Relax from './Relax';

class App extends React.Component {

  render() {
    return (
      <div>
        <nav>
          <ul className="tab">
            <li className="tablink">
              <Link className="link" to="/counter">Counter</Link>
            </li>
            <li className="tablink">
              <Link className="link" to="/relax">Relax</Link>
            </li>
          </ul>
        </nav>
        <Switch>
        <Route path="/counter" render={() => <Counter />} />
        <Route path="/relax" render={() => <Relax />} />
        </Switch>
      </div>

    );
  }
}

export default App;
