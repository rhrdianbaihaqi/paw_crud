const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema(
  {
    nim: {
        type: String,
    },
    nama: {
        type: String,
    },
    jurusan: {
        type: String,
    },
    fakultas: {
        type: String,
    },
    angkatan: {
        type: Number,
    },
  },
    {
    timestamps: true,
});

module.exports = mongoose.model('Student', studentSchema);