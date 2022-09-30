import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';


const Item = ({info}) => {
    const nombre = useContext(CartContext);
    return (
        <Link to={`/detalle/${info.id}`} className="Film">
            <img src={info.image}></img>
            <p>{info.title}</p>
        </Link>
    )
}

export default Item