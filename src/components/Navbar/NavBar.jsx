import React from "react";
import CartWidget from "./CartWidget";
import {NavLink} from 'react-router-dom';
import "../Navbar/Navbar.css"

export const Navbar = () => {
    return (
    <div className="container">
        <nav className="nav">
            <div className="nav_brand">
                <NavLink className="nav__link" to='/'>MiMarca</NavLink>
            </div>
            <ul className="nav__list">
                <li>
                    <NavLink className="nav__link" to='category/fire'>Fire</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" to='category/water'>Water</NavLink>
                </li>
                <li>
                    <NavLink className="nav__link" to='cart'><CartWidget></CartWidget></NavLink>
                </li>
            </ul>
        </nav>
    </div>    )
}

export default Navbar