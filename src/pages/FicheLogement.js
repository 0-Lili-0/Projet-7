import React from 'react';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Header from '../components/Header';
import logements from '../data/logements.json'


const FicheLogement = () => {
    return (
        <div className='ficheLogement'>
            <Header />
            <div className="ficheContent">
                <div className='carrousel'>
                    <img src={logements.cover} alt={logements.title} />
                </div>
                <div className="titleContent">
                    <h2 className='title'>{logements.title}</h2>
                    <h3 className='location'>{logements.location}</h3>
                    <span className='host'>
                        <p className='hostName'>{logements.host.name}</p>
                        <img className="hostPicture" src={logements.host.picture} alt={logements.host.name} />
                    </span>
                </div>
                <div className="tagContent">
                    <span>{logements.tag}</span>
                    <span>{logements.rating}</span>
                </div>
                <div className="equimentContent">
                    <Collapse />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default FicheLogement;