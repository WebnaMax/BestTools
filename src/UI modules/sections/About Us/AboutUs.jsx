import React from 'react';
import cl from './AboutUs.module.scss';
import '../../../styles/App.scss';
import aboutUsImage from '../../../images/aboutUsImage.png';
import iconLight from '../../../icons/light.svg';   
import iconHeadPhones from '../../../icons/headPhones.svg';   
import iconTruck from '../../../icons/truck.svg';   


function AboutUs(props) {
    return (
        <div className={cl.aboutUs}>
            <div className='container'>
                <div className={cl.aboutUsContainer}>
                    <div className={cl.aboutUsImageContainer}>
                        <img src={aboutUsImage} alt="About Us" />
                    </div>
                    <div className={cl.aboutUsTextContainer}>
                        <div className='sectionTitleContainer'>
                            <div className='titleSecondary'>
                                <h2>Despre BestTools</h2>
                            </div>
                            <div className='titleDescription'>
                                <p>
                                    De peste 5 de ani, BestTools este partenerul de încredere pentru profesioniști și pasionații de bricolaj care caută unelte și echipamente de înaltă calitate. Înțelegem că unealta potrivită poate face toată diferența în succesul proiectului tău.
                                </p>
                                <p>
                                    Misiunea noastră este să oferim unelte excepționale, susținute de cunoștințe de specialitate și un serviciu pentru clienți remarcabil. Ne selectăm cu grijă inventarul pentru a ne asigura că fiecare produs îndeplinește standardele noastre stricte de calitate, durabilitate și performanță.
                                </p>
                            </div>
                        </div>
                        <div className={cl.aboutUsCardsContainer}>
                            <div className={cl.aboutUsCard}>
                               <div className='itemIconPrimary'>
                                    <img src={iconLight} alt="Icon Light" />
                                </div>
                                <div className='cardTitleSecondary'>
                                    <h3>5+ Ani</h3>
                                </div>
                                <div className='cardDescriptionSecondary'>
                                    <p>Experiență în industrie</p>
                                </div>
                            </div>
                            <div className={cl.aboutUsCard}>
                               <div className='itemIconPrimary'>
                                    <img src={iconHeadPhones} alt="Icon HeadPhones" />
                                </div>
                                <div className='cardTitleSecondary'>
                                    <h3>Expert</h3>
                                </div>
                                <div className='cardDescriptionSecondary'>
                                    <p>Pentru clienți de specialitate</p>
                                </div>
                            </div>
                            <div className={cl.aboutUsCard}>
                               <div className='itemIconPrimary'>
                                    <img src={iconTruck} alt="Icon Truck" />
                                </div>
                                <div className='cardTitleSecondary'>
                                    <h3>Repede</h3>
                                </div>
                                <div className='cardDescriptionSecondary'>
                                    <p>Serviciu de livrare</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;