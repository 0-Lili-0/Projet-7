import React from 'react';
import Img from '../media/bannerHome.png'

const Banner = () => {
    return (
        <div className='bannerContent'>
            <img src={Img} alt="bannière" />   
            <h1 className='title'>Chez vous, partout et ailleurs</h1>
        </div>
    );
};

export default Banner;