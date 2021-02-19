[Exercise 3](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_4_eventos_react#ejercicio-3)

# Exercise 3
![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-04-events-in-react/module-3-lesson-04-ex-03-my-hatred-in-red/src/cucumber.png)
![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-04-events-in-react/module-3-lesson-04-ex-03-my-hatred-in-red/src/onion.png)

OnionHater.js
```javaScript
import React from 'react';

const page = document.querySelector('.page');

class OnionHater extends React.Component {

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.isHating = false
  }

  handleInput(ev){
    const value = ev.target.value.toLowerCase();
    
    // console.log(value);

    if (value.includes('onion')) {
      this.isHating = true;
      page.classList.add('hatred');
    }
    else {
      this.isHating = false;
      page.classList.remove('hatred');
    }
  }
  
  render() {

    return (
      <textarea cols="30" rows="10" className="textarea" onKeyUp={this.handleInput}></textarea>
    );
  }
}

export default OnionHater;
```



