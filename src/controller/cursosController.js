const mongoose = require("mongoose");
const CursosSchema = require("../models/CursosSchema");

const cadastrarCurso = async (request, response) => {
  const { nome, carga_horaria, docente } = request.body;

  try {
    const novoCurso = new CursosSchema(request.body);
    const salvarCurso = await novoCurso.save();

    response.status(201).send({
      message: "Curso cadastrado com sucesso",
      Cadastro: salvarCurso,
    });
  } catch (err) {
    response.status(500).send({
      message: err.message,
    });
  }
};

const buscarCursos = async (request, response) => {
  try {
    const cursos = await CursosSchema.find();
    if (cursos.length == 0) {
      return response.status(404).send({
        message: `Cursos não encontrados`,
      });
    }
    response.status(200).send(cursos);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const buscarCursoById = async (request, response) => {
  const { id } = request.params;

  try {
    const cursoById = await CursosSchema.find({ id });

    if (cursoById.length == 0) {
      return response.status(404).json({
        Prezades: `O curso não foi encontrado.`,
      });
    }

    response.status(200).json(cursoById);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const atualizarCurso = async (request, response) => {
  const { id } = request.params;
  const { nome, carga_horaria, docente } = request.body;

  try {
    const curso = await CursosSchema.find({
      id,
    }).updateOne({
      nome,
      carga_horaria,
      docente,
    });

    const cursoAtualizado = await CursosSchema.find({
      id,
    });

    if (cursoAtualizado.length == 0) {
      return response.status(404).json({
        message: `O curso não foi encontrado.`,
      });
    }

    response.status(200).send({
      message: "Curso atualizado com sucesso",
      cursoAtualizado,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const deletarCurso = async (request, response) => {
  const { id } = request.params;
  try {
    const curso = await CursosSchema.deleteOne({
      id,
    });

    if (curso.deletedCount === 1) {
      return response
        .status(200)
        .send({ message: `Curso deletado com sucesso!` });
    } else {
      return response.status(404).send({
        Prezades: "O curso não foi encontrado.",
      });
    }
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  cadastrarCurso,
  buscarCursos,
  buscarCursoById,
  atualizarCurso,
  deletarCurso,
};
