import {Badge} from "@material-ui/core";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartArrowDown } from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
    return(
        <Badge badgeContent ={4} color="secondary">
            
            <FontAwesomeIcon icon ={faCartArrowDown}/>
        </Badge>
    );
    
}

export default CartWidget;