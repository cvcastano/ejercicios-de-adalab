[Exercise 2](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_3_componentes_react#ejercicio-2)

# Exercise 2.1

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-03-components-in-react/module-3-lesson-03-ex-02/src/ex2-1.png)

App.js
```javaScript
import React from 'react';

class HalfPage extends React.Component {
    render() {

        return (
            <div className="half-page">
                <h2>{this.props.title}</h2>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HalfPage;
```
HalfPage.js
```javaScript
import React from 'react';

class HalfPage extends React.Component {
    render() {

        return (
            <div className="half-page">
                <h2>{this.props.title}</h2>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HalfPage;
```

# Exercise 2.2
![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-03-components-in-react/module-3-lesson-03-ex-02/src/ex2-2.png)

App.js
```javaScript
import React from 'react';
import HalfPage from './HalfPage';


class App extends React.Component {
  render() {

    return (
      <div>
        <HalfPage title="I am a title">
          <p>I am on the left</p>
        </HalfPage>
      </div>
    );
  }
}
export default App;
```
HalfPage.js
```javaScript
import React from 'react';

class HalfPage extends React.Component {
    render() {

        return (
            <div className="half-page">
                <h1>{this.props.title}</h1>
                <div>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default HalfPage;
```
# Exercise 2.3
![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-03-components-in-react/module-3-lesson-03-ex-02/src/ex2-3.png)

App.js
```javaScript
import React from 'react';
import HalfPage from './HalfPage';

class App extends React.Component {
  render() {

    return (
      <div>
        <HalfPage title="I am a title">
          <h1>{this.props.title}</h1>
          <p>I am on the left</p>
        </HalfPage>
        <HalfPage title="I am a title">
          <h2>{this.props.title}</h2>
          <p>I am on the right</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;
```
HalfPage.js
```javaScript
import React from 'react';

class HalfPage extends React.Component {
    render() {

        return (
            <div className="half-page">
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        );
    }
}

export default HalfPage;
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
index.css
```css
.half-page {
  display: inline-block;
  width: 45vw;
  background-color: rgb(66, 9, 119);
  color: white;
  margin: 5px;
  padding: 5px;
  border: solid 1px yellow;
}

.list {
  list-style: none;
}
```

