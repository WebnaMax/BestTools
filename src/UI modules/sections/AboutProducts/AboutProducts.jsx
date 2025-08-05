import React, { useEffect } from 'react';
import cl from './AboutProducts.module.scss';
import '../../../styles/App.scss';
import iconHamer from '../../../icons/hamer.svg';
import iconTools from '../../../icons/tools.svg';
import iconRuler from '../../../icons/ruler.svg';
import iconGasStation from '../../../icons/gasStation.svg';
import { Link as NavLink } from 'react-router'; // для навигации
import { Link as ScrollLink } from 'react-scroll'; // для скроллинга

function AboutProducts(props) {
    useEffect(() => {
        window.scrollTo(0, 0); // Сбрасывает прокрутку в начало страницы
    }, []); // Пустой массив зависимостей запускает эффект только при монтировании

    return (
        <div className={cl.aboutProducts} id='about'>
            <div className='container'>
                <div className="sectionTitleContainer">
                    <div className='titleSecondary'>
                        <h2>Ce Vindem</h2>
                    </div>
                    <div className='titleDescription'>
                        <p>
                           Explorează gama noastră extinsă de unelte de calitate profesională, 
                           selectate cu grijă pentru a răspunde nevoilor contractorilor, meșterilor și pasionaților de bricolaj.
                        </p>
                    </div>
                </div>
                <div className={cl.aboutProductsContainer}>
                    {/* <div > */}
                        <NavLink to="/gasolineTools" className={cl.aboutProductsItem}>
                            <div className="itemIconPrimary">
                                <img src={iconHamer} alt="Icon Hamer" />
                            </div>
                            <div className="cardTitleSecondary">
                                <h3>Unelte Pe Benzină</h3>
                            </div>
                            <div className="cardDescriptionSecondary">
                                <p>Oferim unelte pe benzină performante și durabile, perfecte pentru grădină, construcții sau întreținere. </p>
                            </div>
                            <div className={cl.aboutProductsItemButton}>
                            <ScrollLink
                                    to="products"
                                    smooth={true}
                                    duration={500}
                                    className={cl.aboutProductsItemButtonText}
                                    >
                                    Vezi Toate →
                                </ScrollLink>
                            </div>
                        </NavLink>
                    {/* </div> */}
                    <NavLink to="/electroTools" className={cl.aboutProductsItem}>
                        <div className="itemIconPrimary">
                            <img src={iconTools} alt="Icon Tools" />
                        </div>
                        <div className="cardTitleSecondary">
                            <h3>Unelte Electrice</h3>
                        </div>
                        <div className="cardDescriptionSecondary">
                            <p>Bormașini, polizoare și multe altele de calitate profesională pentru proiecte de construcții și prelucrare a lemnului de mare amploare.</p>
                        </div>
                        <div className={cl.aboutProductsItemButton}>
                            <ScrollLink
                                to="products"
                                smooth={true}
                                duration={500}
                                className={cl.aboutProductsItemButtonText}
                            >
                                Vezi Toate →
                            </ScrollLink>
                        </div>
                    </NavLink>
                    {/* <div className={cl.aboutProductsItem}>
                        <div className="itemIconPrimary">
                            <img src={iconTools} alt="Icon Tools" />
                        </div>
                        <div className="cardTitleSecondary">
                            <h3>Unelte de Mână</h3>
                        </div>
                        <div className="cardDescriptionSecondary">
                            <p>Unelte de mână de precizie, inclusiv chei, șurubelnițe, clești și unelte speciale pentru lucrări detaliate.</p>
                        </div>
                        <div className={cl.aboutProductsItemButton}>
                            <Link
                                to="products"
                                smooth={true}
                                duration={500}
                                className={cl.aboutProductsItemButtonText}
                            >
                                Vezi Toate →
                            </Link>
                        </div>
                    </div> */}
                    <NavLink to="/rulerTools" className={cl.aboutProductsItem}>
                        <div className="itemIconPrimary">
                            <img src={iconRuler} alt="Icon Ruler" />
                        </div>
                        <div className="cardTitleSecondary">
                            <h3>Instrumente de Măsurare</h3>
                        </div>
                        <div className="cardDescriptionSecondary">
                            <p>Instrumente de măsurare precise, inclusiv nivele, rulete, șublere și instrumente de măsurare cu laser.</p>
                        </div>
                        <div className={cl.aboutProductsItemButton}>
                            <ScrollLink
                                to="products"
                                smooth={true}
                                duration={500}
                                className={cl.aboutProductsItemButtonText}
                            >
                                Vezi Toate →
                            </ScrollLink>
                        </div>
                    </NavLink>
                </div>
            </div>
        </div>
    );
}

export default AboutProducts;