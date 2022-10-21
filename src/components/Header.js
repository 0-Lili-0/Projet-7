import React from 'react';
import Img from '../media/LOGO.png'
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div className='header'>

            <div className='logo'>
                <img src={Img} alt="logo kasa" />
            </div>
            
            <div className="navigation">
                <ul>
                    <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                           <li className='accueil'>Accueil</li>
                    </NavLink>
                    <NavLink to="/Apropos" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                            <li className='aPropos'>A propos</li>
                    </NavLink>
                </ul>
            </div>

        </div>
    );
};

export default Header;