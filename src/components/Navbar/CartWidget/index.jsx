import React, { useContext } from "react";
import { CartContext } from "../../../App";

export const CartWidget = () => {
    const nombre = useContext(CartContext)
    return (
        <i class="bi bi-cart"></i>
    )
}

export default CartWidget;