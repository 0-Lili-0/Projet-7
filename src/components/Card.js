import React from 'react';
import { useNavigate, useParams } from 'react-router-dom'
import logements from '../data/logements.json'

const Card = (props) => {
    let navigate = useNavigate();
    let { id } = useParams();

    return (
        <div className='card'>
            {
                logements.map(logement => {
                    return (
                        <div className='cardContent'
                             key={logement.id} 
                             onClick={() => {
                                navigate('fichelogment/')
                        }}>
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