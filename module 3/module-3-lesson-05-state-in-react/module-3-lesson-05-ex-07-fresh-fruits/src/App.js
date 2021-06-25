import React from 'react';
import './App.css';
import AddFruit from './AddFruit';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularFruits: ['kiwi', 'pinneaple', 'strawberry'],
      newFruit: ''
    };
  }

  render() {
    const renderArray = this.state.popularFruits.map((fruit) => {
      return (
        <li>
          {fruit}
        </li>
      )
    });

    return (
      <>
        <ul>
          {renderArray}
        </ul>
        <AddFruit/>
      </>
    );
  }
}

export default App;
