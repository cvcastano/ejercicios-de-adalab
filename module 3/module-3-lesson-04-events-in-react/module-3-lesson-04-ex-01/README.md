[Exercise 1](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_4_eventos_react#ejercicio-1)

# Exercise 1

![]()

App.js
```javaScript
import React from 'react';

const textareaHandler = ev => {
    const value = ev.target.value;
    if (value.includes('onion')) {
        alert ('I hate onions');
    }
}

class OnionHater extends React.Component {
  render() {

    return (
        <textarea name="" id="" cols="30" rows="10" onKeyUp={textareaHandler}>Write on me:</textarea>
    );
  }
}

export default OnionHater;
```



