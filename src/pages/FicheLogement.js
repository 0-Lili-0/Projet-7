import React from 'react';
import { useParams } from 'react-router-dom';
import Carousel from '../components/Carousel';
import Collapse from '../components/Collapse';
import Footer from '../components/Footer';
import Header from '../components/Header';
import logements from '../data/logements.json';
import NotFound from './NotFound';


const FicheLogement = () => {
    const { id } = useParams();
    const details = logements.find((item) => item.id === id);
    if (!details) {
        return (<NotFound />);
    }
    const { title, location, tags, host, rating, description, equipements } = details;
    const range = [1, 2, 3, 4, 5];

    return (
        <div>
            <Header />
            <Carousel />
            <div className="titleContent">
                <h2 className='title'>{title}</h2>
                <h3 className='location'>{location}</h3>
                <span className='host'>
                    <p className='hostName'>{host.name}</p>
                    <img className="hostPicture" src={host.picture} alt={host.name} />
                </span>
            </div>
            <div className="tagContent">
                <span className='tags'>{tags}</span>
                <span className='rangeContent'>
                    {range.map((star) => rating >= star ? (
                        <img src="../media/etoile.png" key={star.toString()} alt="etoile" className='stars-red' />) : (
                        <img src='../media/star-grey.png' key={star.toString()} alt="etoile" className='stars-grey' />
                    )
                    )}
                </span>
            </div>
            <div className="equipementContent">
                <Collapse label="Description">
                    <p>{description}</p>
                </Collapse>
                <Collapse label="Equipements">
                    <p>{equipements}</p>
                </Collapse>
            </div>
            <Footer />
        </div>
    );
};

export default FicheLogement;