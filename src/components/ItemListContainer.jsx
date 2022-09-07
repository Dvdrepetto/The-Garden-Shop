import ItemCount from "./itemCount/ItemCount";
import React from "react";

const ItemListContainer = ({ greeting }) => {
  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  };

  return (
    <>
      <div>{greeting}</div>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
