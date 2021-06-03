import React from 'react';
import Item from './Item';

class ItemList extends React.Component {

    render() {

        const item = this.props.items.map((item, i) => {
            return (

                <li key={i} className="list">
                    <Item item={item} />
                </li>
            )
        });

        return (
            <>
                {item}
            </>
        )
    };

}

export default ItemList;