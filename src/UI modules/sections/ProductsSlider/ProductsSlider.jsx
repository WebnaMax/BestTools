import React, { useEffect, useState } from 'react';
import Flickity from 'react-flickity-component';
import '../../../styles/flickity.min.css';
import cl from './ProductsSlider.module.css';
import '../../../styles/App.scss';
import MyButton from '../../button-main/MyButton';
import { useNavigate } from 'react-router'; // Импортируем useNavigate

const flickityOptions = {
  cellAlign: 'center',
  contain: true,
  wrapAround: true,
  imagesLoaded: true,
  autoPlay: 4000,
  prevNextButtons: true,
  pageDots: false,
  initialIndex: 2,
};

const ProductsSlider = () => {
  const [discountedProducts, setDiscountedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Инициализируем navigate

  useEffect(() => {
    setLoading(true);
    fetch('http://localhost:5000/api/products-discounted')
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        console.log('Discounted products:', data); // Для отладки
        if (Array.isArray(data)) setDiscountedProducts(data);
        else setDiscountedProducts([]);
      })
      .catch(err => {
        console.error('Error fetching discounted products:', err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Переход на страницу товара
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={cl.productsSlider}>
      <Flickity
        className={cl.Slider}
        elementType="div"
        options={flickityOptions}
        reloadOnUpdate
        static
      >
        {discountedProducts.length > 0 ? (
          discountedProducts.map(product => (
            <div className={cl.productsCarouselCell} key={product._id}>
              <div
                className={cl.ourProductsItem}
                onClick={() => handleProductClick(product._id)} // Добавляем обработчик клика
              >
                <div className={cl.productItemText}>
                  <div className={cl.ourProductsItemImage}>
                    {product.images && product.images.length > 0 ? (
                      <img
                        src={`http://localhost:5000${product.images[0]}`}
                        alt={product.name}
                        onError={(e) => {
                          console.log(`Image load failed for http://localhost:5000${product.images[0]} in ${product.name}`);
                          e.target.src = 'http://localhost:5000/public/images/placeholder-image.jpg';
                          e.target.onerror = null;
                        }}
                      />
                    ) : (
                      <span>No image available</span>
                    )}
                  </div>
                  <div className="cardTitleSecondary">
                    <h3>{product.name}</h3>
                  </div>
                  <div className="cardDescriptionSecondary">
                    <p>{product.shortDescription || 'No description'}</p>
                  </div>
                </div>
                <div className={cl.ourProductsItemControls}>
                  <div className={cl.productPrice}>
                    <div className={cl.productSpecialPrice}>
                      {product.price} lei
                    </div>
                    {product.originalPrice && (
                      <div className={cl.productOldPrice}>
                        {product.originalPrice} lei
                      </div>
                    )}
                  </div>
                  <div className={cl.ourProductsItemButton}>
                    <MyButton size="small" color="primary" onClick={() => handleProductClick(product._id)}>Cumpără Acum</MyButton>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className={cl.productsCarouselCell}>
            <p>No discounted products available</p>
          </div>
        )}
      </Flickity>
    </div>
  );
};

export default ProductsSlider;