# Exercise 1. Showing related info
Let's start from a simple web with a text input and an empty paragraph.  
Will we be able to make, with React and the state, that when we modify the input, the text appears in the paragraph?

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-05-state-in-react/module-3-lesson-05-ex-01-showing-related-info/src/capture.gif)

# App.js 
```javascript
import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
    this.handleInput = this.handleInput.bind(this);
  }
  handleInput(ev) {
    const inputValue = ev.target.value;
    this.setState({
      text: inputValue
    })
  }
  render() {
    return (
      <div>
        <input type="text" onChange={this.handleInput}></input>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default App;
```
