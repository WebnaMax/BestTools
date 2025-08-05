const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
  origin: 'http://localhost:3000', // Укажите URL вашего фронтенда
  credentials: true, // Разрешить cookies и credentials
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Разрешенные методы
  allowedHeaders: ['Content-Type', 'Authorization'] // Разрешенные заголовки
}));
app.use(express.json());

// Проверка наличия MONGODB_URI
if (!process.env.MONGODB_URI) {
  console.error('MONGODB_URI is not defined in .env file');
  process.exit(1);
}

// Подключение к MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB:', mongoose.connection.db.databaseName))
  .catch(err => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

// Обработка ошибок Mongoose
mongoose.connection.on('error', err => {
  console.error('MongoDB connection error:', err);
});

const apiRoutes = require('./routes/api');
app.use('/api', apiRoutes);
app.use('/public', express.static('public')); // Для обслуживания статических файлов

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));