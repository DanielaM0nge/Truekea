const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const [conversaciones] = await db.query(`
      SELECT c.*, p.titulo as publicacion_titulo, 
             u.nombre as otro_usuario_nombre, u.avatar as otro_usuario_avatar
      FROM conversaciones c
      JOIN publicaciones p ON c.publicacion_id = p.id
      JOIN usuarios u ON (CASE WHEN c.comprador_id = ? THEN c.vendedor_id ELSE c.comprador_id END) = u.id
      WHERE c.comprador_id = ? OR c.vendedor_id = ?
      ORDER BY c.fecha_actualizacion DESC
    `, [userId, userId, userId]);
    
    res.json({ conversaciones });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener conversaciones' });
  }
});

module.exports = router;