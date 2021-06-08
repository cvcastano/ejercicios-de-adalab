# Exercise 5
### Advanced Sheep counter

On the SheepCounter component of the previous exercise, we add a new functionality.  
Besides showing the number of sheep, also show the image of a sheep.   
That is, if the counter is set to 6, in addition to displaying the number 6, we will see 6 sheep images.


![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-05-state-in-react/module-3-lesson-05-ex-05-advanced-sheep-counter/capture.gif)


# App.js 
```javascript
import React from 'react';

class SheepCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState((prevState) => {
      const newCounter = prevState.counter + 1;
      return {
        counter: newCounter,
      }
    })

    const img = document.createElement("img")
    img.setAttribute('src', "http://www.clker.com/cliparts/e/4/8/7/13280460782141411990Cartoon%20Sheep.svg.hi.png");
    document.getElementById('flock').appendChild(img);
  };

  render() {
    return (
      <>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleClick}>SheepCounter</button><br />
        <div id="flock"></div>
      </>
    );
  }
}
export default SheepCounter;
```
