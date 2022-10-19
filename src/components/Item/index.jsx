import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import {CartContext} from '../../context/CartContext';
import "../Item/Item.css"


const Item = ({info}) => {
    const nombre = useContext(CartContext);
    return (            
        <div className="card">
        <Link to={`/detalle/${info.id}`} className="things">

            <img width="200" src={info.image}></img>
            <p>{info.title}</p>

        </Link>
        </div>
    )
}

export default Item