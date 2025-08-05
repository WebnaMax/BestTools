import React from 'react';
import cl from './WhyWe.module.scss';
import '../../../styles/App.scss';
import iconHeadPhones from '../../../icons/headPhones.svg'; 
import iconReward from '../../../icons/reward.svg';
import iconRocket from '../../../icons/rocket.svg';

function WhyWe(props) {
    return (
        <div className={cl.whyWe}>
            <div className='container'>
                <div className='sectionTitleContainer'>
                    <div className='titleSecondary'>    
                        <h2>De ce să alegi BestTools?</h2>
                    </div>
                    <div className='titleDescription'>  
                        <p>
                            La BestTools, ne mândrim cu furnizarea de unelte de înaltă calitate și servicii excepționale pentru clienți. Iată de ce ar trebui să ne alegi pentru toate nevoile tale de unelte:
                        </p>
                    </div>
                </div>
                <div className={cl.whyWeCardsContainer}>
                    <div className={cl.whyWeItem}>
                        <div className={cl.whyWeItemIcon}>
                            <img src={iconReward} alt="Icon Reward" />
                        </div>
                        <div className="cardTitleSecondary">
                            <h3>Calitate Premium</h3>
                        </div>
                        <div className="cardDescriptionSecondary">
                            <p>Stocăm doar unelte de la producători de încredere. Fiecare produs este testat pentru a îndeplini standardele noastre ridicate</p>
                        </div>
                    </div>
                    <div className={cl.whyWeItem}>
                        <div className={cl.whyWeItemIcon}>
                            <img src={iconHeadPhones} alt="Icon HeadPhones" />
                        </div>
                        <div className="cardTitleSecondary">
                            <h3>Suport de Specialitate</h3>
                        </div>
                        <div className="cardDescriptionSecondary">
                            <p>Echipa noastră competentă oferă recomandări personalizate și suport tehnic pentru a te ajuta să alegi uneltele potrivite nevoilor tale specifice.</p>
                        </div>
                    </div>
                    <div className={cl.whyWeItem}>
                        <div className={cl.whyWeItemIcon}>
                            <img src={iconRocket} alt="Icon Rocket" />
                        </div>
                        <div className="cardTitleSecondary">
                            <h3>Livrare Rapidă</h3>
                        </div>
                        <div className="cardDescriptionSecondary">
                            <p>Stocăm doar unelte de la producători de încredere. Fiecare produs este testat pentru a îndeplini standardele noastre ridicate</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WhyWe;