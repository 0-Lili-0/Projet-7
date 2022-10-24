import React from 'react';
import { useParams } from 'react-router-dom';
import Accordion from '../components/Accordion';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Tag from '../components/Tag';
import logements from '../data/logements.json';
import NotFound from './NotFound';


const FicheLogement = () => {
    const { id } = useParams();
    const details = logements.find((item) => item.id === id);
    if (!details) {
        return (<NotFound />);
    }

    const { title, location, host, rating, tags, description, equipments } = details;
    const range = [1, 2, 3, 4, 5];
    const equipmentList = equipments.map((equipment => <ul key={equipment.index} ><li>{equipment}</li></ul>))
    return (
        <div>
            <Header />
            <Carousel />
            <div className="titleContent">
                <span className='titleContenair'>
                    <h2 className='title'>{title}</h2>
                    <h3 className='location'>{location}</h3>
                </span>
                <span className='host'>
                    <p className='hostName'>{host.name}</p>
                    <img className="hostPicture" src={host.picture} alt={host.name} />
                </span>
            </div>
            <div className="tagContent">
                <Tag tags={tags} />
                <span className='rangeContent'>
                    {range.map((star) => rating >= star ? (
                        <img
                            src='../../media/star-red.svg'
                            alt='etoile'
                            key={star.toString()}
                            className="star"
                        />) : (
                        <img
                            src='../../media/star-grey.svg'
                            alt='etoile'
                            key={star.toString()}
                            className="star"
                        />)
                    )}
                </span>
            </div>
            <div className="equipementContent">
                <Accordion label="Description">
                    <p>{description}</p>
                </Accordion>
                <Accordion label="Equipements">
                    <li className='listeEquipments'>{equipmentList}</li>
                </Accordion>
            </div>
            <Footer />
        </div>
    );
};

export default FicheLogement;
