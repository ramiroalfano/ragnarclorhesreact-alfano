import React from "react";
import CartWidget from "../cartWidget";
import "./style.css";
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/category/men's clothing">Indumentaria Masculina</Link>
            </li>
            <li>
                <Link to="/category/women's clothing">Indumentaria Femenina</Link>
            </li>
            <li>
                <Link to="/category/electronics">Computacion</Link>
            </li>
            <li>
                <Link to="/category/jewelery">Joyeria</Link>
            </li>
            <CartWidget/>
        </ul>
    );
};

export default NavBar;