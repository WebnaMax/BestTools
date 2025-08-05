import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import '../styles/AdminPanel.scss';
import HeaderCatalog from "../UI modules/parts/headerCatalog/HeaderCatalog";

function AdminPanel() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    shortDescription: '',
    description: '',
    price: '',
    originalPrice: '',
    discount: '',
    images: [null, null, null, null],
    existingImages: [],
    category: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const ADMIN_PASSWORD = 'admin123'; // Заменить на безопасный метод в продакшене

  useEffect(() => {
    if (isAuthenticated) {
      // Загрузка категорий
      fetch('http://localhost:5000/api/categories', { credentials: 'include' })
          .then(res => {
            if (!res.ok) throw new Error('Ошибка сети при загрузке категорий');
            return res.json();
          })
          .then(data => {
            if (Array.isArray(data)) setCategories(data);
            else setCategories([]);
          })
          .catch(err => {
            console.error('Ошибка загрузки категорий:', err);
            setCategories([]);
            setError('Ошибка загрузки категорий: ' + err.message);
          });

      // Загрузка продуктов
      fetch('http://localhost:5000/api/products', { credentials: 'include' })
          .then(res => {
            if (!res.ok) throw new Error('Ошибка сети при загрузке продуктов');
            return res.json();
          })
          .then(data => {
            if (Array.isArray(data)) {
              // Логируем данные для дебага
              console.log('Полученные продукты:', data);
              data.forEach(product => {
                console.log(`Продукт ${product.name}: shortDescription =`, product.shortDescription);
              });
              setProducts(data);
            } else {
              setProducts([]);
            }
          })
          .catch(err => {
            console.error('Ошибка загрузки продуктов:', err);
            setError('Ошибка загрузки продуктов: ' + err.message);
          });
    }
  }, [isAuthenticated]);

  const handlePasswordSubmit = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError('');
    } else {
      setPasswordError('Неверный пароль. Попробуйте снова.');
    }
  };

  const handleChange = (e, index) => {
    if (e.target.name === 'images') {
      const newImages = [...formData.images];
      newImages[index] = e.target.files[0];
      setFormData({ ...formData, images: newImages });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const url = editingId ? `http://localhost:5000/api/products/${editingId}` : 'http://localhost:5000/api/products';
    const method = editingId ? 'PUT' : 'POST';
    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('shortDescription', formData.shortDescription);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price);
    if (formData.discount > 0) formDataToSend.append('originalPrice', formData.originalPrice);
    formDataToSend.append('discount', formData.discount);
    formData.images.forEach((image, index) => {
      if (image) formDataToSend.append('images', image);
    });
    formDataToSend.append('category', formData.category);
    if (editingId) {
      formDataToSend.append('existingImages', JSON.stringify(formData.existingImages));
    }

    try {
      console.log('Отправляемые данные:', Object.fromEntries(formDataToSend));
      const res = await fetch(url, {
        method,
        body: formDataToSend,
        credentials: 'include'
      });
      const data = await res.json();
      console.log('Ответ сервера:', data);
      if (res.ok) {
        if (editingId) {
          setProducts(products.map(p => (p._id === editingId ? data : p)));
          setEditingId(null);
        } else {
          setProducts([...products, data]);
        }
        setFormData({
          name: '',
          shortDescription: '',
          description: '',
          price: '',
          originalPrice: '',
          discount: '',
          images: [null, null, null, null],
          existingImages: [],
          category: ''
        });
      } else {
        setError(data.message || 'Ошибка загрузки продукта');
      }
    } catch (err) {
      console.error('Ошибка запроса:', err);
      setError('Ошибка сервера: ' + err.message);
    }
  };

  const handleEdit = (product) => {
    console.log('Редактируем продукт:', product); // Дебаг структуры продукта
    setFormData({
      name: product.name || '',
      shortDescription: product.shortDescription || '',
      description: product.description || '',
      price: product.price || '',
      originalPrice: product.originalPrice || '',
      discount: product.discount || '',
      images: [null, null, null, null],
      existingImages: product.images || [],
      category: product.category?._id || ''
    });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE', credentials: 'include' });
      if (res.ok) setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      console.error('Ошибка удаления:', err);
      setError('Ошибка удаления продукта: ' + err.message);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const categoryName = prompt('Введите название категории:');
    const parentId = prompt('Введите ID родительской категории (оставьте пустым для верхнего уровня):');
    if (categoryName) {
      try {
        const res = await fetch('http://localhost:5000/api/categories', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: categoryName, parentCategory: parentId || null })
        });
        const data = await res.json();
        if (res.ok) setCategories([...categories, data]);
        else setError(data.message || 'Ошибка добавления категории');
      } catch (err) {
        setError('Ошибка сервера: ' + err.message);
      }
    }
  };

  if (!isAuthenticated) {
    return (
        <div className="admin-panel">
          <div className="password-modal">
            <div className="password-modal-content">
              <h2>Доступ к админ-панели</h2>
              <form onSubmit={handlePasswordSubmit}>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Введите пароль"
                    className="admin-input"
                    required
                />
                {passwordError && <p className="admin-error">{passwordError}</p>}
                <button type="submit" className="admin-button submit">Войти</button>
              </form>
            </div>
          </div>
        </div>
    );
  }

  return (
      <div className="admin-panel">
        <HeaderCatalog />
        <div className="container">
          <div className="admin-panel_container">
            <h2 className="admin-title">Админ-панель</h2>
            <button onClick={handleAddCategory} className="admin-button add-category">Добавить категорию</button>
            <h3 className="admin-subtitle">{editingId ? 'Редактировать продукт' : 'Добавить продукт'}</h3>
            {error && <p className="admin-error">{error}</p>}
            <form onSubmit={handleSubmit} className="admin-form">
              <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Название"
                  required
                  className="admin-input"
              />
              <textarea
                  name="shortDescription"
                  value={formData.shortDescription}
                  onChange={handleChange}
                  placeholder="Краткое описание (для карточки продукта)"
                  className="admin-textarea"
              />
              <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Полное описание (для страницы продукта)"
                  className="admin-textarea"
              />
              <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  placeholder="Цена"
                  required
                  className="admin-input"
                  step="0.01"
              />
              <input
                  type="number"
                  name="originalPrice"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  placeholder="Исходная цена"
                  className="admin-input"
                  step="0.01"
              />
              <input
                  type="number"
                  name="discount"
                  value={formData.discount}
                  onChange={handleChange}
                  placeholder="Скидка (%)"
                  className="admin-input"
                  min="0"
                  max="100"
              />
              {formData.existingImages.length > 0 && (
                  <div className="existing-images">
                    <h4>Текущие изображения:</h4>
                    <ImageSlider images={formData.existingImages.map(img => img.replace('/public', ''))} productName={formData.name} />
                  </div>
              )}
              {[0, 1, 2, 3].map(index => (
                  <input
                      key={index}
                      type="file"
                      name="images"
                      accept="image/*"
                      onChange={(e) => handleChange(e, index)}
                      className="admin-input file-input"
                  />
              ))}
              <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  required
                  className="admin-select"
              >
                <option value="">Выберите категорию</option>
                {categories?.length > 0 &&
                    categories.map(category => (
                        <option key={category._id} value={category._id}>
                          {category.parentCategory
                              ? `${category.name} (в ${category.parentCategory.name || category.parentCategory})`
                              : category.name}
                        </option>
                    ))}
              </select>
              <button type="submit" className="admin-button submit">
                {editingId ? 'Обновить' : 'Добавить'}
              </button>
              {editingId && (
                  <button type="button" onClick={() => setEditingId(null)} className="admin-button cancel">
                    Отмена
                  </button>
              )}
            </form>
            <h3 className="admin-subtitle">Список продуктов</h3>
            <div className="admin-product-list">
              {products.map(product => {
                // Защитная проверка на наличие product и его полей
                if (!product || !product._id) {
                  console.warn('Некорректный продукт:', product);
                  return null;
                }
                return (
                    <div key={product._id} className="admin-product-item">
                      <h4 className="admin-product-title">
                        {product.name || 'Без названия'} (
                        {product.category && product.category.name ? product.category.name : 'Без категории'})
                      </h4>
                      <p className="admin-product-price">
                        Цена: {product.price ? `${product.price} лей` : 'Не указана'}{' '}
                        {product.discount > 0 && `(Скидка: ${product.discount}%)`}
                      </p>
                      <p className="admin-product-short-desc">
                        {product.shortDescription || 'Краткое описание отсутствует'}
                      </p>
                      <ImageSlider
                          images={
                            product.images && Array.isArray(product.images)
                                ? product.images.map(img => {
                                  console.log('Путь к изображению:', img, 'Преобразовано:', img.replace('/public', ''));
                                  return img.replace('/public', '');
                                })
                                : []
                          }
                          productName={product.name || 'Без названия'}
                      />
                      <div className="admin-product-actions">
                        <button onClick={() => handleEdit(product)} className="admin-button edit">
                          Редактировать
                        </button>
                        <button onClick={() => handleDelete(product._id)} className="admin-button delete">
                          Удалить
                        </button>
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
  );
}

export default AdminPanel;