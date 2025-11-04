const express = require('express');
const router = express.Router();
const db = require('../config/database');

router.get('/:conversacionId', async (req, res) => {
  try {
    const { conversacionId } = req.params;
    const [mensajes] = await db.query(`
      SELECT m.*, u.nombre as remitente_nombre, u.avatar as remitente_avatar
      FROM mensajes m
      JOIN usuarios u ON m.remitente_id = u.id
      WHERE m.conversacion_id = ?
      ORDER BY m.fecha_envio ASC
    `, [conversacionId]);
    
    res.json({ mensajes });
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mensajes' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { conversacion_id, remitente_id, mensaje } = req.body;
    const [result] = await db.query(
      'INSERT INTO mensajes (conversacion_id, remitente_id, mensaje) VALUES (?, ?, ?)',
      [conversacion_id, remitente_id, mensaje]
    );
    
    res.status(201).json({ id: result.insertId, message: 'Mensaje enviado' });
  } catch (error) {
    res.status(500).json({ error: 'Error al enviar mensaje' });
  }
});

module.exports = router;