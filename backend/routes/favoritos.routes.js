const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const [favoritos] = await db.query(`
      SELECT p.*, c.nombre as categoria_nombre,
             (SELECT url_imagen FROM imagenes_publicacion WHERE publicacion_id = p.id AND es_principal = 1 LIMIT 1) as imagen_principal
      FROM favoritos f
      JOIN publicaciones p ON f.publicacion_id = p.id
      JOIN categorias c ON p.categoria_id = c.id
      WHERE f.usuario_id = ?
      ORDER BY f.fecha_agregado DESC
    `, [userId]);
    
    res.json({ favoritos });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener favoritos' });
  }
});

module.exports = router;