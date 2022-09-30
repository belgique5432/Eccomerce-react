import React, {useState} from "react";
import './ItemDetail.css';
import ItemCount from "../itemcount";
import {Link} from 'react-router-dom'


const ItemDetail = ({data}) => {
    const [goToCart, setGoToCart] = useState(false);

    const onAdd = (quantity) => {
        setGoToCart(true);
    }

    return (
        <div className="container">
            <div className="detail">
                <img src={data.image} className="detail__image"></img>
            </div>
            <div className="content">
                <h1>{data.title}</h1>
                {
                    goToCart
                    ? <Link to='/cart'>Terminar compra</Link>
                    :<ItemCount initial={3} stock={5} onAdd={onAdd}></ItemCount>
                }
            </div>
        </div>
    )
    }
export default ItemDetail;