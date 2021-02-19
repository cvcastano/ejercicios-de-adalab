[Exercise 1](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_4_eventos_react#ejercicio-1)

# Exercise 1

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-04-events-in-react/module-3-lesson-04-ex-01/src/ex%2001.png)

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



