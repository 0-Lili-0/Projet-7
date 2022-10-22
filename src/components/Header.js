import React from 'react';
import Img from '../media/LOGO.png'
import { Link, useLocation } from 'react-router-dom';


const Header = () => {
  const location = useLocation();
  const { pathname } = location;
  const splitLocation = pathname.split("/")

  return (
      <div className='header'>
          <div className='logo'>
              <img src={Img} alt="logo kasa" />
          </div>
          <div className="navigation">
              <ul>
                  <li className ={splitLocation[1] === "" ? "nav-active" : "nav-inactive"}>
                    <Link to="/">Accueil</Link>
                  </li>
                  <li className ={splitLocation[1] === "about" ? "nav-active" : "nav-inactive"}>
                    <Link to="/about">A propos</Link>
                  </li>
              </ul>
          </div>
      </div>
    );
};

export default Header;
