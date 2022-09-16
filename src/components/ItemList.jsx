import React from 'react';
import Item from './Item';
import ProductsContainer from "styled-components";

const ItemList = ({items}) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} title={item.name}/>)
            : <p>Cargando...</p>
        }
        </ProductsContainer>
    )
}

export default ItemList;
