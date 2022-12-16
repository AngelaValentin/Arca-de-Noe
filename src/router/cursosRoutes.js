const express = require("express");
const router = express.Router();

const cursosController = require("../controller/cursosController");

router.get("/all", cursosController.buscarCursos);
router.get("/buscar/:id", cursosController.buscarCursoById);
router.post("/criar", cursosController.cadastrarCurso);
router.delete("/deletar/:id", cursosController.deletarCurso);
router.patch("/atualizar/:id", cursosController.atualizarCurso);

module.exports = router;
