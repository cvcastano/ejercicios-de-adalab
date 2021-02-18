# Exercise 1.1

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

# Exercise 1.2
![]()

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
# Exercise 1.3
![]()

App.js
```javaScript

```

index.js
```javaScript

```
