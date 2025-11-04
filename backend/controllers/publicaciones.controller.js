const db = require('../config/database');

// Obtener todas las publicaciones
exports.getAll = async (req, res) => {
  try {
    const { tipo, categoria, estado, busqueda, limit = 20, offset = 0 } = req.query;
    
    let query = `
      SELECT p.*, c.nombre as categoria_nombre, u.nombre as usuario_nombre, u.avatar,
             (SELECT url_imagen FROM imagenes_publicacion WHERE publicacion_id = p.id AND es_principal = 1 LIMIT 1) as imagen_principal
      FROM publicaciones p
      JOIN categorias c ON p.categoria_id = c.id
      JOIN usuarios u ON p.usuario_id = u.id
      WHERE p.estado_publicacion = 'activo'
    `;
    
    const params = [];
    
    if (tipo) {
      query += ' AND p.tipo_transaccion = ?';
      params.push(tipo);
    }
    
    if (categoria) {
      query += ' AND p.categoria_id = ?';
      params.push(categoria);
    }
    
    if (busqueda) {
      query += ' AND (p.titulo LIKE ? OR p.descripcion LIKE ?)';
      params.push(`%${busqueda}%`, `%${busqueda}%`);
    }
    
    query += ' ORDER BY p.fecha_publicacion DESC LIMIT ? OFFSET ?';
    params.push(parseInt(limit), parseInt(offset));
    
    const [publicaciones] = await db.query(query, params);
    
    res.json({ publicaciones, total: publicaciones.length });
  } catch (error) {
    console.error('Error al obtener publicaciones:', error);
    res.status(500).json({ error: 'Error al obtener publicaciones' });
  }
};

// Obtener una publicación por ID
exports.getById = async (req, res) => {
  try {
    const { id } = req.params;
    
    const [publicaciones] = await db.query(`
      SELECT p.*, c.nombre as categoria_nombre, u.nombre as usuario_nombre, 
             u.email, u.telefono, u.avatar, u.rating, u.ubicacion as usuario_ubicacion
      FROM publicaciones p
      JOIN categorias c ON p.categoria_id = c.id
      JOIN usuarios u ON p.usuario_id = u.id
      WHERE p.id = ?
    `, [id]);
    
    if (publicaciones.length === 0) {
      return res.status(404).json({ error: 'Publicación no encontrada' });
    }
    
    const [imagenes] = await db.query(
      'SELECT * FROM imagenes_publicacion WHERE publicacion_id = ? ORDER BY orden',
      [id]
    );
    
    // Incrementar vistas
    await db.query('UPDATE publicaciones SET vistas = vistas + 1 WHERE id = ?', [id]);
    
    res.json({ publicacion: publicaciones[0], imagenes });
  } catch (error) {
    console.error('Error al obtener publicación:', error);
    res.status(500).json({ error: 'Error al obtener publicación' });
  }
};

// Crear publicación
exports.create = async (req, res) => {
  try {
    const { usuario_id, categoria_id, titulo, descripcion, tipo_transaccion, precio, estado_producto, ubicacion } = req.body;
    
    const [result] = await db.query(
      `INSERT INTO publicaciones (usuario_id, categoria_id, titulo, descripcion, tipo_transaccion, precio, estado_producto, ubicacion)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [usuario_id, categoria_id, titulo, descripcion, tipo_transaccion, precio, estado_producto, ubicacion]
    );
    
    res.status(201).json({
      message: 'Publicación creada exitosamente',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error al crear publicación:', error);
    res.status(500).json({ error: 'Error al crear publicación' });
  }
};

// Actualizar estado de publicación
exports.updateEstado = async (req, res) => {
  try {
    const { id } = req.params;
    const { estado_publicacion } = req.body;
    
    await db.query(
      'UPDATE publicaciones SET estado_publicacion = ? WHERE id = ?',
      [estado_publicacion, id]
    );
    
    res.json({ message: 'Estado actualizado correctamente' });
  } catch (error) {
    console.error('Error al actualizar estado:', error);
    res.status(500).json({ error: 'Error al actualizar estado' });
  }
};

// Obtener publicaciones de un usuario
exports.getByUser = async (req, res) => {
  try {
    const { userId } = req.params;
    
    const [publicaciones] = await db.query(`
      SELECT p.*, c.nombre as categoria_nombre,
             (SELECT url_imagen FROM imagenes_publicacion WHERE publicacion_id = p.id AND es_principal = 1 LIMIT 1) as imagen_principal
      FROM publicaciones p
      JOIN categorias c ON p.categoria_id = c.id
      WHERE p.usuario_id = ?
      ORDER BY p.fecha_publicacion DESC
    `, [userId]);
    
    res.json({ publicaciones });
  } catch (error) {
    console.error('Error al obtener publicaciones del usuario:', error);
    res.status(500).json({ error: 'Error al obtener publicaciones' });
  }
};

// Eliminar publicación
exports.delete = async (req, res) => {
  try {
    const { id } = req.params;
    
    await db.query('DELETE FROM publicaciones WHERE id = ?', [id]);
    
    res.json({ message: 'Publicación eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar publicación:', error);
    res.status(500).json({ error: 'Error al eliminar publicación' });
  }
};