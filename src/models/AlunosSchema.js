const mongoose = require('mongoose');

const alunosSchema = new mongoose.Schema({
    id: {
      type: mongoose.Types.ObjectId,
      default: mongoose.Types.ObjectId,
    },
    nome: {
      type: String,
      required: true,
    },
    identidade: {
      type: String,
      required: true,
    },
    idade: {
      type: Number,
      required: true,
    },
    telefone: {
      type: String,
      required: true,
    },
    estuda:{
      type: String,
      required: true,
    },
    serie:{
        type: String,
        required: false,
      },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  });
  
  module.exports = mongoose.model("alunos", alunosSchema);
  