import React from 'react';
import { useNavigate } from 'react-router-dom';
import logements from '../data/logements.json';

const Card = () => {
    //const logementData = require('../data/logements.json')
    const navigate = useNavigate()


    return (
        <div className='card'>
            {
                logements.map((logement) => {
                    return (
                        <div className='cardContent'
                            key={logement.id}
                            onClick={() => navigate(`/logement/${logement.id}`)}>
                            <div className='cardCover'>
                                <img src={logement.cover} alt={logement.title} />
                            </div>
                            <div className="cardTitle">
                                {logement.title}   
                            </div>
                        </div>
                    )
                })
                }
                
                
            </div>
        );
    
}

export default Card;