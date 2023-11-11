const InmueblesModel = require('../models/inmueble.model');

// Comprueba que el id de inmueble es un número
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

// Comprueba que los valores del body son del tipo y formato correcto
const checkFields = (req, res, next) => {
    if (req.body.piso && isNaN(parseInt(req.body.piso))) {
        return res.json({ fatal: 'El piso no es un número' });
    }
    if (req.body.extension && isNaN(parseFloat(req.body.extension))) {
        return res.json({ fatal: 'La extensión no es un número' });
    }
    if (req.body.numero_habitaciones && isNaN(parseInt(req.body.numero_habitaciones))) {
        return res.json({ fatal: 'El número de habitaciones no es un número' });
    }
    if (req.body.alquilado && typeof req.body.alquilado !== 'boolean') {
        return res.json({ fatal: 'Alquilado debe tener como variables true o false' });
    }
    if (req.body.mail_contacto) {
        const regex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,6}$/;
        if (!regex.test(req.body.mail_contacto)) {
            return res.json({ fatal: 'La dirección de correo de mail_contacto no es válida' });
        }
    }
    next();
}

module.exports = { checkInmuebleId, checkFields };