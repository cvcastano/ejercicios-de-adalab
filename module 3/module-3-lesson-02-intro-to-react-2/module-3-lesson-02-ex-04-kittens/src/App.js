import React from "react";
import CatList from './CatList';
import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <CatList/>
      </div>
    );
  }
}

export default App;
