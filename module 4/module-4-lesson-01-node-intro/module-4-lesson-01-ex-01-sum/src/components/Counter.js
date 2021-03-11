import React, { useState, useEffect } from 'react';
import '../stylesheets/index.scss';


const Counter = () => {
  console.log('I am rendering');
  // usamos el hook useState para crear counter en el estado del componente
  const [counter, setCounter] = useState(0);
  // usamos el hook useEffect para gestionar los ciclos de vida del componente
  useEffect(() => {
    console.log('I am mounting');
    // las 3 siguientes líneas se ejecutan al montar y renderizar el componente
    let intervalId = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);
    // la función retornada a continuación se ejecuta al desmontar y renderizar el componente
    return () => {
      console.log('I am dismounting');
      clearInterval(intervalId);
    };
  });
  return <div>Counter: {counter}</div>;
};

export default Counter;