import React from 'react';
import Accordion from '../components/Accordion';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Img from '../media/bannerApropos.png';
import Img2 from '../media/bannerAproposMobile.png';

const About = () => {
    return (
        <div className='about'>
            <Header />
            <div className="aboutContainer">
                <div className='bannerAbout'></div>
                <div className="collapseContainer">
                    <Accordion label='Fiabilité'>
                        <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont
                            conformes aux logements, et toutes les informations sont régulièrement vérifiées
                            par nos équipes
                        </p>
                    </Accordion>
                    <Accordion label='Respect'>
                        <p>La bienveillance fait partie des valeurs fondatrices de Kasa.
                            Tout comportement discriminatoire ou de perturbation du voisinage entraînera
                            une exclution de notre plateforme.
                        </p>
                    </Accordion>
                    <Accordion label='Service'>
                        <p>Nos équipes se tiennent à votre disposition pour vous fournir une
                            expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.
                        </p>
                    </Accordion>
                    <Accordion label='Sécurité'>
                        <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,
                            chaque logement correspond aux critères de sécurité établis par nos services. En laissant
                            une note aussi bien àl'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards
                            sont bien respectés. Nous organisons égelement des ateliers sur la sécurité domestique pour nos hôtes.
                        </p>
                    </Accordion>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;
