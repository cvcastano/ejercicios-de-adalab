import React from 'react';
import ItemList from './ItemList';

class App extends React.Component {

  render() {

    const items = [
      {
        name: 'Cereales con chocolate',
        description: 'Cereales rellenos de chocolate',
        quantity: 2,
        category: 'Cereales',
        price: 5
      },
      {
        name: 'Hamburguesa con queso',
        description: 'Hamburguesa rica y saludable',
        quantity: 1,
        category: 'Fast-food',
        price: 15
      },
      {
        name: 'Agua mineral',
        description: 'Agua de un charco del Himalaya',
        quantity: 2,
        category: 'Bebida',
        price: 5
      }
    ];

    return (
      <div className="page">
        <h1> Filtering lists with React:</h1>
        <ul>
          <ItemList items={items} />
        </ul>
      </div>
    );
  }
}

export default App;