# Exercise 3
Partiendo del código del ejercicio 1, vamos a hacer que nuestro componente ocupe toda la pantalla disponible, y tenga el textarea en el centro. Vamos a hacer que al detectar la palabra cebolla en el texto del textarea, en vez de mostrar un alert mostrando nuestro odio, pongamos el fondo del componente de color rojo. Al volver a un texto sin cebolla, el fondo vuelve a ser blanco.
1. Guardaremos la información de si estamos odiando o no en un atributo de la clase. Para ello en el constructor pondremos this.isHating = false.
2. En la función que maneja el evento change del textarea modificaremos el atributo isHating y usaremos el método this.forceUpdate() para forzar el repintado.
- PISTA: recuerda que para que el this funcione correctamente en nuestra función de handle debemos hacer el bind adecuado en el constructor
- BONUS: ¿Podrías hacer que nuestro odio aparezca tanto si 'cebolla' tiene mayúsculas o minúsculas?

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-04-events-in-react/module-3-lesson-04-ex-03-my-hatred-in-red/src/capture.gif)

OnionHater.js
```javaScript
import React from 'react';



class OnionHater extends React.Component {

  constructor(props) {
    super(props);
    this.handleInput = this.handleInput.bind(this);
    this.isHating = false
  }

  handleInput(ev){
  const page = document.querySelector('.page');

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



