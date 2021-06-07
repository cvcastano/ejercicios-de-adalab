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
