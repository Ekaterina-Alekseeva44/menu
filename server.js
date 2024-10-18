const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

// Используем CORS для разрешения запросов с другого источника
app.use(cors());

// Папка для хранения изображений
app.use('/images', express.static(path.join(__dirname, 'images')));

// Пример маршрута для получения изображения
app.get('/image', (req, res) => {
    res.json({ url: 'http://localhost:3000/images/your-image.jpg' }); // Изображение
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});