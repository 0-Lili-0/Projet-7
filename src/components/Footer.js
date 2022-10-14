import React from 'react';
import Img from '../media/LogoFooter.png'

const Footer = () => {
    return (
        <div className='footer'>
            <img src={Img} alt="logo kasa" />
            <div className='copyright'>
                <i class="far fa-copyright"></i>
                <p>2020 Kasa. All rights reserved</p>
            </div>
        </div>
    );
};

export default Footer;