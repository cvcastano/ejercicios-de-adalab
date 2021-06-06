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
