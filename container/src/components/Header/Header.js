import React from "react";
import './Header.scss';
import logo from '../../assets/images/logo.png';

function Header(){

    return (
        <div>
            <img src={logo} alt="webpack-logo" />
            <h1 className="header">Welcome to Webpack Ninja Course</h1>
        </div>
    )
}

export default Header;