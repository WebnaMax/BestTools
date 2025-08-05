const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
// Обновленный origin для фронтенда на порте 3000
app.use(cors({
    origin: 'http://localhost:3000', // Фронтенд запускается на 3000
    credentials: true, // Разрешить cookies и credentials
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Разрешенные методы
    allowedHeaders: ['Content-Type', 'Authorization'] // Разрешенные заголовки
}));
// Обработка ошибок парсинга JSON
app.use(express.json({ limit: '50mb' }));
app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({ error: 'Invalid JSON' });
    }
    next();
});

app.use('/public', express.static('public')); // Для обслуживания статических файлов
app.use('/images', express.static(path.join(__dirname, 'public/images')));

if (!process.env.MONGODB_URI) {
    console.error('MONGODB_URI is not defined in .env file');
    process.exit(1);
}

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB:', mongoose.connection.db.databaseName))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1);
    });

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);

const fs = require('fs');
const path = require('path');
const Product = require('./models/Product');

app.get('/api/products', async (req, res) => {
    try {
        const products = await Product.find();
        const productsWithImageUrls = products.map(product => ({
            ...product.toObject(),
            images: product.images ? product.images.map(img => `/images${img}`) : []
        }));
        res.json(productsWithImageUrls);
    } catch (err) {
        console.error('Error fetching products:', err);
        res.status(500).json({ error: 'Failed to fetch products' });
    }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));