const InmueblesModel = require('../models/inmueble.model');

const checkInmuebleId = async (req, res, next) => {
    // Comprobar si el valor de inmuebleId que viene en los parámetros es un ID correcto
    const { inmuebleId } = req.params;
    try {
        const inmueble = await InmueblesModel.findById(inmuebleId);
        if (!inmueble) {
            return res.json({ fatal: 'El inmueble no existe' });
        }
        next();
    } catch(error) {
        res.json({fatal: error.message});
    }
}

module.exports = { checkInmuebleId };