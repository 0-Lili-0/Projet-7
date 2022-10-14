import React from 'react';
import Img from '../media/LOGO.png'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>

            <div className='logo'>
                <img src={Img} alt="logo kasa" />
            </div>
            
            <nav className="nav">
                <ul>
                    <NavLink to="/" exact className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>
                           <li className='accueil'>Accueil</li>
                    </NavLink>
                    <NavLink to="/Apropos" className={(nav) => (nav.isActive ? "nav-active" : "nav-inactive")}>
                            <li className='aPropos'>A propos</li>
                    </NavLink>
                </ul>
            </nav>

        </div>
    );
};

export default Header;