const express = require('express');
const router = express.Router();
const publicacionesController = require('../controllers/publicaciones.controller');

router.get('/', publicacionesController.getAll);
router.get('/:id', publicacionesController.getById);
router.post('/', publicacionesController.create);
router.put('/:id/estado', publicacionesController.updateEstado);
router.get('/usuario/:userId', publicacionesController.getByUser);
router.delete('/:id', publicacionesController.delete);

module.exports = router;