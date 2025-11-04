const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Rutas
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/users', require('./routes/users.routes'));
app.use('/api/publicaciones', require('./routes/publicaciones.routes'));
app.use('/api/categorias', require('./routes/categorias.routes'));
app.use('/api/conversaciones', require('./routes/conversaciones.routes'));
app.use('/api/mensajes', require('./routes/mensajes.routes'));
app.use('/api/favoritos', require('./routes/favoritos.routes'));
app.use('/api/valoraciones', require('./routes/valoraciones.routes'));

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ 
    message: '🚀 Truekea API funcionando correctamente',
    version: '1.0.0'
  });
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Error interno del servidor',
    message: err.message 
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});