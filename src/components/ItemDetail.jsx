import ItemCount from "./ItemCount";
//import {DetailContainer, WrapperDetail, ImgContainer, ImageDetail, InfoContainer, Title, Desc, Price} from 'styled-components';

const ItemDetail = ({ item }) => {
    const onAdd = (quantity) => {
        alert("seleccionaste " + quantity + "items.");
    }

    return (
        <>{
            item.image
    ?
            <div>
                <div>
                    <div>
                    <div src={item.image[0]}/>
                    <div>
                        <h6>{item.name}</h6>
                        <div>{item.description}</div>
                        <div>$ {item.cost}</div>
                        <div>{item.stock} unidades en stock</div>
                    </div>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
            : <p>Cargando...</p>
        }
        </>
    )
}
export default ItemDetail;