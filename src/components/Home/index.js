import React from 'react';

import Navbar from '../Navbar'; 
import Annoucement from '../Announcement';
import Slider from '../Slider';
import Categories from '../Categories';



function Home() {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories />
        </div>
    )
}

export default Home;
