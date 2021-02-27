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
  this.text = writtenText.replace(/[aeou]/g, 'i').replace(/[áéóú]/g, 'í').replace(/[AEOU]/g, 'I').replace(/[ÁÉÚÓ]/g, 'Í');
  this.forceUpdate();
}

  render() {

    return (
      <div className="page">
         <p className="texto">Hello</p>
      <p className="texto">Write anything here:</p>
        <TextInput getInfo={this.translation}/>
        <div className="display">
          <MIMIMITranslator displayText={this.text} />
        </div>
      </div>
    );
  }
}

export default App;

