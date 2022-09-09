import React from 'react';
import Item from '../Item/Item';

const ItemList = ({items}) => {
    return (
        <>
        {
            items.map(item => <Item name={item.name}/>)
        }
        </>
    )
}

export default ItemList;
