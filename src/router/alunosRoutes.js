const express = require("express");
const router = express.Router();

const alunosController = require("../controller/alunosController");


router.get("/all", alunosController.buscarAlunos);
router.get("/buscar/:id",  alunosController.buscarAlunoById);
router.post("/criar",  alunosController.cadastrarAluno);
router.delete("/deletar/:id",  alunosController.deletarAluno);
router.patch("/atualizar/:id",  alunosController.atualizarAluno);

module.exports = router;