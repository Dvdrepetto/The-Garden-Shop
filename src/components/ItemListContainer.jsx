import ItemCount from "./itemCount/ItemCount";
import React, {useEffect, useState} from "react";
import customFetch from '../utils/customFetch'
import ItemList from "./Item/ItemList";





const ItemListContainer = ({ greeting }) => {
  const[datos,setDatos] = useState([]);

  useEffect(() => {
      customFetch()
        .then(result => setDatos(result))
        .catch(err => console.log(err))
  }, []);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} unidades`);
  }

  return (
    <>
      <div>{greeting}</div>
      <ItemList items ={datos}/>
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
    </>
  );
};

export default ItemListContainer;
