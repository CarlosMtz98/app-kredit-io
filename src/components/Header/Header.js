import React from 'react';
import {NavLink} from 'react-router-dom';
import './HeaderStyles.css';

const Header = () => {
    return (
        <div className="kredit-navbar">
            <nav className="navbar navbar-expand-lg kredit-nav">
                <NavLink className="navbar-brand kredit-brand"  to="/">kredit.io</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse kredit-menu" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item kredit-item">
                            <NavLink className="nav-link kredit-menu-link" to="/">Inicio</NavLink>
                        </li>
                        <li className="nav-item kredit-item">
                            <NavLink className="nav-link kredit-menu-link" to="/servicios">Servicios</NavLink>
                        </li>
                        <li className="nav-item kredit-item">
                            <NavLink className="nav-link kredit-menu-link" to="/equipo">Equipo</NavLink>
                        </li>
                        <li className="nav-item kredit-item">
                            <NavLink to="/solicitud" className="kredit-link">
                                <button className="nav-link kredit-menu-button">Solicita tu crédito</button>
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="kredit-navbar-ghost"></div>
            </nav> 
        </div>
        
    );
} 

export default Header;