import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/bg.jpg';
import '../Homepage/Homepage.css';

export const Homepage = ()=>{
    return (
        <div className="banner">
            <img src={logo} alt='logo' />
            <div className="container homepage-menu">
                <h1 className="name">Расчет надежности печатных плат</h1>
                <Link  className="btn btn-success main-menu-btn" to="/calculation">Рассчитать</Link>  
                <Link  className="btn btn-success main-menu-btn" to="/history">История</Link>  
            </div>
        </div>
    )
}