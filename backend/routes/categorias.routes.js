const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/', async (req, res) => {
  try {
    const [categorias] = await db.query('SELECT * FROM categorias WHERE activo = 1');
    res.json({ categorias });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
});

module.exports = router;