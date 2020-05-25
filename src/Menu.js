import React from 'react';
import './Menu.css';
import pigfood from './img/gray pig.png';

import { Link } from "react-router-dom";

const MenuElement = function ({ text, to }) {
    return (
        <div className="MenuElement">
            <Link to={to}><h3>{text}</h3></Link>
        </div>
    )
}

export const Menu = function () {
    return (
        <div>
            <Link to="/"><img className="menu-logo" src={pigfood}></img></Link>
            <div className="Menu">
                <MenuElement text="Soup" to="/recipes/soup" />
                <MenuElement text="Fried" to="/recipes/fried" />
                <MenuElement text="Salad" to="/recipes/salad" />
                <MenuElement text="Noodles" to="/recipes/noodles" />
                <MenuElement text="Street Food" to="/recipes/streetfood" />
            </div>
        </div>

    )
}