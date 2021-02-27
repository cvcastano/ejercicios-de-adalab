[Exercise 6](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_4_eventos_react#ejercicio-6)


![]()

# App.js
```javaScript
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
```
# MIMIMITranslator.js
```javaScript
  
import React from 'react';

class MIMIMITranslator extends React.Component {

    render() {
        return(
            <p>{this.props.displayText}</p>
        );
    }
}


export default MIMIMITranslator;
```

# TextInput.js
```javaScript
  
import React from 'react';

class TextInput extends React.Component {

constructor(props) {
    super(props);
    this.handleText = this.handleText.bind(this);
}
    handleText(ev) {
        const inputValue = ev.target.value;
        this.props.getInfo(inputValue);
    }

    render() {
        return(
            <form>
                <textarea cols="30" rows="10" onChange={this.handleText}></textarea>
            </form>
        )
    }
}

export default TextInput;
```



