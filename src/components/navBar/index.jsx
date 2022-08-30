import React from "react";
import CartWidget from "../cartWidget";
import "./style.css";

const NavBar = () => {

    return (
        <ul>
            <li>
                <a href="/#">Home</a>
            </li>
            <li>
                <a href="/#">Productos</a>
            </li>
            <li>
                <a href="/#">About us</a>
            </li>
            <CartWidget/>
        </ul>
    );
};

export default NavBar;