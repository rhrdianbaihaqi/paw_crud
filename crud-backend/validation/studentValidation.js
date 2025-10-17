const Joi = require('joi');

// createValidation
const createValidation = (data) => {
    const studentSchema = Joi.object({
        nim: Joi.string().required(),
        nama: Joi.string().required(),
        jurusan: Joi.string().required(),
        fakultas: Joi.string().required(),
        angkatan: Joi.number().required(),
    });
    return studentSchema.validate(data);
};

module.exports = {
    createValidation,
};