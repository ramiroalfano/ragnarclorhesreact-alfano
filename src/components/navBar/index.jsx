import React from "react";
import CartWidget from "../cartWidget";
import "./style.css";
import { useState } from "react";
import { Button } from "@mui/material";
import {Link} from 'react-router-dom';
import AuthContainer from "../../container/AuthContainer";

const NavBar = () => {
    const [loginModal, setLoginModal] = useState(false);
    const [signupModal, setSignupModal] = useState(false);

    const handleLogin = () => {
        setLoginModal(true);
    };
    
    const handleSignup = ()=> {
        setSignupModal(true);
    }

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
                <li className="buttons-container">
                    <Button
                        size="medium"
                        variant="outlined"
                        onClick={handleLogin}
                    >
                        Login
                    </Button>
                    <Button
                        size="medium"
                        variant="contained"
                        onClick={handleSignup}
                    >
                        Signup
                    </Button>
                </li>
                <li>
                <CartWidget/>
                </li>
            </ul>
            {(loginModal || signupModal) && (
                    <AuthContainer
                        handleClose={() => {
                            setLoginModal(false);
                            setSignupModal(false);
                        }}
                        login={loginModal}
                        signUp={signupModal}
                    />
                )}
        </div>
    </nav>
);
};

export default NavBar;