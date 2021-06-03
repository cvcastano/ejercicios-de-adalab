import React from 'react';

class Item extends React.Component {

    render() {

        return (
            <>
              <h2>Name: {this.props.item.name}</h2>
              <p> Description: {this.props.item.description}</p>
              <p> Quantity: {this.props.item.quantity}</p>
              <p> Category: {this.props.item.category}</p>
              <p> Price: {this.props.item.price}</p>
            </>
        );
    }
}

export default Item;