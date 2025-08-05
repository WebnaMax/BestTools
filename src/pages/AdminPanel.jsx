import React, { useState, useEffect } from 'react';
import ImageSlider from './ImageSlider';
import '../styles/AdminPanel.scss';

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

  useEffect(() => {
    fetch('http://localhost:5000/api/categories', { credentials: 'include' })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) setCategories(data);
        else setCategories([]);
      })
      .catch(err => {
        console.error('Error fetching categories:', err);
        setCategories([]);
      });
    fetch('http://localhost:5000/api/products', { credentials: 'include' })
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then(data => {
        if (Array.isArray(data)) setProducts(data);
        else setProducts([]);
      })
      .catch(err => {
        console.error('Error fetching products:', err);
        setError('Error fetching products: ' + err.message);
      });
  }, []);

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
      console.log('Sending data:', Object.fromEntries(formDataToSend)); // Отладка
      const res = await fetch(url, {
        method,
        body: formDataToSend,
        credentials: 'include'
      });
      const data = await res.json();
      console.log('Server response:', data); // Отладка ответа
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
      console.error('Fetch error:', err);
      setError('Ошибка сервера: ' + err.message);
    }
  };

  const handleEdit = (product) => {
    setFormData({
      name: product.name,
      shortDescription: product.shortDescription || '',
      description: product.description || '',
      price: product.price,
      originalPrice: product.originalPrice || '',
      discount: product.discount || '',
      images: [null, null, null, null],
      existingImages: product.images || [],
      category: product.category._id
    });
    setEditingId(product._id);
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/products/${id}`, { method: 'DELETE', credentials: 'include' });
      if (res.ok) setProducts(products.filter(p => p._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const categoryName = prompt('Enter category name:');
    const parentId = prompt('Enter parent category ID (leave empty for top-level):');
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

  return (
    <div className="admin-panel">
      <h2 className="admin-title">Admin Panel</h2>
      <button onClick={handleAddCategory} className="admin-button add-category">Add Category</button>
      <h3 className="admin-subtitle">{editingId ? 'Edit Product' : 'Add Product'}</h3>
      {error && <p className="admin-error">{error}</p>}
      <form onSubmit={handleSubmit} className="admin-form">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="admin-input"
        />
        <textarea
          name="shortDescription"
          value={formData.shortDescription}
          onChange={handleChange}
          placeholder="Short Description (for product card)"
          className="admin-textarea"
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Full Description (for product page)"
          className="admin-textarea"
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          required
          className="admin-input"
          step="0.01"
        />
        <input
          type="number"
          name="originalPrice"
          value={formData.originalPrice}
          onChange={handleChange}
          placeholder="Original Price"
          className="admin-input"
          step="0.01"
        />
        <input
          type="number"
          name="discount"
          value={formData.discount}
          onChange={handleChange}
          placeholder="Discount (%)"
          className="admin-input"
          min="0"
          max="100"
        />
        {formData.existingImages.length > 0 && (
          <div className="existing-images">
            <h4>Current Images:</h4>
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
          <option value="">Select Category</option>
          {categories?.length > 0 &&
            categories.map(category => (
              <option key={category._id} value={category._id}>
                {category.parentCategory
                  ? `${category.name} (under ${category.parentCategory.name || category.parentCategory})`
                  : category.name}
              </option>
            ))}
        </select>
        <button type="submit" className="admin-button submit">
          {editingId ? 'Update' : 'Add'}
        </button>
        {editingId && (
          <button type="button" onClick={() => setEditingId(null)} className="admin-button cancel">
            Cancel
          </button>
        )}
      </form>
      <h3 className="admin-subtitle">Product List</h3>
      <div className="admin-product-list">
        {products.map(product => (
          <div key={product._id} className="admin-product-item">
            <h4 className="admin-product-title">
              {product.name} ({product.category.name})
            </h4>
            <p className="admin-product-price">
              Price: {product.price} lei{' '}
              {product.discount > 0 && `(Discount: ${product.discount}%)`}
            </p>
            <p className="admin-product-short-desc">{product.shortDescription || 'No short description'}</p>
            <ImageSlider
              images={product.images.map(img => {
                console.log('Image path:', img, 'Transformed:', img.replace('/public', ''));
                return img.replace('/public', '');
              })}
              productName={product.name}
            />
            <div className="admin-product-actions">
              <button onClick={() => handleEdit(product)} className="admin-button edit">
                Edit
              </button>
              <button onClick={() => handleDelete(product._id)} className="admin-button delete">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;