const { Schema, model } = require('mongoose');

const InmuebleSchema = new Schema ({
    piso: Number,
    letra: String,
    extension: Number,
    numero_habitaciones: Number,
    alquilado: Boolean,
    nombre_propietario: String,
    mail_contacto: String
}, {
    versionKey: false,
    timestamps: true
});

module.exports = model('inmueble', InmuebleSchema);