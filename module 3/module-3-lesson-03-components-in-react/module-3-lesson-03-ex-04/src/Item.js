import React from 'react';
import PropTypes from 'prop-types';

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

Item.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
}

export default Item;