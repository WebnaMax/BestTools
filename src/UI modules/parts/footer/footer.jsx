import React from 'react';
import cl from './footer.module.scss'
import '../../../styles/App.scss'
import iconInsta from '../../../icons/instagram.svg';
import iconTelegram from '../../../icons/telegram.svg';
import iconViber from '../../../icons/viber.svg';
import iconFacebook from '../../../icons/facebook.svg';
import iconPhone from '../../../icons/phoneWhite.svg';
import iconMail from '../../../icons/mailWhite.svg';
import iconLocation from '../../../icons/locationWhite.svg';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router';

function Footer(props) {
    return (
        <div className={cl.footer}>
            <div className='container'>
                <div className={cl.footerContainer}>
                    <div className={cl.footerDescription}>
                        <div className={`cardTitleSecondary ${cl.footerTitleSecondary}`}>
                            <h3>BestTools</h3>
                        </div>
                        <div className='cardDescriptionSecondary'>
                            <p style={{ color: '#8d8d8d' }}>
                                Partenerul tău de încredere pentru unelte și echipamente de calitate profesională. Calitate pe care te poți baza, servicii în care poți avea încredere.
                            </p>
                        </div>
                        <div className={cl.footerDescriptionSocial}>
                            <div className="footerIconImage">
                                <img src={iconInsta} alt='Instagram' />
                            </div>
                            <div className="footerIconImage">
                                <img src={iconTelegram} alt='Telegram' />
                            </div>
                            <div className="footerIconImage">
                                <img src={iconViber} alt='Viber' />
                            </div>
                            <div className="footerIconImage">
                                <img src={iconFacebook} alt='Facebook' />
                            </div>
                        </div>
                    </div>
                    <div className={cl.footerNavLinks}>
                        <div className={cl.footerNavItem}>
                            <div className={`cardTitleSecondary ${cl.footerTitleSecondary}`}>
                                <h3>Linkuri Rapide:</h3>
                            </div>
                            <ul className={cl.footerNav}>
                                <li>
                                    <LinkScroll
                                        to="home"
                                        smooth={true}
                                        duration={500}
                                        className={`cardDescriptionSecondary ${cl.footerNavLink}`}
                                    >
                                        <p>Acasă</p>
                                    </LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll
                                        to="about"
                                        smooth={true}
                                        duration={500}
                                        className={`cardDescriptionSecondary ${cl.footerNavLink}`}
                                    >
                                        <p>Produse</p>
                                    </LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll
                                        to="products"
                                        smooth={true}
                                        duration={500}
                                        className={`cardDescriptionSecondary ${cl.footerNavLink}`}
                                    >
                                        <p>Despre Noi</p>
                                    </LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll
                                        to="faq"
                                        smooth={true}
                                        duration={500}
                                        className={`cardDescriptionSecondary ${cl.footerNavLink}`}
                                    >
                                        <p>Întrebări frecvente</p>
                                    </LinkScroll>
                                </li>
                                <li>
                                    <LinkScroll
                                        to="contacts"
                                        smooth={true}
                                        duration={500}
                                        className={`cardDescriptionSecondary ${cl.footerNavLink}`}
                                    >
                                        <p>Contact</p>
                                    </LinkScroll>
                                </li>
                            </ul>
                        </div>
                        <div className={cl.footerNavItem}>
                            <div className={`cardTitleSecondary ${cl.footerTitleSecondary}`}>
                                <h3>Categorii:</h3>
                            </div>
                            <ul>
                                <li>
                                    <LinkRouter
                                        to="/gasolineTools"
                                        smooth={true}
                                        duration={500}
                                        className={`cardDescriptionSecondary ${cl.footerNavLink}`}
                                    >
                                        <p>Unelte Noastre Pe Benzină</p>
                                    </LinkRouter>
                                </li>
                                <li>
                                    <LinkRouter
                                        to="/electroTools"
                                        smooth={true}
                                        duration={500}
                                        className={`cardDescriptionSecondary ${cl.footerNavLink}`}
                                    >
                                        <p>Unelte Noastre Pe Benzină</p>
                                    </LinkRouter>
                                </li>
                                <li>
                                    <LinkRouter
                                        to="/electroTools"
                                        smooth={true}
                                        duration={500}
                                        className={`cardDescriptionSecondary ${cl.footerNavLink}`}
                                    >
                                        <p>Instrumente de Măsurare</p>
                                    </LinkRouter>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className={cl.footerLine}></hr>
                <div className={cl.footerCopyright}>
                    <div className='cardDescriptionSecondary'>
                        <p style={{ color: '#8d8d8d' }}>
                            © 2025 BestTools. Toate drepturile rezervate.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;