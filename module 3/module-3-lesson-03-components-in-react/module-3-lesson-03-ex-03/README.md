[Exercise 3](https://books.adalab.es/materiales-front-end-l/modulo-3-react/3_3_componentes_react#ejercicio-3)

# Exercise 3

![](https://github.com/cvcastano/ejercicios-de-adalab/blob/master/module%203/module-3-lesson-03-components-in-react/module-3-lesson-03-ex-03/src/render.png)

# Item.js
```javaScript
import React from 'react';

class Item extends React.Component {
    render() {
        return (
            <div className="list">
                <h3>{this.props.name}</h3>
                <p>{this.props.description}</p>
                <p>{this.props.quantity}</p>
                <p>{this.props.category}</p>
                <p>{this.props.price} €</p>
            </div>
        );
    }
}

Item.defaultProps = {
    description: 'No hay descripción.'
}
export default Item;
```
# ItemsList.js
```javaScript
import React from 'react';
import Item from './Item';

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

class ItemsList extends React.Component {
    render() {
        const JSXitems = items.map((item, index) => {
            return (
                <li className="list" key={index}>
                    <Item
                        name={`Nombre: ${item.name}`}
                        // description={`Descripción: ${item.description}`} 
                        quantity={`Cantidad: ${item.quantity}`}
                        category={`Categoría: ${item.category}`}
                        price= {`Precio: ${item.price}`}
                    />
                </li>
            )
        });
    return (
        <ul>
            {JSXitems}
        </ul>
    )
    }
}

export default ItemsList;
```

App.js
```javaScript
import React from 'react';
import ItemsList from './ItemsList';

class App extends React.Component {
  render() {
    return (
      <div className="page">
        <h1>Pintar listados con React:</h1>
        <ItemsList />
      </div>
    );
  }
}
export default App;

```


