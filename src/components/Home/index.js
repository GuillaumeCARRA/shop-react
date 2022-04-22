import React from 'react';

import Navbar from '../Navbar'; 
import Annoucement from '../Announcement';
import Slider from '../Slider';
import Categories from '../Categories';
import Products from '../Products';
import Newsletter from '../Newsletter';
import Footer from '../Footer';


function Home() {
    return (
        <div>
            <Annoucement />
            <Navbar />
            <Slider />
            <Categories />
            <Products />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default Home;
