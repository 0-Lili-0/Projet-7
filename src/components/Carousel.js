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
        setUseCurrent(useCurrent === pictures.length - 1 ? 0 : useCurrent + 1)
    }
    const prevPictures = () => {
        setUseCurrent(useCurrent === 0 ? pictures.length - 1 : useCurrent - 1)
    }
    console.log(allPictures.pictures.length)
    return (
        <div className='carousel'>
            <div className="carouselContainer">
                <div className="iconeContent">
                    <span><i className="fas fa-chevron-left" onClick={prevPictures}></i></span>
                    <span><i className="fas fa-chevron-right" onClick={nextPictures}></i></span>
                </div>
                <div className="imgContent">
                    {
                        pictures.map((img, index) => {
                            return (
                                <div key={index} className={index === useCurrent ? 'imageActive' : "image"} >
                                    {index === useCurrent && (<img src={img} alt="Photos du logement" />)}
                                    {index === useCurrent && (<span className="imageNumber">{useCurrent + 1}/{pictures.length}</span>)}
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