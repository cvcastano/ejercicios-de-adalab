[Exercise 01](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_9_react_router#ejercicio-1)

![]()

# index.js
```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';
import './stylesheets/index.scss';
import App from './components/App';

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById('root')
);
```

# App.js 
```javascript
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

```
# Home.js 
```javascript
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';


function Home () {
  return (
    <div id="Home" className="tab">
    <h2>Home</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus magni nobis magnam accusantium assumenda nisi omnis, velit porro harum corporis suscipit fuga in quia accusamus voluptate ipsum enim qui tenetur?</p>
  </div>
  );
}

export default Home;
```
# Pricing.js
```javascript
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';


function Pricing() {
  return (
    <div id="Pricing" className="tab">
    <h2>Pricing</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus magni nobis magnam accusantium assumenda nisi omnis, velit porro harum corporis suscipit fuga in quia accusamus voluptate ipsum enim qui tenetur?</p>
  </div>
  );
}

export default Pricing;
```

# About.js
```javascript
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../stylesheets/index.scss';


function About () {
  return (
    <div id="About" className="tab">
    <h2>About</h2>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus magni nobis magnam accusantium assumenda nisi omnis, velit porro harum corporis suscipit fuga in quia accusamus voluptate ipsum enim qui tenetur?</p>
  </div>
  );
}

export default About;
```

# index.scss
```scss
.tab {
  overflow: hidden;
  border: 1px solid #ccc;
  background-color: #f1f1f1;
  width: fit-content;
  margin: 0;
}

.link {
  text-decoration: none;
}
.tablink {
  list-style: none;
  background-color: inherit;
  float: left;
  // border: 1px solid #ccc;
  padding: 14px 16px;
  transition: 0.3s;
  font-size: 17px;
}

.tablink:hover {
  background-color: #ddd;
}

.tablink.active {
  background-color: #ccc;
}
```

