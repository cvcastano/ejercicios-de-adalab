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