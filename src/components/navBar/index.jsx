import React from "react";
import CartWidget from "../cartWidget";
import "./style.css";
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
    <nav class="navbar navbar-expand-sm bg-dark ">
        <div class="container-fluid">
            <div class="navbar-brand" >RagnarClothes</div>
            <ul>
                <li class="nav-item">
                    <Link class="nav-link" to="/">Home</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/category/men's clothing">Indumentaria Masculina</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/category/women's clothing">Indumentaria Femenina</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/category/electronics">Computacion</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/category/jewelery">Joyeria</Link>
                </li>
                <li>
                <CartWidget/>
                </li>
            </ul>
        </div>
    </nav>
);
};

export default NavBar;