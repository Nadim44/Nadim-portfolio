import React from 'react';
import Banner from '../Banner/Banner';
import Projects from '../Projects/Projects';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <Projects></Projects>
        </div>
    );
};

export default Home;