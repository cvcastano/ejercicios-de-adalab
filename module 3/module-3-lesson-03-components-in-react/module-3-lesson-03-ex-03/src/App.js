import React from 'react';
import ItemsList from './ItemsList';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>Pintar listados con React:</h1>
        <ItemsList />
      </div>
    );
  }
}

export default App;

