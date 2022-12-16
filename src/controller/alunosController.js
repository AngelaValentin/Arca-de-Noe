const mongoose = require("mongoose");
const AlunosSchema = require("../models/AlunosSchema");

const cadastrarAluno = async (request, response) => {
  const { nome, identidade, idade, telefone, estuda, serie } = request.body;

  try {
    const novoAluno = new AlunosSchema(request.body);
    const salvarAluno = await novoAluno.save();

    response.status(201).send({
      message: "Aluno cadastrado com sucesso",
      Cadastro: salvarAluno,
    });
  } catch (err) {
    response.status(500).send({
      message: err.message,
    });
  }
};

const buscarAlunos = async (request, response) => {
  try {
    const alunos = await AlunosSchema.find();
    if (alunos.length == 0) {
      return response.status(404).send({
        message: `Alunos não encontrados`,
      });
    }
    response.status(200).send(alunos);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const buscarAlunoById = async (request, response) => {
  const { id } = request.params;

  try {
    const alunoById = await AlunosSchema.find({ id });

    if (alunoById.length == 0) {
      return response.status(404).json({
        Prezades: `O aluno não foi encontrado.`,
      });
    }

    response.status(200).json(alunoById);
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const atualizarAluno = async (request, response) => {
  const { id } = request.params;
  const { nome, idade, telefone, estuda, serie } = request.body;

  try {
    const aluno = await AlunosSchema.find({
      id,
    }).updateOne({
      nome,
      idade,
      telefone,
      estuda,
      serie,
    });

    const alunoAtualizado = await AlunosSchema.find({
      id,
    });

    if (alunoAtualizado.length == 0) {
      return response.status(404).json({
        message: `O aluno não foi encontrado.`,
      });
    }

    response.status(200).send({
      message: "Aluno atualizado com sucesso",
      alunoAtualizado,
    });
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

const deletarAluno = async (request, response) => {
  const { id } = request.params;
  try {
    const aluno= await AlunosSchema.deleteOne({
      id
    });


    if (aluno.deletedCount === 1) {
      return response.status(200).send({ message: `Aluno deletado com sucesso!` });
    } else {

      return response.status(404).send({
        Prezades: "O aluno não foi encontrado.",
      });
    }
  } catch (error) {
    response.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  cadastrarAluno,
  buscarAlunos,
  buscarAlunoById,
  atualizarAluno,
  deletarAluno,
};
