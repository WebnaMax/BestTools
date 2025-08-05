import React from 'react';
import '../../styles/App.scss';
import AboutUs from '../../UI modules/sections/About Us/AboutUs';
import AboutProducts from '../../UI modules/sections/AboutProducts/AboutProducts';
import Contacts from '../../UI modules/sections/Contacts/Contacts';
import FAQ from '../../UI modules/sections/FAQ/FAQ';
import HeroSection from '../../UI modules/sections/HeroSection/HeroSection';
import OurProducts from '../../UI modules/sections/OurProducts/OurProducts';
import SpecialPrice from '../../UI modules/sections/SpecialPrice/SpecialPrice';
import WhyWe from '../../UI modules/sections/WhyWe/WhyWe';
import Footer from '../../UI modules/parts/footer/footer';

function MainPage(props) {
    return (
        <main>
            <HeroSection />
            <AboutProducts />
            <AboutUs />
            <OurProducts />
            <WhyWe />
            <FAQ />
            <SpecialPrice />
            <Contacts />
            <Footer />
        </main>
    );
}

export default MainPage;