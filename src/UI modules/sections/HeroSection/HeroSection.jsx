import React from 'react';
import '../../../styles/App.scss';
import cl from './HeroSection.module.scss';
import heroSectionBackground from '../../../images/heroSectionBackground.png';
import MyButton from '../../button-main/MyButton';
import Header from '../../parts/header/header';
import { Link } from 'react-scroll';

function HeroSection() {


    return (
        <div className={cl.heroSection} id='home'>
            <Header />
            <div className={cl.heroSectionBackground}>
                <img src={heroSectionBackground} alt="Hero Section Background" />
            </div>
            <div className={cl.heroSectionOverlay}>
                <div className={cl.heroSectionContent}>
                    <div className={cl.heroSectionTitle}>
                        <h1>Instrumente Profesionale pentru Fiecare Proiect</h1>
                    </div>
                    <div className={cl.heroSectionDescription}>
                        <p>
                            Descoperă colecția noastră completă de instrumente de înaltă calitate, 
                            concepute pentru profesioniști și pasionații de bricolaj. De la unelte electrice 
                            la instrumente de precizie, avem tot ce îți trebuie pentru a duce treaba la bun sfârșit
                        </p>
                    </div>
                    <div className={cl.heroSectionButtonsContainer}>
                        <MyButton size="large" color="primary">Cumpără Acum</MyButton>
                        <Link
                            to="contacts"
                            smooth={true}
                            duration={500}
                        >
                            <MyButton size="large" color="secondary">Află Mai Multe</MyButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;