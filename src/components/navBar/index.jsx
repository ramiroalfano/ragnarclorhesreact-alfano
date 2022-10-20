import React from "react";
import CartWidget from "../cartWidget";
import "./style.css";
import {Link} from 'react-router-dom';

const NavBar = () => {

    return (
    <nav className="navbar navbar-expand-sm bg-dark ">
        <div className="container-fluid">
            <div className="navbar-brand" >RagnarClothes</div>
            <ul>
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/men's clothing">Indumentaria Masculina</Link>
                </li>
                <li class="nav-item">
                    <Link class="nav-link" to="/category/women's clothing">Indumentaria Femenina</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/electronics">Computacion</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/jewelery">Joyeria</Link>
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