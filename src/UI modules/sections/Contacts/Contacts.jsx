import React from 'react';
import cl from './Contacts.module.scss';
import '../../../styles/App.scss'
import iconPhone from '../../../icons/phone.svg';
import iconMail from '../../../icons/mail.svg';
import iconLocation from '../../../icons/location.svg';

function Contacts(props) {
    return (
        <div className={cl.Contacts} id='contacts'>
            <div className='container'>
                <div className='sectionTitleContainer'>
                    <div className='titleSecondary'>
                        <h2>Ia legătura</h2>
                    </div>
                    <div className='titleDescription'>
                        <p>
                            Ești gata să găsești uneltele perfecte pentru proiectul tău? Contactează-ne astăzi!
                        </p>
                    </div>
                </div>
                <div className={cl.contactsContainer}>
                    <div className={cl.contactsCard}>
                        <div className='itemIconPrimary'>
                            <img src={iconPhone} alt='Phone Icon' />
                        </div>
                        <div className={cl.contactsCardDescription}>
                            <div className='cardTitleSecondary'>
                                <h3>Telefon</h3>
                            </div>
                            <div className='cardDescriptionSecondary'>
                                <p style={{marginBottom: '5px'}}>+373(68)112233</p>
                                <p>Luni - Vineri: 8:00 - 18:00</p>
                            </div>
                        </div>
                    </div>
                    <div className={cl.contactsCard}>
                        <div className='itemIconPrimary'>
                            <img src={iconMail} alt='Mail Icon' />
                        </div>
                        <div className={cl.contactsCardDescription}>
                            <div className='cardTitleSecondary'>
                                <h3>Email</h3>
                            </div>
                            <div className='cardDescriptionSecondary'>
                                <p style={{marginBottom: '5px'}}>info@besttools.com</p>
                                <p>Vom răspunde în termen de 24 de ore</p>
                            </div>
                        </div>
                    </div>
                    <div className={cl.contactsCard}>
                        <div className='itemIconPrimary'>
                            <img src={iconLocation} alt='Location Icon' />
                        </div>
                        <div className={cl.contactsCardDescription}>
                            <div className='cardTitleSecondary'>
                                <h3>Adresă</h3>
                            </div>
                            <div className='cardDescriptionSecondary'>
                                <p style={{marginBottom: '5px'}}>Bulevardul Industrial 1234</p>
                                <p>Toolsville, TX 75001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contacts;