import React from 'react';
import HalfPage from './HalfPage';


class App extends React.Component {
  render() {

    return (
      <div>
        <HalfPage title="I am developing a component.">
          <p>Such component must measure half the viewport width.</p>
          <p>This component must receive JSX code from its parent component.</p>
        </HalfPage>
      </div>
    );
  }
}

export default App;

