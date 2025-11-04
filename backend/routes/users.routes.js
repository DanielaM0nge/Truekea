const express = require('express');
const router = express.Router();

// Rutas de usuarios (por ahora vacías)
router.get('/:id', (req, res) => {
  res.json({ message: 'Obtener usuario por ID' });
});

module.exports = router;