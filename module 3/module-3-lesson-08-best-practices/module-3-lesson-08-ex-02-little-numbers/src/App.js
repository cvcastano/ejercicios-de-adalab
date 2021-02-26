import React from 'react';
import './App.css';

const numbers = [1, 4, 6, 8, 45, 89];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      numbersList: numbers.map(n => <li key={n}>{n}</li>)
    }
    this.filterNumberList = this.filterNumberList.bind(this);
  }

  filterNumberList = (ev) => {
    const target = ev.target;

    const number = parseInt(target.value);

    const filterNumbers = numbers.filter(n => n > number).map(n => {
      return <li key={n}>{n}</li>
    });

    this.setState({ numbersList: filterNumbers })
  }

  render() {
    return (
      <div>
        <form>
          <label>
            Enter a number:
    		    <input type="text" onChange={this.filterNumberList} />
          </label>
        </form>
        <ul>
          {this.state.numbersList}
        </ul>
      </div>
    );
  }
}

export default App;
