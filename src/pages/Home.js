import React from 'react';
import Card from '../components/Card';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import Header from '../components/Header';

const Home = () => {
    return (
        <div className='home'>
            <Header />
            <Banner />
            <div className="gallery">
                <Card />
            </div>
            <Footer />
        </div>
    );
};

export default Home;