const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/:userId', async (req, res) => {
  try {
    const { userId } = req.params;
    const [valoraciones] = await db.query(`
      SELECT v.*, u.nombre as valorador_nombre, u.avatar as valorador_avatar
      FROM valoraciones v
      JOIN usuarios u ON v.usuario_valorador_id = u.id
      WHERE v.usuario_valorado_id = ?
      ORDER BY v.fecha_valoracion DESC
    `, [userId]);
    
    res.json({ valoraciones });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener valoraciones' });
  }
});

module.exports = router;