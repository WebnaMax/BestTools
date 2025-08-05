import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../styles/ProductDetails.scss';
import '../styles/App.scss';
import MyButton from '../UI modules/button-main/MyButton';
import HeaderCatalog from '../UI modules/parts/headerCatalog/HeaderCatalog';
import ImageSlider from './ImageSlider';
import iconPhone from "../icons/phone.svg";
import iconMail from "../icons/mail.svg";
import iconLocation from "../icons/location.svg";
import cl from '../UI modules/sections/Contacts/Contacts.module.scss'

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:5000/api/products/${id}`)
            .then(res => {
                if (!res.ok) throw new Error('Network response was not ok');
                return res.json();
            })
            .then(data => {
                console.log('Product images:', data.images); // Отладка
                setProduct(data);
            })
            .catch(err => {
                console.error('Error fetching product:', err);
                setError(err.message);
            })
            .finally(() => setLoading(false));
    }, [id]);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOverlayClick = (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal();
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-detail">
            <HeaderCatalog />
            <div className='product-detail_container'>
                <div className="container">
                    <div className='product-item'>
                        <div className="product-image">
                            <div className="cardTitleSecondary">
                                <h2>{product.name}</h2>
                            </div>
                            <ImageSlider images={product.images || []} productName={product.name} />
                        </div>
                        <div className='cardDescriptionSecondary'>
                            <p>{product.description || 'No full description available'}</p>
                        </div>
                        <p className="product-price">{product.price} lei</p>
                        {product.originalPrice && (
                            <p className='original-price'>
                                {product.originalPrice} lei
                            </p>
                        )}
                        <MyButton size="small" color="primary" onClick={openModal}>Cumpără Acum</MyButton>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <div className="modal-overlay" onClick={handleOverlayClick}>
                    <div className="modal-content">
                        <button className="close-modal" onClick={closeModal}>
                            &times;
                        </button>
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
                                        <p style={{marginBottom: '3px'}}>+373(68)112233</p>
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
                                        <p style={{marginBottom: '3px'}}>info@besttools.com</p>
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
                                        <p style={{marginBottom: '3px'}}>Bulevardul Industrial 1234</p>
                                        <p>Toolsville, TX 75001</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ProductDetail;