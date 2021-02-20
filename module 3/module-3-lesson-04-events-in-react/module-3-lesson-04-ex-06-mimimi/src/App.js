import React from 'react';
import MIMIMITranslator from './MIMIMITranslator';
import TextInput from './TextInput';


class App extends React.Component {
constructor(props) {
  super(props);
  this.text = '';
  this.translation = this.translation.bind(this);
}

translation(writtenText) {
  this.text = writtenText.replace(/[aeou]/gi, 'i').replace(/[qwrtypsdfghjklñzxcvbnm]/gi, 'm');
  this.forceUpdate();
}

  render() {

    return (
      <div className="page">
        <TextInput getInfo={this.translation}/>
        <MIMIMITranslator displayText={this.text}/>
      </div>
    );
  }
}

export default App;

