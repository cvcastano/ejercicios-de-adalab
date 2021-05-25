import { render, screen } from '@testing-library/react';
import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

// Exercise 1
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Aprendiendo react/i);
  expect(linkElement).toBeInTheDocument();
});

/*
Exercise 1
Supongamos que ahora nos viene la diseñadora y nos pide que en nuestra página no ponga Learn React, sino que ponga Aprendiendo React.
Edita App.js para que en la página ponga Aprendiendo React.
Arranca el proyecto con npm start.
Arranca los tests en otra terminal con npm run test.
Verás que el test está fallando. Hemos roto los tests, porque nuestra aplicación ha cambiado. Cada vez que hacemos un cambio en la aplicación debemos volver a ejecutar los tests para ver si fallan y si fallan hay que arreglarlos. ¿Qué debes cambiar en App.test.js para que el test vuelva a funcionar.
Nota: normalmente hacemos testing con dos terminales abiertas, una para tener el proyecto arrancado y otra para tener los tests corriendo. Y siempre miramos la terminal para estar atentas a ver si los tests se rompen.
Nota: los errores que aparecen en la terminal nos dan mucha información. Lo lógico es leer detenidamente dicha información pasar qué está fallando, en qué línea, en qué fichero...
*/