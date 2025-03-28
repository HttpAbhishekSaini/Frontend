import React from 'react';
import Hero from './Hero';
import Award from './Award'
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Education';
import Openaccount from '../Openaccount';
import Navbar from '../Navbar';
import Footer from '../Footer';

function Homepage() {
    return ( 
        <>
           <Hero />
           <Award />
           <Stats />
           <Pricing />
           <Education />
           <Openaccount />
           </>
     );
}

export default Homepage;