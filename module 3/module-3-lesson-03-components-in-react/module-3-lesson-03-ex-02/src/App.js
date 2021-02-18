import React from 'react';
import HalfPage from './HalfPage';


class App extends React.Component {
  render() {

    return (
      <div>
        <HalfPage title="I am a title">
          <p>I am on the left</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;

