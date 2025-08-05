import React, { useEffect, useState } from 'react';
import '../styles/App.scss'
import '../styles/toolsCatalog.scss'
import MyButton from '../UI modules/button-main/MyButton';
import HeaderCatalog from '../UI modules/parts/headerCatalog/HeaderCatalog';
import { useNavigate, useParams } from 'react-router';
import ImageSlider from './ImageSlider';

function Measuring(props) {

  const { subcategory } = useParams(); // Например, "motoacoase"
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Предположим, что ID категории для "Motoacoase" известен (нужно получить из базы)
    const categoryId = '688cb2692a41e77bbbe663fb'; // Замените на реальный ID
    fetch(`http://localhost:5000/api/products/category/${categoryId}`)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        console.log('Fetched products:', data); // Отладка данных
        setProducts(data);
      })
      .catch(err => console.error('Fetch error:', err));
  }, [subcategory]);

  useEffect(() => {
    window.scrollTo(0, 0); // Сбрасывает прокрутку в начало страницы
  }, []); // Пустой массив зависимостей запускает эффект только при монтировании

  const handleProductClick = (productId) => {
    navigate(`/product/${productId}`); // Переход на страницу товара
  };

  return (
    <div className="toolsCatalog">
      <HeaderCatalog />
      <div className="container">
        <div className="sectionTitleContainer toolsCatalogTitle">
          <div className="titleSecondary">
            <h2>Nivelă cu laser</h2>
          </div>
          <div className="titleDescription">
            <p>
              Instrumente precise pentru măsurători și aliniere perfectă în construcții și renovări. Nivelele cu laser asigură rezultate rapide și de încredere pentru orice proiect.
            </p>
          </div>
        </div>
        <div className="toolsCatalogContainer">
          {products.map(product => (
            <div className="toolsCatalogProduct" key={product._id} onClick={() => handleProductClick(product._id)}>
              <div className="toolsCatalogProductImage">
                <ImageSlider images={product.images || []} productName={product.name} />
              </div>
              <div className="cardTitleSecondary">
                <h3>{product.name}</h3>
              </div>
              <div className="toolsCatalogProductControls">
                <div className="toolsCatalogProductPrice">
                  {product.price} lei
                </div>
                <div className="toolsCatalogProductButton">
                  <MyButton size="small" color="primary">Cumpără Acum</MyButton>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Measuring;