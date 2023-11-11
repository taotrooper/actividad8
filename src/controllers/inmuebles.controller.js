const InmueblesModel = require('../models/inmueble.model');

// buscar todos los inmuebles
// corresponde a la ruta GET /api/inmuebles
const getAllInmuebles = async (req, res) => {
    try {
        const inmuebles = await InmueblesModel.find();
        res.json(inmuebles);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

// buscar un inmueble por ID
// corresponde a la ruta GET /api/inmuebles/:id
const getInmuebleById = async (req, res) => {
    try {
        const { inmuebleId } = req.params;
        const inmueble = await InmueblesModel.findById(inmuebleId);
        res.json(inmueble);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

// crear un nuevo inmueble
// corresponde a la ruta POST /api/inmuebles
const createInmueble = async (req, res) => {
    try {
        const result = await InmueblesModel.create(req.body);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

// actualizar un inmueble
// corresponde a la ruta PUT /api/inmuebles/:inmuebleId
const updateInmueble = async (req, res) => {
    try {
        const { inmuebleId } = req.params;
        const result = await InmueblesModel.findByIdAndUpdate(inmuebleId, req.body, { new: true });
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

// actualizar un inmueble
// corresponde a la ruta DELETE /api/inmuebles/:inmuebleId
const deleteInmueble = async (req, res) => {
    try {
        const { inmuebleId } = req.params;
        const result = await InmueblesModel.findByIdAndDelete(inmuebleId);
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
}

module.exports = { getAllInmuebles, getInmuebleById, createInmueble, updateInmueble, deleteInmueble };