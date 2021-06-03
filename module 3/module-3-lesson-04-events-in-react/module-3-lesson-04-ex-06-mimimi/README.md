# MIMIMI Translator
Hasn't it ever happened to you that you said something and they made fun of you with a MIMIMI?
- "At the end of that line you're missing a semicolon."
- "Il finil di isi linii ti filti in pinti y cimi." 
 
Well, it's time to fight back and create our own MIMIMI translator with React.

Let's start from a simple form with a textarea where we write a sentence. As we type, we will get in a paragraph the result of the MIMIMI translation. It is important that both the form and the resulting paragraph are each in their own independent component. The form component, for example TextInput, is simply in charge of collecting the user's changes and sending them to the mother App component, which saves them in an attribute and forces the rerendering. The MIMIMITranslator component collects the text passed to it by props, translates it and displays it in a paragraph.

HINT: to perform the translation just look for a regular expression (RegExp) and the strings' replace method. If you search for "javascript regex replace vowels" in Google it will be easy to find.

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-04-events-in-react/module-3-lesson-04-ex-06-mimimi/src/translatorCapture.gif)

# App.js
```javaScript
class App extends React.Component {
  constructor(props) {
    super(props);
    this.translated = '';
    this.translation = this.translation.bind(this);
  }

  translation(inputValue) {
    console.log(inputValue)
    this.translated = inputValue.replace(/[aeou]/g, 'i').replace(/[áéóú]/g, 'í').replace(/[AEOU]/g, 'I').replace(/[ÁÉÚÓ]/g, 'Í');
    this.forceUpdate();
  }

  render() {
    return (
      <div className="page">
         <p className="texto">Hello</p>
      <p className="texto">Write anything here:</p>
        <TextInput getValue={this.translation} />
        <div className="display">
          <MIMIMITranslator displayTranslated={this.translated}/>
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
            <p>{this.props.displayTranslated}</p>
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
this.handleInput = this.handleInput.bind(this);
    };
  
    handleInput (ev) {
        const inputValue = ev.target.value; 
        this.props.getValue(inputValue);
    }

    render() {
        return(
            <form>
                <textarea cols="30" rows="10" onChange={this.handleInput}></textarea>
            </form>
        )
    }
}

export default TextInput;
```



