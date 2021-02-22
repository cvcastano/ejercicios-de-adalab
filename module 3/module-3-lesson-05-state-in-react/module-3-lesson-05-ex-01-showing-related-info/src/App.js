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
