# Exercise 2
### The blinking square
Let's create a page with a fixed size square (for example a div) with a blue background color.  
We are going to make it so that when we click on the square, its background color changes to red. If we click on it again, it changes back to blue, and so on.  
We will implement this blinking square using the component state (we can store the color as a string or a boolean).
- HINT: When listening to the click event to check what color the square previously was, we will use the previous version of the state that takes the prevState parameter of the callback function that we passed to setState


![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-05-state-in-react/module-3-lesson-05-ex-02-blinking-square/src/capture.gif)

# App.js 
```javascript
import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      color: 'blue'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => {
      let nextColor;
      if (state.color === 'blue') {
        nextColor = 'red';
      } else {
        nextColor = 'blue';
      }
      return {
        color: nextColor
      }
    })
  }

  render() {
    return (
      <div className={`square ${this.state.color}`} onClick={this.handleClick}>

      </div>
    );
  }
}
export default App;
```
