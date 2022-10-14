import React from 'react';
import { NavLink } from 'react-router-dom';
import Header from '../components/Header';

const NotFound = () => {
    return (
        <div className='notFound'>
            <Header />
            <div className="errorContent">
                <p className='errorNumber'>404</p>
                <p className='errorText'>Oups! La page que vous demandez n'existe pas.</p>
                <nav>
                    <ul>
                    <NavLink to="/" exact className="accueil">
                           <li>Retourner sur la page d'accueil</li>
                    </NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default NotFound;