import React from 'react';
import HalfPage from './HalfPage';


class App extends React.Component {
  render() {

    return (
      <div>
        <HalfPage title="I am a title">
          <h1>{this.props.title}</h1>
          <p>I am on the left</p>
        </HalfPage>
        <HalfPage title="I am a title">
          <h2>{this.props.title}</h2>
          <p>I am on the right</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;

