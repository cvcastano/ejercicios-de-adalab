# Exercise 4
### Sheep counter

Based on some novel scientific studies from some famous university that says that counting sheep makes us so bored that we fall asleep, we have been commissioned to make a digital sheep counter.  
We will create a SheepCounter component that will display a large number and a button.  
The button will have a listener assigned to the click event that will increment the counter. We will update the value of the counter with setState(/* function */).

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-05-state-in-react/module-3-lesson-05-ex-04-sheep-counter/capture.gif)

# App.js 
```javascript
import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      const newCounter = prevState.counter + 1;
      return {
        counter: newCounter
      }
    })
  }
  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>SheepCounter</button>
      </>
    );
  }
}

export default SheepCounter;
```
