import React from 'react';
import logements from '../data/logements.json'
import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Carrousel = () => {
    const { id } = useParams()
    const allPictures = logements.find((item) => item.id === id)
    const { pictures } = allPictures
    const [useCurrent, setUseCurrent] = useState(0);

    //Pour que lorsque l'on se trouve sur la dernière image on revienne sur la première en cliquant sur le chevron droit et inversement
    const nextPictures = () => {
        setUseCurrent(useCurrent === pictures.lenght - 1 ? 0 : useCurrent + 1)
    }
    const prevPictures = () => {
        setUseCurrent(useCurrent === 0 ? pictures.lenght - 1 : useCurrent - 1)
    }
    console.log(logements.id)
    console.log(id)
    return (
        <div className='carousel'>
            <div className="carouselContainer">
                <div className="iconeContent">
                    <i class="fas fa-chevron-left" onClick={prevPictures}></i>
                    <i class="fas fa-chevron-right" onClick={nextPictures}></i>
                </div>
                <div className="imgContent">
                    {
                        pictures.map((img, index) => {
                            return (
                                <div key={index} className='imageCarousel imageNumber'>
                                    {index === useCurrent && (
                                        <img src={img} alt="Photos du logement" />)}
                                    {index === useCurrent && (
                                        <span className="imageNumber">{useCurrent + 1}/{allPictures.pictures.lenght}</span>
                                    )}

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </div>
    );
};

export default Carrousel;