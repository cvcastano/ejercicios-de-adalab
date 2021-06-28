import React from 'react';
import './App.css';
import AddFruit from './AddFruit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.addFruit = this.addFruit.bind(this);

    this.state = {
      popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
      newFruit: ''
    };
  }
  handleInput(ev) {
    const newFruit = ev.target.value;

    this.setState(prevState => {
      return {
        ...prevState,
        newFruit: newFruit,
      }
    });
  }

  addFruit(ev) {
    ev.preventDefault();
    this.setState(prevState => {
      return {
        popularFruits: prevState.popularFruits.concat(prevState.newFruit),
        newFruit: '',
      }
    })
  }

  render() {
    const renderArray = this.state.popularFruits.map((fruit, i) => {
      return (
        <li key={i}>
          {fruit}
        </li>
      )
    });

    return (
      <>
        <ul>
          {renderArray}
        </ul>
        <AddFruit
          addFruit={this.addFruit}
          handleInput={this.handleInput}

        />
      </>
    );
  }
}

export default App;
