const router = require('express').Router();

const InmueblesController = require('../../controllers/inmuebles.controller');
const { checkInmuebleId, checkFields } = require('../../middlewares/inmuebles.middleware');

router.get('/', InmueblesController.getAllInmuebles);
router.get('/:inmuebleId', checkInmuebleId, InmueblesController.getInmuebleById);
router.post('/', checkFields, InmueblesController.createInmueble);
router.put('/:inmuebleId', checkFields, checkInmuebleId, InmueblesController.updateInmueble);
router.delete('/:inmuebleId', checkInmuebleId, InmueblesController.deleteInmueble);

module.exports = router;