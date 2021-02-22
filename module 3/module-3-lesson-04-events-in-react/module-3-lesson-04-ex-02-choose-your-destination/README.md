[Exercise 2](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_4_eventos_react#ejercicio-2)

# Exercise 2

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-04-events-in-react/module-3-lesson-04-ex-02/src/ex02.png)

Destination.js
```javaScript
import React from 'react';

const selectHandler = ev => {
        alert (`Your destination is: ${ev.target.value}`);
    }


class Destination extends React.Component {
  render() {

    return (
        <select name="destination" id="destination" onChange={selectHandler}>
          <option value="Buenos Aires">Buenos Aires</option>
          <option value="Sydney">Sydney</option>
          <option value="Praga">Praga</option>
          <option value="Boston">Boston</option>
          <option value="Tokyo">Tokyo</option>
        </select>
    );
  }
}

export default Destination;
```



