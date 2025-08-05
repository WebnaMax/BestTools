import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import '../styles/ProductDetails.scss';
import '../styles/App.scss';
import MyButton from '../UI modules/button-main/MyButton';
import HeaderCatalog from '../UI modules/parts/headerCatalog/HeaderCatalog';
import ImageSlider from './ImageSlider';

function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
                        <MyButton size="small" color="primary">Cumpără Acum</MyButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetail;