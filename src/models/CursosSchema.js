const mongoose = require('mongoose');

const cursosSchema = new mongoose.Schema({
    id: {
      type: mongoose.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    nome: {
      type: String,
      required: true,
    },
    carga_horaria: {
      type: String,
      required: true,
    },
    docente: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });
  
  module.exports = mongoose.model("cursos", cursosSchema);
  