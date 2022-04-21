import React from 'react';

import Navbar from '../Navbar'; 
import Annoucement from '../Announcement';
import Slider from '../Slider';



function Home() {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
        </div>
    )
}

export default Home;
